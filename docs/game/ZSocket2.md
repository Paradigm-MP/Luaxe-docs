## `ZSocket2`

```csharp
public class ZSocket2
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
| Int32 | GetAverageSendRate() |  | 
| void | GetConnectionQuality(`Single&` localQuality, `Single&` remoteQuality, `Int32&` ping, `Single&` outByteSec, `Single&` inByteSec) |  | 
| Int32 | GetCurrentSendRate() |  | 
| IPEndPoint | GetEndPoint() |  | 
| String | GetEndPointString() |  | 
| String | GetHostName() |  | 
| Int32 | GetHostPort() |  | 
| Int32 | GetSendQueueSize() |  | 
| Boolean | GotNewData() |  | 
| Boolean | IsConnected() |  | 
| Boolean | IsHost() |  | 
| Boolean | IsPeer(`String` host, `Int32` port) |  | 
| Boolean | IsSending() |  | 
| [ZPackage](./ZPackage.md) | Recv() |  | 
| void | Send(`ZPackage` pkg) |  | 
| Boolean | StartHost(`Int32` port) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| TcpClient | CreateSocket() |  | 
| IPEndPoint | GetEndPoint(`String` host, `Int32` port) |  | 


