## `ZNet`

```csharp
public class ZNet
    : MonoBehaviour
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_badConnectionPing |  | 
| RectTransform | m_connectingDialog |  | 
| Int32 | m_hostPort |  | 
| RectTransform | m_passwordDialog |  | 
| Int32 | m_serverPlayerLimit |  | 
| Int32 | m_zdoSectorsWidth |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Ban(String user) |  | 
| void | Connect(CSteamID hostID) |  | 
| void | Connect(SteamNetworkingIPAddr host) |  | 
| void | ConsoleSave() |  | 
| void | Disconnect([`ZNetPeer`](./ZNetPeer.md) peer) |  | 
| List&lt;ZDO&gt; | GetAllCharacterZDOS() |  | 
| List&lt;ZNetPeer&gt; | GetConnectedPeers() |  | 
| Int32 | GetHostPort() |  | 
| void | GetNetStats(Single& localQuality, Single& remoteQuality, Int32& ping, Single& outByteSec, Single& inByteSec) |  | 
| Int32 | GetNrOfPlayers() |  | 
| void | GetOtherPublicPlayers(List&lt;PlayerInfo&gt; playerList) |  | 
| [ZNetPeer](./ZNetPeer.md) | GetPeer(Int64 uid) |  | 
| [ZNetPeer](./ZNetPeer.md) | GetPeerByHostName(String endpoint) |  | 
| [ZNetPeer](./ZNetPeer.md) | GetPeerByPlayerName(String name) |  | 
| Int32 | GetPeerConnections() |  | 
| List&lt;ZNetPeer&gt; | GetPeers() |  | 
| List&lt;PlayerInfo&gt; | GetPlayerList() |  | 
| Vector3 | GetReferencePosition() |  | 
| [ZNetPeer](./ZNetPeer.md) | GetServerPeer() |  | 
| Single | GetServerPing() |  | 
| [ZRpc](./ZRpc.md) | GetServerRPC() |  | 
| DateTime | GetTime() |  | 
| Double | GetTimeSeconds() |  | 
| Int64 | GetUID() |  | 
| String | GetWorldName() |  | 
| Int64 | GetWorldUID() |  | 
| Single | GetWrappedDayTimeSeconds() |  | 
| [ZNat](./ZNat.md) | GetZNat() |  | 
| Boolean | HasBadConnection() |  | 
| Boolean | InPasswordDialog() |  | 
| Boolean | IsAllowed(String hostName, String playerName) |  | 
| Boolean | IsConnected(Int64 uid) |  | 
| Boolean | IsDedicated() |  | 
| Boolean | IsReferencePositionPublic() |  | 
| Boolean | IsSaving() |  | 
| Boolean | IsServer() |  | 
| void | Kick(String user) |  | 
| void | PrintBanned() |  | 
| void | RemotePrint([`ZRpc`](./ZRpc.md) rpc, String text) |  | 
| void | Save(Boolean sync) |  | 
| void | SetCharacterID([`ZDOID`](./ZDOID.md) id) |  | 
| void | SetNetTime(Double time) |  | 
| void | SetPublicReferencePosition(Boolean pub) |  | 
| void | SetReferencePosition(Vector3 pos) |  | 
| void | Shutdown() |  | 
| void | Unban(String user) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZNet](./ZNet.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| ConnectionStatus | GetConnectionStatus() |  | 
| String | GetServerString() |  | 
| void | ResetServerHost() |  | 
| void | SetServer(Boolean server, Boolean openServer, Boolean publicServer, String serverName, String password, [`World`](./World.md) world) |  | 
| void | SetServerHost(UInt64 serverID) |  | 
| void | SetServerHost(SteamNetworkingIPAddr serverAddr) |  | 


