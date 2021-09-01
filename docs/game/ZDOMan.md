## `ZDOMan`

```csharp
public class ZDOMan
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Action&lt;ZDO&gt; | m_onZDODestroyed |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AddPeer([`ZNetPeer`](./ZNetPeer.md) netPeer) |  | 
| void | AddToSector([`ZDO`](./ZDO.md) zdo, Vector2i sector) |  | 
| void | ClientChanged([`ZDOID`](./ZDOID.md) id) |  | 
| [ZDO](./ZDO.md) | CreateNewZDO(Vector3 position) |  | 
| [ZDO](./ZDO.md) | CreateNewZDO([`ZDOID`](./ZDOID.md) uid, Vector3 position) |  | 
| void | DestroyZDO([`ZDO`](./ZDO.md) zdo) |  | 
| void | FindSectorObjects(Vector2i sector, Int32 area, Int32 distantArea, List&lt;ZDO&gt; sectorObjects, List&lt;ZDO&gt; distantSectorObjects = null) |  | 
| void | FindSectorObjects(Vector2i sector, Int32 area, List&lt;ZDO&gt; sectorObjects) |  | 
| void | ForceSendZDO([`ZDOID`](./ZDOID.md) id) |  | 
| void | ForceSendZDO(Int64 peerID, [`ZDOID`](./ZDOID.md) id) |  | 
| void | GetAllZDOsWithPrefab(String prefab, List&lt;ZDO&gt; zdos) |  | 
| Boolean | GetAllZDOsWithPrefabIterative(String prefab, List&lt;ZDO&gt; zdos, Int32& index) |  | 
| void | GetAverageStats(Single& sentZdos, Single& recvZdos) |  | 
| Int32 | GetClientChangeQueue() |  | 
| Int64 | GetMyID() |  | 
| Int32 | GetRecvZDOs() |  | 
| Int32 | GetSentZDOs() |  | 
| [ZDO](./ZDO.md) | GetZDO([`ZDOID`](./ZDOID.md) id) |  | 
| void | Load(BinaryReader reader, Int32 version) |  | 
| Int32 | NrOfObjects() |  | 
| void | PrepareSave() |  | 
| void | RemoveFromSector([`ZDO`](./ZDO.md) zdo, Vector2i sector) |  | 
| void | RemovePeer([`ZNetPeer`](./ZNetPeer.md) netPeer) |  | 
| void | RequestZDO([`ZDOID`](./ZDOID.md) id) |  | 
| void | SaveAsync(BinaryWriter writer) |  | 
| void | ShutDown() |  | 
| void | Update(Single dt) |  | 
| void | ZDOSectorInvalidated([`ZDO`](./ZDO.md) zdo) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZDOMan](./ZDOMan.md) | instance |  | 


