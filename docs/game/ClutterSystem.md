## `ClutterSystem`

```csharp
public class ClutterSystem
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_amountScale |  | 
| List&lt;Clutter&gt; | m_clutter |  | 
| Single | m_distance |  | 
| Single | m_grassPatchSize |  | 
| Boolean | m_menuHack |  | 
| Single | m_playerPushFade |  | 
| Single | m_waterLevel |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | ApplySettings() |  | 
| void | ClearAll() |  | 
| Boolean | GetGroundInfo(Vector3 p, Vector3& point, Vector3& normal, [`Heightmap`](./Heightmap.md)& hmap, Biome& biome) |  | 
| Vector2Int | GetVegPatch(Vector3 point) |  | 
| Vector3 | GetVegPatchCenter(Vector2Int p) |  | 
| void | ResetGrass(Vector3 center, Single radius) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ClutterSystem](./ClutterSystem.md) | instance |  | 


