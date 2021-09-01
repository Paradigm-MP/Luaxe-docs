## `ZRoutedRpc`

```csharp
public class ZRoutedRpc
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Action&lt;Int64&gt; | m_onNewPeer |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AddPeer([`ZNetPeer`](./ZNetPeer.md) peer) |  | 
| void | InvokeRoutedRPC(Int64 targetPeerID, String methodName, Object[] parameters) |  | 
| void | InvokeRoutedRPC(String methodName, Object[] parameters) |  | 
| void | InvokeRoutedRPC(Int64 targetPeerID, [`ZDOID`](./ZDOID.md) targetZDO, String methodName, Object[] parameters) |  | 
| void | Register(String name, Action&lt;Int64&gt; f) |  | 
| void | Register(String name, Action&lt;Int64, T&gt; f) |  | 
| void | Register(String name, Action&lt;Int64, T, U&gt; f) |  | 
| void | Register(String name, Action&lt;Int64, T, U, V&gt; f) |  | 
| void | Register(String name, Method&lt;T, U, V, B&gt; f) |  | 
| void | RemovePeer([`ZNetPeer`](./ZNetPeer.md) peer) |  | 
| void | SetUID(Int64 uid) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int64 | Everybody |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZRoutedRpc](./ZRoutedRpc.md) | instance |  | 


