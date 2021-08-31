## `ZDOMan`

```csharp
public class ZDOMan

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Action<ZDO>` | m_onZDODestroyed |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | AddPeer(`ZNetPeer` netPeer) |  | 
| `void` | AddToSector(`ZDO` zdo, `Vector2i` sector) |  | 
| `void` | ClientChanged(`ZDOID` id) |  | 
| `ZDO` | CreateNewZDO(`Vector3` position) |  | 
| `ZDO` | CreateNewZDO(`ZDOID` uid, `Vector3` position) |  | 
| `void` | DestroyZDO(`ZDO` zdo) |  | 
| `void` | FindSectorObjects(`Vector2i` sector, `Int32` area, `Int32` distantArea, `List<ZDO>` sectorObjects, `List<ZDO>` distantSectorObjects = null) |  | 
| `void` | FindSectorObjects(`Vector2i` sector, `Int32` area, `List<ZDO>` sectorObjects) |  | 
| `void` | ForceSendZDO(`ZDOID` id) |  | 
| `void` | ForceSendZDO(`Int64` peerID, `ZDOID` id) |  | 
| `void` | GetAllZDOsWithPrefab(`String` prefab, `List<ZDO>` zdos) |  | 
| `Boolean` | GetAllZDOsWithPrefabIterative(`String` prefab, `List<ZDO>` zdos, `Int32&` index) |  | 
| `void` | GetAverageStats(`Single&` sentZdos, `Single&` recvZdos) |  | 
| `Int32` | GetClientChangeQueue() |  | 
| `Int64` | GetMyID() |  | 
| `Int32` | GetRecvZDOs() |  | 
| `Int32` | GetSentZDOs() |  | 
| `ZDO` | GetZDO(`ZDOID` id) |  | 
| `void` | Load(`BinaryReader` reader, `Int32` version) |  | 
| `Int32` | NrOfObjects() |  | 
| `void` | PrepareSave() |  | 
| `void` | RemoveFromSector(`ZDO` zdo, `Vector2i` sector) |  | 
| `void` | RemovePeer(`ZNetPeer` netPeer) |  | 
| `void` | RequestZDO(`ZDOID` id) |  | 
| `void` | SaveAsync(`BinaryWriter` writer) |  | 
| `void` | ShutDown() |  | 
| `void` | Update(`Single` dt) |  | 
| `void` | ZDOSectorInvalidated(`ZDO` zdo) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `ZDOMan` | instance |  | 


