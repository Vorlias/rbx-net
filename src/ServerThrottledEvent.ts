import NetServerEvent from "./ServerEvent";
import { RequestCounter, errorft } from "./internal";
import throttler from "./Throttle";
import { GetConfiguration } from "./configuration";

/**
 * A server event that can be rate limited
 * @rbxts server
 */
export default class NetServerThrottledEvent extends NetServerEvent {
	private maxRequestsPerMinute: number = 0;
	private clientRequests: RequestCounter;

	constructor(name: string, rateLimit: number) {
		super(name);
		this.maxRequestsPerMinute = rateLimit;

		this.clientRequests = throttler.Get(`Event~${name}`);

		const clientValue = new Instance("IntValue", this.instance);
		clientValue.Name = "RateLimit";
		clientValue.Value = rateLimit;
	}

	/**
	 * @deprecated
	 * @see SetRateLimit
	 */
	public readonly setRateLimit = (requestsPerMinute: number) => {
		warn(`${this.instance.Name}::setRateLimit is deprecated, use ${this.instance.Name}::SetRateLimit instead!`);
		return this.SetRateLimit(requestsPerMinute);
	};

	/**
	 * @deprecated
	 * @see GetRateLimit
	 */
	public readonly getRateLimit = () => {
		warn(`${this.instance.Name}::getRateLimit is deprecated, use ${this.instance.Name}::GetRateLimit instead!`);
		return this.GetRateLimit();
	};

	/**
	 * Connect a function to fire when the event is invoked by the client
	 * @param callback The function fired when the event is invoked by the client
	 */
	public Connect<T extends Array<any>>(callback: (sourcePlayer: Player, ...args: T) => void) {
		return this.instance.OnServerEvent.Connect((player: Player, ...args: Array<any>) => {
			const maxRequests = this.maxRequestsPerMinute;
			const clientRequestCount = this.clientRequests.Get(player);
			if (clientRequestCount >= maxRequests) {
				errorft(GetConfiguration("ServerThrottleMessage"), {
					player: player.UserId,
					remote: this.instance.Name,
					limit: maxRequests,
				});
			} else {
				this.clientRequests.Increment(player);
				callback(player, ...(args as T));
			}
		});
	}

	/**
	 * The number of requests allowed per minute per user
	 */
	public SetRateLimit(requestsPerMinute: number) {
		this.maxRequestsPerMinute = requestsPerMinute;

		let clientValue = this.instance.FindFirstChild<IntValue>("RateLimit");
		if (clientValue) {
			clientValue.Value = requestsPerMinute;
		} else {
			clientValue = new Instance("IntValue", this.instance);
			clientValue.Name = "RateLimit";
			clientValue.Value = requestsPerMinute;
		}
	}

	public GetRateLimit() {
		return this.maxRequestsPerMinute;
	}
}
