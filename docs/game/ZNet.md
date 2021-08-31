## `ZNet`

```csharp
public class ZNet
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_badConnectionPing |  | 
| `RectTransform` | m_connectingDialog |  | 
| `Int32` | m_hostPort |  | 
| `RectTransform` | m_passwordDialog |  | 
| `Int32` | m_serverPlayerLimit |  | 
| `Int32` | m_zdoSectorsWidth |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Ban(`String` user) |  | 
| `void` | Connect(`CSteamID` hostID) |  | 
| `void` | Connect(`SteamNetworkingIPAddr` host) |  | 
| `void` | ConsoleSave() |  | 
| `void` | Disconnect(`ZNetPeer` peer) |  | 
| `List<ZDO>` | GetAllCharacterZDOS() |  | 
| `List<ZNetPeer>` | GetConnectedPeers() |  | 
| `Int32` | GetHostPort() |  | 
| `void` | GetNetStats(`Single&` localQuality, `Single&` remoteQuality, `Int32&` ping, `Single&` outByteSec, `Single&` inByteSec) |  | 
| `Int32` | GetNrOfPlayers() |  | 
| `void` | GetOtherPublicPlayers(`List<PlayerInfo>` playerList) |  | 
| `ZNetPeer` | GetPeer(`Int64` uid) |  | 
| `ZNetPeer` | GetPeerByHostName(`String` endpoint) |  | 
| `ZNetPeer` | GetPeerByPlayerName(`String` name) |  | 
| `Int32` | GetPeerConnections() |  | 
| `List<ZNetPeer>` | GetPeers() |  | 
| `List<PlayerInfo>` | GetPlayerList() |  | 
| `Vector3` | GetReferencePosition() |  | 
| `ZNetPeer` | GetServerPeer() |  | 
| `Single` | GetServerPing() |  | 
| `ZRpc` | GetServerRPC() |  | 
| `DateTime` | GetTime() |  | 
| `Double` | GetTimeSeconds() |  | 
| `Int64` | GetUID() |  | 
| `String` | GetWorldName() |  | 
| `Int64` | GetWorldUID() |  | 
| `Single` | GetWrappedDayTimeSeconds() |  | 
| `ZNat` | GetZNat() |  | 
| `Boolean` | HasBadConnection() |  | 
| `Boolean` | InPasswordDialog() |  | 
| `Boolean` | IsAllowed(`String` hostName, `String` playerName) |  | 
| `Boolean` | IsConnected(`Int64` uid) |  | 
| `Boolean` | IsDedicated() |  | 
| `Boolean` | IsReferencePositionPublic() |  | 
| `Boolean` | IsSaving() |  | 
| `Boolean` | IsServer() |  | 
| `void` | Kick(`String` user) |  | 
| `void` | PrintBanned() |  | 
| `void` | RemotePrint(`ZRpc` rpc, `String` text) |  | 
| `void` | Save(`Boolean` sync) |  | 
| `void` | SetCharacterID(`ZDOID` id) |  | 
| `void` | SetNetTime(`Double` time) |  | 
| `void` | SetPublicReferencePosition(`Boolean` pub) |  | 
| `void` | SetReferencePosition(`Vector3` pos) |  | 
| `void` | Shutdown() |  | 
| `void` | Unban(`String` user) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `ZNet` | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `ConnectionStatus` | GetConnectionStatus() |  | 
| `String` | GetServerString() |  | 
| `void` | ResetServerHost() |  | 
| `void` | SetServer(`Boolean` server, `Boolean` openServer, `Boolean` publicServer, `String` serverName, `String` password, `World` world) |  | 
| `void` | SetServerHost(`UInt64` serverID) |  | 
| `void` | SetServerHost(`SteamNetworkingIPAddr` serverAddr) |  | 


