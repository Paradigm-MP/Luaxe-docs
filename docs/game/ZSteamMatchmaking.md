## `ZSteamMatchmaking`

```csharp
public class ZSteamMatchmaking

```

Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | GetJoinHost(`CSteamID&` steamID, `SteamNetworkingIPAddr&` addr) |  | 
| Int32 | GetServerListRevision() |  | 
| void | GetServers(`List&lt;ServerData&gt;` allServers) |  | 
| Int32 | GetTotalNrOfServers() |  | 
| void | QueueLobbyJoin(`CSteamID` lobbyID) |  | 
| void | QueueServerJoin(`String` addr) |  | 
| void | RegisterServer(`String` name, `Boolean` password, `String` version, `Boolean` publicServer, `String` worldName) |  | 
| void | ReleaseSessionTicket() |  | 
| void | RequestServerlist() |  | 
| Byte[] | RequestSessionTicket() |  | 
| void | SetFriendFilter(`Boolean` enabled) |  | 
| void | SetNameFilter(`String` filter) |  | 
| void | StopServerListing() |  | 
| void | UnregisterServer() |  | 
| Boolean | VerifySessionTicket(`Byte[]` ticket, `CSteamID` steamID) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZSteamMatchmaking](./ZSteamMatchmaking.md) | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Initialize() |  | 


