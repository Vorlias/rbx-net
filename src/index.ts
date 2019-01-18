interface RemoteTypes {
	Event: RemoteEvent;
	Function: RemoteFunction;
}

// tslint:disable:variable-name
const _exports = {}; // hack that fixes _exports for default
// tslint:enable:variable-name

const runService = game.GetService("RunService");
const replicatedStorage = game.GetService("ReplicatedStorage");

const IS_CLIENT = runService.IsClient();
const IS_SERVER = runService.IsServer();
const IS_STUDIO = runService.IsStudio();

const REMOTES_FOLDER_NAME = "Remotes";
const FUNCTIONS_FOLDER_NAME = "Functions";
const EVENTS_FOLDER_NAME = "Events";

let remoteFolder: Folder;
let eventFolder: Folder;
let functionFolder: Folder;

remoteFolder = replicatedStorage.FindFirstChild<Folder>(REMOTES_FOLDER_NAME)!;

if (!remoteFolder) {
	remoteFolder = new Folder(replicatedStorage);
	remoteFolder.Name = REMOTES_FOLDER_NAME;
}

functionFolder = remoteFolder.FindFirstChild<Folder>(FUNCTIONS_FOLDER_NAME)!;
if (!functionFolder) {
	functionFolder = new Folder(remoteFolder);
	functionFolder.Name = FUNCTIONS_FOLDER_NAME;
}

eventFolder = remoteFolder.FindFirstChild<Folder>(EVENTS_FOLDER_NAME)!;
if (!eventFolder) {
	eventFolder = new Folder(remoteFolder);
	eventFolder.Name = EVENTS_FOLDER_NAME;
}

function eventExists(name: string) {
	return eventFolder.FindFirstChild(name) !== undefined;
}

function functionExists(name: string) {
	return functionFolder.FindFirstChild(name) !== undefined;
}

function waitForEvent(name: string, timeOut: number): RemoteEvent | undefined {
	return eventFolder.WaitForChild(name, timeOut);
}

function waitForFunction(name: string, timeOut: number): RemoteFunction | undefined {
	return functionFolder.WaitForChild(name, timeOut);
}

function getRemoteFolder<K extends keyof RemoteTypes>(type: K): Folder {
	let targetFolder: Folder;
	if (type === "Event") {
		targetFolder = eventFolder;
	} else if (type === "Function") {
		targetFolder = functionFolder;
	} else {
		throw "Invalid type: " + type;
	}

	return targetFolder;
}

function findRemoteOrThrow<K extends keyof RemoteTypes>(type: K, name: string): RemoteTypes[K] {
	const targetFolder = getRemoteFolder(type);
	const existing = targetFolder.FindFirstChild(name) as RemoteFunction | RemoteEvent;
	if (existing) {
		return existing;
	} else {
		throw `Could not find Remote of type ${type} called "${name}"`;
	}
}

function findOrCreateRemote<K extends keyof RemoteTypes>(type: K, name: string): RemoteTypes[K] {
	const targetFolder = getRemoteFolder(type);

	const existing = targetFolder.FindFirstChild(name) as RemoteFunction | RemoteEvent;
	if (existing) {
		return existing;
	} else {
		if (!IS_SERVER) {
			throw "Creation of Events or Functions must be done on server!";
		}

		let remote: RemoteEvent | RemoteFunction;

		if (type === "Event") {
			remote = new RemoteEvent();
		} else if (type === "Function") {
			remote = new RemoteFunction();
		} else {
			throw `Invalid Remote Type: ${type}`;
		} // stfu

		remote.Name = name;
		remote.Parent = targetFolder;
		return remote;
	}
}

/**
 * Typescript Networking Library for ROBLOX
 */
export namespace Net {
	const MAX_CLIENT_WAITFORCHILD_TIMEOUT = 10;

	interface VersionType { major: number; minor: number; revision: number; }
	interface VersionInformation { number: VersionType; date: number; tag?: string; }

	/**
	 * Version information
	 * @internal
	 */
	export const VERSION: VersionInformation = {
		number: { major: 0, minor: 5, revision: 0 },
		date: 181216,
		tag: "alpha",
	};

	setmetatable(VERSION, {
		__tostring: (self) => {
			const { major, minor, revision } = self.number;

			return `${major}.${minor}.${revision}`;
		},
	});

