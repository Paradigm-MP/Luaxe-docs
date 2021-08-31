## `ZNetView`

```csharp
public class ZNetView
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_distant |  | 
| Boolean | m_persistent |  | 
| Boolean | m_syncInitialScale |  | 
| ObjectType | m_type |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | ClaimOwnership() |  | 
| void | Destroy() |  | 
| String | GetPrefabName() |  | 
| [ZDO](./ZDO.md) | GetZDO() |  | 
| void | HandleRoutedRPC(`RoutedRPCData` rpcData) |  | 
| Boolean | HasOwner() |  | 
| void | InvokeRPC(`Int64` targetID, `String` method, `Object[]` parameters) |  | 
| void | InvokeRPC(`String` method, `Object[]` parameters) |  | 
| Boolean | IsOwner() |  | 
| Boolean | IsValid() |  | 
| void | Register(`String` name, `Action<Int64>` f) |  | 
| void | Register(`String` name, `Action<Int64, T>` f) |  | 
| void | Register(`String` name, `Action<Int64, T, U>` f) |  | 
| void | Register(`String` name, `Action<Int64, T, U, V>` f) |  | 
| void | ResetZDO() |  | 
| void | SetLocalScale(`Vector3` scale) |  | 
| void | SetPersistent(`Boolean` persistent) |  | 
| void | Unregister(`String` name) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int64 | Everybody |  | 
| Boolean | m_forceDisableInit |  | 
| [ZDO](./ZDO.md) | m_initZDO |  | 
| Boolean | m_useInitZDO |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Object[] | Deserialize(`Int64` callerID, `ParameterInfo[]` paramInfo, `ZPackage` pkg) |  | 
| void | FinishGhostInit() |  | 
| void | StartGhostInit() |  | 


