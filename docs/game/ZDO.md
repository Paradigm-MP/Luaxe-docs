## `ZDO`

```csharp
public class ZDO
    : IEquatable<ZDO>

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| UInt32 | m_dataRevision |  | 
| Boolean | m_distant |  | 
| Int64 | m_owner |  | 
| UInt32 | m_ownerRevision |  | 
| Boolean | m_persistent |  | 
| Int32 | m_pgwVersion |  | 
| Int32 | m_tempCreateEarmark |  | 
| Boolean | m_tempHaveRevision |  | 
| Int32 | m_tempRemoveEarmark |  | 
| Single | m_tempSortValue |  | 
| Int64 | m_timeCreated |  | 
| ObjectType | m_type |  | 
| [ZDOID](./ZDOID.md) | m_uid |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZDO](./ZDO.md) | Clone() |  | 
| void | Deserialize(`ZPackage` pkg) |  | 
| Boolean | Equals(`ZDO` other) |  | 
| Boolean | GetBool(`String` name, `Boolean` defaultValue = False) |  | 
| Boolean | GetBool(`Int32` hash, `Boolean` defaultValue = False) |  | 
| Byte[] | GetByteArray(`String` name) |  | 
| Single | GetFloat(`String` name, `Single` defaultValue = 0) |  | 
| Single | GetFloat(`Int32` hash, `Single` defaultValue = 0) |  | 
| Int32 | GetInt(`String` name, `Int32` defaultValue = 0) |  | 
| Int32 | GetInt(`Int32` hash, `Int32` defaultValue = 0) |  | 
| Int64 | GetLong(`String` name, `Int64` defaultValue = 0) |  | 
| Int64 | GetLong(`Int32` hash, `Int64` defaultValue = 0) |  | 
| Int32 | GetPGWVersion() |  | 
| Vector3 | GetPosition() |  | 
| Int32 | GetPrefab() |  | 
| Quaternion | GetQuaternion(`String` name, `Quaternion` defaultValue) |  | 
| Quaternion | GetQuaternion(`Int32` hash, `Quaternion` defaultValue) |  | 
| Quaternion | GetRotation() |  | 
| Vector2i | GetSector() |  | 
| String | GetString(`String` name, `String` defaultValue = ) |  | 
| Vector3 | GetVec3(`String` name, `Vector3` defaultValue) |  | 
| Vector3 | GetVec3(`Int32` hash, `Vector3` defaultValue) |  | 
| [ZDOID](./ZDOID.md) | GetZDOID(`KeyValuePair&lt;Int32, Int32&gt;` hashPair) |  | 
| [ZDOID](./ZDOID.md) | GetZDOID(`String` name) |  | 
| Boolean | HasOwner() |  | 
| void | Initialize(`ZDOMan` man, `ZDOID` id, `Vector3` position) |  | 
| void | Initialize(`ZDOMan` man) |  | 
| void | InternalSetPosition(`Vector3` pos) |  | 
| void | InvalidateSector() |  | 
| Boolean | IsOwner() |  | 
| Boolean | IsValid() |  | 
| void | Load(`ZPackage` pkg, `Int32` version) |  | 
| void | Print() |  | 
| void | Reset() |  | 
| void | Save(`ZPackage` pkg) |  | 
| void | Serialize(`ZPackage` pkg) |  | 
| void | Set(`KeyValuePair&lt;Int32, Int32&gt;` hashPair, `ZDOID` id) |  | 
| void | Set(`String` name, `ZDOID` id) |  | 
| void | Set(`String` name, `Single` value) |  | 
| void | Set(`Int32` hash, `Single` value) |  | 
| void | Set(`String` name, `Vector3` value) |  | 
| void | Set(`Int32` hash, `Vector3` value) |  | 
| void | Set(`String` name, `Quaternion` value) |  | 
| void | Set(`Int32` hash, `Quaternion` value) |  | 
| void | Set(`String` name, `Int32` value) |  | 
| void | Set(`Int32` hash, `Int32` value) |  | 
| void | Set(`String` name, `Boolean` value) |  | 
| void | Set(`Int32` hash, `Boolean` value) |  | 
| void | Set(`String` name, `Int64` value) |  | 
| void | Set(`Int32` hash, `Int64` value) |  | 
| void | Set(`String` name, `Byte[]` bytes) |  | 
| void | Set(`String` name, `String` value) |  | 
| void | SetDistant(`Boolean` distant) |  | 
| void | SetOwner(`Int64` uid) |  | 
| void | SetPGWVersion(`Int32` version) |  | 
| void | SetPosition(`Vector3` pos) |  | 
| void | SetPrefab(`Int32` prefab) |  | 
| void | SetRotation(`Quaternion` rot) |  | 
| void | SetType(`ObjectType` type) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| KeyValuePair&lt;Int32, Int32&gt; | GetHashZDOID(`String` name) |  | 


