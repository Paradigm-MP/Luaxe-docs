## `ZSteamSocket`

```csharp
public class ZSteamSocket
    : IDisposable, ISocket

```

Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [ISocket](./ISocket.md) | Accept() |  | 
| void | Close() |  | 
| void | Dispose() |  | 
| Boolean | Flush() |  | 
| void | GetAndResetStats(`Int32&` totalSent, `Int32&` totalRecv) |  | 
| void | GetConnectionQuality(`Single&` localQuality, `Single&` remoteQuality, `Int32&` ping, `Single&` outByteSec, `Single&` inByteSec) |  | 
| Int32 | GetCurrentSendRate() |  | 
| String | GetEndPointString() |  | 
| String | GetHostName() |  | 
| Int32 | GetHostPort() |  | 
| CSteamID | GetPeerID() |  | 
| Int32 | GetSendQueueSize() |  | 
| Boolean | GotNewData() |  | 
| Boolean | IsConnected() |  | 
| Boolean | IsHost() |  | 
| [ZPackage](./ZPackage.md) | Recv() |  | 
| void | Send(`ZPackage` pkg) |  | 
| Boolean | StartHost() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | SetDataPort(`Int32` port) |  | 
| void | UpdateAllSockets(`Single` dt) |  | 


