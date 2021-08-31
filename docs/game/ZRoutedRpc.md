## `ZRoutedRpc`

```csharp
public class ZRoutedRpc

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Action<Int64>` | m_onNewPeer |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | AddPeer(`ZNetPeer` peer) |  | 
| `void` | InvokeRoutedRPC(`Int64` targetPeerID, `String` methodName, `Object[]` parameters) |  | 
| `void` | InvokeRoutedRPC(`String` methodName, `Object[]` parameters) |  | 
| `void` | InvokeRoutedRPC(`Int64` targetPeerID, `ZDOID` targetZDO, `String` methodName, `Object[]` parameters) |  | 
| `void` | Register(`String` name, `Action<Int64>` f) |  | 
| `void` | Register(`String` name, `Action<Int64, T>` f) |  | 
| `void` | Register(`String` name, `Action<Int64, T, U>` f) |  | 
| `void` | Register(`String` name, `Action<Int64, T, U, V>` f) |  | 
| `void` | Register(`String` name, `Method<T, U, V, B>` f) |  | 
| `void` | RemovePeer(`ZNetPeer` peer) |  | 
| `void` | SetUID(`Int64` uid) |  | 


Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Int64` | Everybody |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `ZRoutedRpc` | instance |  | 


