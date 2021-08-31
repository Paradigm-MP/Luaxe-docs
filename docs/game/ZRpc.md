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
| void | Invoke(`String` method, `Object[]` parameters) |  | 
| Boolean | IsConnected() |  | 
| void | Register(`String` name, `Method` f) |  | 
| void | Register(`String` name, `Action<ZRpc, T>` f) |  | 
| void | Register(`String` name, `Action<ZRpc, T, U>` f) |  | 
| void | Register(`String` name, `Action<ZRpc, T, U, V>` f) |  | 
| void | Register(`String` name, `Method<T, U, V, W>` f) |  | 
| void | Unregister(`String` name) |  | 
| Boolean | Update(`Single` dt) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Object[] | Deserialize(`ZRpc` rpc, `ParameterInfo[]` paramInfo, `ZPackage` pkg) |  | 
| void | Deserialize(`ParameterInfo[]` paramInfo, `ZPackage` pkg, `List`1&` parameters) |  | 
| void | Serialize(`Object[]` parameters, `ZPackage&` pkg) |  | 


