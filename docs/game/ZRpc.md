## `ZRpc`

```csharp
public class ZRpc
    : IDisposable

```

### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Dispose() |  | 
| [ISocket](./ISocket.md) | GetSocket() |  | 
| Single | GetTimeSinceLastPing() |  | 
| void | Invoke(String method, Object[] parameters) |  | 
| Boolean | IsConnected() |  | 
| void | Register(String name, Method f) |  | 
| void | Register(String name, Action&lt;ZRpc, T&gt; f) |  | 
| void | Register(String name, Action&lt;ZRpc, T, U&gt; f) |  | 
| void | Register(String name, Action&lt;ZRpc, T, U, V&gt; f) |  | 
| void | Register(String name, Method&lt;T, U, V, W&gt; f) |  | 
| void | Unregister(String name) |  | 
| Boolean | Update(Single dt) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Object[] | Deserialize([`ZRpc`](./ZRpc.md) rpc, ParameterInfo[] paramInfo, [`ZPackage`](./ZPackage.md) pkg) |  | 
| void | Deserialize(ParameterInfo[] paramInfo, [`ZPackage`](./ZPackage.md) pkg, List`1& parameters) |  | 
| void | Serialize(Object[] parameters, [`ZPackage`](./ZPackage.md)& pkg) |  | 


