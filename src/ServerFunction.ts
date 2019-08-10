import { findOrCreateRemote, IS_CLIENT, StaticArguments, t_assert } from "./internal";

function t_string(value: unknown): value is string {
	return true;
}

/**
 * A function on the server
 * @rbxts server
 */
export default class NetServerFunction<CR extends any = any, C extends Array<any> = Array<unknown>> {
	/** @internal */
	protected instance: RemoteFunction;
	protected propTypes: C | undefined;

	constructor(name: string, ...recievedPropTypes: C) {
		this.instance = findOrCreateRemote("RemoteFunction", name);
		assert(!IS_CLIENT, "Cannot create a Net.ServerFunction on the Client!");

		if (recievedPropTypes.size() > 0) {
			this.propTypes = recievedPropTypes;
		}
	}

	/**
	 * @deprecated
	 * @see GetCallback
	 */
	public readonly getCallback = () => {
		warn(`${this.instance.Name}::getCallback is deprecated, use ${this.instance.Name}::GetCallback instead!`);
		return this.GetCallback();
	};

	/**
	 * @deprecated
	 * @see GetClientCache
	 */
	public readonly getClientCache = () => {
		warn(`${this.instance.Name}::getClientCache is deprecated, use ${this.instance.Name}::GetClientCache instead!`);
		return this.GetClientCache();
	};

	/**
	 * @deprecated
	 * @see SetCallback
	 */
	public readonly setCallback = <R extends unknown>(func: (player: Player, ...args: StaticArguments<C>) => R) => {
		warn(`${this.instance.Name}::setCallback is deprecated, use ${this.instance.Name}::SetCallback instead!`);
		return this.SetCallback(func);
	};

	/**
	 * @deprecated
	 * @see SetClientCache
	 */
	public readonly setClientCache = (timeout: number) => {
		warn(`${this.instance.Name}::setClientCache is deprecated, use ${this.instance.Name}::SetClientCache instead!`);
		return this.SetClientCache(timeout);
	};

	/**
	 * The callback function
	 */
	public GetCallback(): Callback {
		return this.instance.OnServerInvoke;
	}

	/**
	 * Set the callback function when called by the client
	 */
	public SetCallback<R extends unknown>(func: (player: Player, ...args: StaticArguments<C>) => R) {
		if (this.instance.OnServerInvoke !== undefined) {
			error(
				`[rbx-net] The callback for ${this.instance.Name} is already set.\n` +
					`\t* Changing this callback may lead to a different behaviour than expected from the client. ` +
					`Thus, it is not allowed.`,
			);
		}

		if (this.propTypes !== undefined) {
			this.instance.OnServerInvoke = (player: Player, ...args: Array<unknown>) => {
				if (t_assert(this.propTypes!, args)) {
					// @ts-ignore ... again. unfortunately.
					return func(player, ...args);
				} else {
					error("Client failed type checks", 2);
				}
			};
		} else {
			this.instance.OnServerInvoke = (func as unknown) as Callback;
		}

		return this;
	}

	/**
	 * The RemoteFunction instance
	 */
	public GetInstance() {
		return this.instance;
	}

	/**
	 * The client cache in seconds
	 */
	public GetClientCache() {
		const cache = this.instance.FindFirstChild("Cache") as NumberValue;
		if (cache) {
			return cache.Value;
		} else {
			return 0;
		}
	}

	/**
	 * Sets a client cache timer in seconds
	 * @param time seconds to cache on client
	 */
	public SetClientCache(time: number) {
		const cache = this.instance.FindFirstChild("Cache") as NumberValue;
		if (!cache) {
			const cacheTimer = new Instance("NumberValue", this.instance);
			cacheTimer.Value = time;
			cacheTimer.Name = "Cache";
		} else {
			cache.Value = time;
		}

		return this;
	}
}