	/**
	 * An event on the server
	 */
	export class ServerEvent {
		/** @internal */
		private instance: RemoteEvent;

		/**
		 * Creates a new instance of a server event (Will also create the corresponding remote if it does not exist!)
		 * @param name The name of this server event
		 * @throws If not created on server
		 */
		constructor(name: string) {
			this.instance = findOrCreateRemote("Event", name);
			assert(!IS_CLIENT, "Cannot create a Net.ServerEvent on the Client!");
		}

		/**
		 * The RemoteEvent instance
		 */
		public get Instance() {
			return this.instance;
		}

		/**
		 * The RBXScriptSignal for this RemoteEvent
		 */
		public get Event() {
			return this.instance.OnServerEvent;
		}

		/**
		 * Connect a fucntion to fire when the event is invoked by the client
		 * @param callback The function fired when the event is invoked by the client
		 */
		public Connect<T extends Array<any>>(callback: (sourcePlayer: Player, ...args: T) => void) {
			this.Event.Connect(callback as any);
		}

		/**
		 * Sends the specified arguments to all players
		 * @param args The arguments to send to the players
		 */
		public SendToAllPlayers<T extends Array<any>>(...args: T) {
			this.instance.FireAllClients(...args);
		}

		/**
		 * Sends the specified arguments to a specified player
		 * @param player The player
		 * @param args The arguments to send to the player
		 */
		public SendToPlayer<T extends Array<any>>(player: Player, ...args: T) {
			this.instance.FireClient(player, ...args);
		}

		/**
		 * Sends the specified argumetns to the specified list of players
		 * @param players The players
		 * @param args The arugments to send to these players
		 */
		public SendToPlayers<T extends Array<any>>(players: Array<Player>, ...args: T) {
			for (const player of players) {
				this.SendToPlayer(player, ...args);
			}
		}
	}

	/**
	 * A function on the server
	 */
	export class ServerFunction<CR extends any = any> {
		/** @internal */
		private instance: RemoteFunction;

		/**
		 * Creates a new instance of a server function (Will also create the corresponding remote if it does not exist!)
		 * @param name The name of this server function
		 * @throws If not created on server
		 */
		constructor(name: string) {
			this.instance = findOrCreateRemote("Function", name);
			assert(!IS_CLIENT, "Cannot create a Net.ServerFunction on the Client!");
		}

		/**
		 * The callback function
		 */
		public get Callback(): Callback {
			return this.instance.OnServerInvoke;
		}

		/**
		 * Set the callback function when called by the client
		 */
		public set Callback(func: Callback) {
			this.instance.OnServerInvoke = func;
		}

		/**
		 * The RemoteFunction instance
		 */
		public get Instance() {
			return this.instance;
		}

		/**
		 * The client cache in seconds
		 */
		public get ClientCache() {
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
		public set ClientCache(time: number) {
			const cache = this.instance.FindFirstChild("Cache") as NumberValue;
			if (!cache) {
				const cacheTimer = new NumberValue(this.instance);
				cacheTimer.Value = time;
				cacheTimer.Name = "Cache";
			} else {
				cache.Value = time;
			}
		}

		/**
		 * Calls the player and returns a promise
		 * @async returns Promise
		 * @param player The player to call the function on
		 * @param args The arguments to call the function with
		 */
		public async CallPlayerAsync<T extends Array<any>>(
			player: Player, ...args: T): Promise<CR> {
			return this.instance.InvokeClient(player, ...args) as any;
		}

	}

	interface IMessagingServiceProto {
		PublishAsync(topic: string, message: any): void;
		SubscribeAsync(topic: string, handler: (message: string) => void): RBXScriptConnection;
	}

	const MessagingService = game.GetService("MessagingService") as Instance & IMessagingServiceProto;
	const Players = game.GetService("Players");

	/** @internal */
	export class GlobalServerEvent {
		private instance: ServerEvent;
		private event: GlobalEvent;

		constructor(name: string) {
			this.instance = new ServerEvent(`G~${name}`);
			this.event = new GlobalEvent(name);
			assert(!IS_CLIENT, "Cannot create a Net.ServerEvent on the Client!");

			this.event.Connect(message => this.recievedMessage(message as any));
		}

		private getPlayersMatchingId(matching: Array<number> | number) {
			if (typeof matching === "number") {
				return Players.GetPlayerByUserId(matching);
			} else {
				const players = new Array<Player>();
				for (const id of matching) {
					const player = Players.GetPlayerByUserId(id);
					if (player) {
						players.push(player);
					}
				}

				return players;
			}
		}

