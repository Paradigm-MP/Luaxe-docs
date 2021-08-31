## `ZNetPeer`

```csharp
public class ZNetPeer
    : IDisposable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZDOID](./ZDOID.md) | m_characterID |  | 
| String | m_playerName |  | 
| Boolean | m_publicRefPos |  | 
| Vector3 | m_refPos |  | 
| [ZRpc](./ZRpc.md) | m_rpc |  | 
| Boolean | m_server |  | 
| [ISocket](./ISocket.md) | m_socket |  | 
| Int64 | m_uid |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Dispose() |  | 
| Vector3 | GetRefPos() |  | 
| Boolean | IsReady() |  | 


