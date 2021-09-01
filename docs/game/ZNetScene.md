## `ZNetScene`

```csharp
public class ZNetScene
    : MonoBehaviour
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;GameObject&gt; | m_nonNetViewPrefabs |  | 
| List&lt;GameObject&gt; | m_prefabs |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AddInstance([`ZDO`](./ZDO.md) zdo, [`ZNetView`](./ZNetView.md) nview) |  | 
| void | Destroy(GameObject go) |  | 
| [ZNetView](./ZNetView.md) | FindInstance([`ZDO`](./ZDO.md) zdo) |  | 
| GameObject | FindInstance([`ZDOID`](./ZDOID.md) id) |  | 
| GameObject | GetPrefab(Int32 hash) |  | 
| GameObject | GetPrefab(String name) |  | 
| Int32 | GetPrefabHash(GameObject go) |  | 
| Boolean | HaveInstance([`ZDO`](./ZDO.md) zdo) |  | 
| Boolean | HaveInstanceInSector(Vector2i sector) |  | 
| Boolean | InActiveArea(Vector2i zone, Vector3 refPoint) |  | 
| Boolean | InActiveArea(Vector2i zone, Vector2i refCenterZone) |  | 
| Boolean | IsAreaReady(Vector3 point) |  | 
| Int32 | NrOfInstances() |  | 
| Boolean | OutsideActiveArea(Vector3 point) |  | 
| Boolean | OutsideActiveArea(Vector3 point, Vector3 refPoint) |  | 
| void | Shutdown() |  | 
| void | SpawnObject(Vector3 pos, Quaternion rot, GameObject prefab) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZNetScene](./ZNetScene.md) | instance |  | 