		private recievedMessage(message: { data: Array<any>, targetId?: number, targetIds?: Array<number> }) {
			if (message.targetIds) {
				const players = this.getPlayersMatchingId(message.targetIds);
				if (players) {
					this.instance.SendToPlayers(players as Array<Player>, ...message.data);
				}
			} else if (message.targetId) {
				const player = this.getPlayersMatchingId(message.targetId);
				if (player) {
					this.instance.SendToPlayer(player as Player, ...message.data);
				}
			} else {
				this.instance.SendToAllPlayers(...message.data);
			}
		}

		public SendToAllServers<T extends Array<any>>(...args: T) {
			this.event.SendToAllServers({ data: [...args] });
		}

		public SendToPlayer<T extends Array<any>>(userId: number, ...args: T) {
			this.event.SendToAllServers({ data: [...args], targetId: userId });
		}

		public SendToPlayers<T extends Array<any>>(userIds: Array<number>, ...args: T) {
			this.event.SendToAllServers({ data: [...args], targetIds: userIds });
		}
	}

	/**
	 * MessagingService Event
	 */
	export class GlobalEvent {
		private name: string;

		constructor(name: string) {
			this.name = name;
		}

		/** @internal */
		public SendToAllServers(message: any) {
			MessagingService.PublishAsync(this.name, message);
		}

		/** @internal */
		public Connect(handler: (message: string) => void) {
			return MessagingService.SubscribeAsync(this.name, handler);
		}
	}

	/**
	 * An event on the client
	 */
	export class ClientEvent {
		/** @internal */
		private instance: RemoteEvent;

		/**
		 * Create a new instance of the ClientEvent
		 * @param name The name of the client event
		 * @throws If created on server, or does not exist.
		 */
		constructor(name: string) {
			this.instance = findRemoteOrThrow("Event", name);
			assert(IS_CLIENT, "Cannot create a Net.ClientEvent on the Server!");
		}

		public static async WaitFor(name: string): Promise<Net.ClientEvent> {
			const fun: RemoteEvent | undefined = waitForEvent(name, MAX_CLIENT_WAITFORCHILD_TIMEOUT);
			if (!fun) {
				error("Failed to retrieve client Event!");
			}

			return new Net.ClientEvent(name);
		}

		/**
		 * The RemoteEvent instance
		 */
		public get Instance() {
			return this.instance;
		}

		/**
		 * The RBXScriptConnection
		 */
		public get Event() {
			return this.instance.OnClientEvent;
		}

		/**
		 * Connect a function to fire when the event is invoked by the client
		 * @param callback The function fired when the event is invoked by the client
		 */
		public Connect<T extends Array<any>>(callback: (...args: T) => void) {
			this.Event.Connect(callback as any);
		}

		/**
		 * Sends the specified arguments to the server
		 * @param args The arguments to send to the server
		 */
		public SendToServer<T extends Array<any>>(...args: T) {
			this.instance.FireServer(...args);
		}

	}

	/**
	 * A function on the client
	 */
	export class ClientFunction<SR extends any> {
		/** @internal */
		private lastPing = -1;
		/** @internal */
		private cached: any = [];
		/** @internal */
		private instance: RemoteFunction;

		constructor(name: string) {
			this.instance = findRemoteOrThrow("Function", name);
			assert(IS_CLIENT, "Cannot create a Net.ClientFunction on the Server!");
			assert(functionExists(name), `The specified function '${name}' does not exist!`);
		}

		public static async WaitFor<R extends any>(name: string): Promise<Net.ClientFunction<R>> {
			const fun: RemoteFunction | undefined = waitForFunction(name, MAX_CLIENT_WAITFORCHILD_TIMEOUT);
			if (!fun) {
				error("Failed to retrieve client Function!");
			}

			return new Net.ClientFunction<R>(name);
		}

		/**
		 * The callback
		 */
		public get Callback(): Callback {
			return this.instance.OnClientInvoke;
		}

		/**
		 * Set the callback function when called by the server
		 */
		public set Callback(func: Callback) {
			this.instance.OnClientInvoke = func;
		}

		/**
		 * The remoteFunction instance
		 */
		public get Instance() {
			return this.instance;
		}

