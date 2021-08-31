## `ISocket`

```csharp
public interface ISocket

```

Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `ISocket` | Accept() |  | 
| `void` | Close() |  | 
| `void` | Dispose() |  | 
| `Boolean` | Flush() |  | 
| `void` | GetAndResetStats(`Int32&` totalSent, `Int32&` totalRecv) |  | 
| `void` | GetConnectionQuality(`Single&` localQuality, `Single&` remoteQuality, `Int32&` ping, `Single&` outByteSec, `Single&` inByteSec) |  | 
| `Int32` | GetCurrentSendRate() |  | 
| `String` | GetEndPointString() |  | 
| `String` | GetHostName() |  | 
| `Int32` | GetHostPort() |  | 
| `Int32` | GetSendQueueSize() |  | 
| `Boolean` | GotNewData() |  | 
| `Boolean` | IsConnected() |  | 
| `Boolean` | IsHost() |  | 
| `ZPackage` | Recv() |  | 
| `void` | Send(`ZPackage` pkg) |  | 


