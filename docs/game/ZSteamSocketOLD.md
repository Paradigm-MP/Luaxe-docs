## `ZSteamSocketOLD`

```csharp
public class ZSteamSocketOLD
    : IDisposable, ISocket
```

### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [ISocket](./ISocket.md) | Accept() |  | 
| void | Close() |  | 
| void | Dispose() |  | 
| Boolean | Flush() |  | 
| void | GetAndResetStats(Int32& totalSent, Int32& totalRecv) |  | 
| Int32 | GetAverageSendRate() |  | 
| void | GetConnectionQuality(Single& localQuality, Single& remoteQuality, Int32& ping, Single& outByteSec, Single& inByteSec) |  | 
| Int32 | GetCurrentSendRate() |  | 
| String | GetEndPointString() |  | 
| String | GetHostName() |  | 
| Int32 | GetHostPort() |  | 
| CSteamID | GetPeerID() |  | 
| Int32 | GetSendQueueSize() |  | 
| Boolean | GotNewData() |  | 
| Boolean | IsConnected() |  | 
| Boolean | IsHost() |  | 
| Boolean | IsPeer(CSteamID peer) |  | 
| Boolean | IsSending() |  | 
| [ZPackage](./ZPackage.md) | Recv() |  | 
| void | Send([`ZPackage`](./ZPackage.md) pkg) |  | 
| Boolean | StartHost() |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Update() |  | 