		/**
		 * The client cache in seconds
		 */
		public get Cache() {
			const cache = this.instance.FindFirstChild("Cache") as NumberValue;
			if (cache) {
				return cache.Value;
			} else {
				return 0;
			}
		}

		/**
		 * Call the server with the specified arguments
		 * @param args The arguments to call the server with
		 * @returns the result of the call to the server
		 */
		public CallServer<T extends Array<any>>(...args: T): SR {
			if (this.lastPing < (os.time() + this.Cache)) {
				const result = this.instance.InvokeServer(...args);
				this.cached = result;

				this.lastPing = os.time();

				return result as any;
			} else {
				return this.cached;
			}
		}

		/**
		 * Call the server with the specified arguments asynchronously
		 * @param args The args to call the server with
		 * @async Will return a promise
		 */
		public async CallServerAsync<T extends Array<any>>(...args: T): Promise<SR> {
			return this.CallServer(...args);
		}

	}

	export function IsClient() {
		return IS_CLIENT;
	}

	export function IsServer() {
		return IS_SERVER;
	}

	/**
	 * Create a function
	 * @param name The name of the function
	 * (Must be created on server)
	 */
	export function CreateFunction<CR extends any>(name: string): ServerFunction<CR> {
		if (IS_SERVER) {
			return new ServerFunction<CR>(name);
		} else {
			error("Net.createFunction can only be used on the server!");
			throw "";
		}
	}

	export function GetGlobalEvent(name: string): GlobalEvent {
		return new GlobalEvent(name);
	}

	/**
	 * Create an event
	 * @param name The name of the event
	 * (Must be created on server)
	 */
	export function CreateEvent(name: string): ServerEvent {
		if (IS_SERVER) {
			return new ServerEvent(name);
		} else {
			error("Net.createFunction can only be used on the server!");
			throw "Net.createFunction can only be used on the server!";
		}
	}

	// tslint:disable:jsdoc-format
	/**
	 * Wait for a client function specified by `name`
	 *
	 * Usage
	 *
```ts
Net.WaitForClientFunctionAsync("FunctionName").then(func => {
	func.Callback = clientCallbackFunction;
}, err => {
	warn("Error fetching FunctionName:", err);
});```
	 *
	 * Or inside an async function:
```ts
	const func = await Net.WaitForClientFunctionAsync("FunctionName");
	func.Callback = clientCallbackFunction;
```
	 *
	 * @param name The name of the function
	 * @alias for `Net.ClientFunction.WaitFor(name)`
	 * @returns `Promise<Net.ClientFunction>`
	 */
	// tslint:enable:jsdoc-format
	export async function WaitForClientFunctionAsync<R extends any>(name: string) {
		return Net.ClientFunction.WaitFor<R>(name);
	}

	// tslint:disable:jsdoc-format
	/**
	 * Wait for a client function specified by `name`
	 *
	 * Usage
	 *
```ts
Net.WaitForClientEventAsync("EventName").then(event => {
	event.Connect(eventHandler);
}, err => {
	warn("Error fetching EventName:", err);
});```
	 *
	 * Or inside an async function:
```ts
	const event = await Net.WaitForClientEventAsync("EventName");
	event.Connect(eventHandler);
```
	 *
	 * @param name The name of the function
	 * @alias for `Net.ClientEvent.WaitFor(name)`
	 * @returns `Promise<Net.ClientEvent>`
	 */
	// tslint:enable:jsdoc-format
	export async function WaitForClientEventAsync(name: string) {
		return Net.ClientEvent.WaitFor(name);
	}

	export function GetServerEventAsync(name: string): Promise<ServerEvent> {
		return new Promise((resolve, reject) => {
			if (eventExists(name)) {
				const newFunc = new ServerEvent(name);
				resolve(newFunc);
			} else {
				reject("Could not find Server Event: " + name + " (did you create it on the server?)");
			}
		});
	}

	export function GetServerFunctionAsync<CR extends any>(name: string): Promise<ServerFunction<CR>> {
		return new Promise((resolve, reject) => {
			if (functionExists(name)) {
				const newFunc = new ServerFunction(name);
				resolve(newFunc);
			} else {
				reject("Could not find Server Function: " + name + " (did you create it?)");
			}
		});
	}

	if (IS_STUDIO) {
		print("[rbx-net] Loaded rbx-net", `v${VERSION}`);
	}
}

export default Net;
