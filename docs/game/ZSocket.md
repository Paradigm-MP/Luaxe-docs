## `ZSocket`

```csharp
public class ZSocket
    : IDisposable

```

### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZSocket](./ZSocket.md) | Accept() |  | 
| void | Close() |  | 
| Boolean | Connect(`String` host, `Int32` port) |  | 
| void | Dispose() |  | 
| void | GetAndResetStats(`Int32&` totalSent, `Int32&` totalRecv) |  | 
| IPEndPoint | GetEndPoint() |  | 
| String | GetEndPointHost() |  | 
| String | GetEndPointString() |  | 
| Int32 | GetHostPort() |  | 
| Boolean | IsConnected() |  | 
| Boolean | IsHost() |  | 
| Boolean | IsPeer(`String` host, `Int32` port) |  | 
| Boolean | IsSending() |  | 
| [ZPackage](./ZPackage.md) | Recv() |  | 
| void | Send(`ZPackage` pkg) |  | 
| Boolean | StartHost(`Int32` port) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Socket | CreateSocket() |  | 
| IPEndPoint | GetEndPoint(`String` host, `Int32` port) |  | 


