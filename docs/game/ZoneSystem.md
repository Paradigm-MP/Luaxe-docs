## `ZoneSystem`

```csharp
public class ZoneSystem
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_activeArea |  | 
| Int32 | m_activeDistantArea |  | 
| List&lt;Biome&gt; | m_biomeFolded |  | 
| Boolean | m_drawLocations |  | 
| String | m_drawLocationsFilter |  | 
| List&lt;Biome&gt; | m_locationFolded |  | 
| GameObject | m_locationProxyPrefab |  | 
| List&lt;ZoneLocation&gt; | m_locations |  | 
| List&lt;String&gt; | m_locationScenes |  | 
| Int32 | m_locationVersion |  | 
| Int32 | m_pgwVersion |  | 
| List&lt;ZoneVegetation&gt; | m_vegetation |  | 
| List&lt;Biome&gt; | m_vegetationFolded |  | 
| Single | m_waterLevel |  | 
| GameObject | m_zoneCtrlPrefab |  | 
| GameObject | m_zonePrefab |  | 
| Single | m_zoneSize |  | 
| Single | m_zoneTTL |  | 
| Single | m_zoneTTS |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | FindClosestLocation(`String` name, `Vector3` point, `LocationInstance&` closest) |  | 
| Boolean | FindFloor(`Vector3` p, `Single&` height) |  | 
| void | GenerateLocations() |  | 
| void | GenerateLocationsIfNeeded() |  | 
| Single | GetAverageGroundHeight(`Vector3` p, `Single` radius) |  | 
| Boolean | GetGlobalKey(`String` name) |  | 
| List&lt;String&gt; | GetGlobalKeys() |  | 
| void | GetGroundData(`Vector3&` p, `Vector3&` normal, `Biome&` biome, `BiomeArea&` biomeArea, `Heightmap&` hmap) |  | 
| Single | GetGroundHeight(`Vector3` p) |  | 
| Boolean | GetGroundHeight(`Vector3` p, `Single&` height) |  | 
| Boolean | GetLocationIcon(`String` name, `Vector3&` pos) |  | 
| void | GetLocationIcons(`Dictionary&lt;Vector3, String&gt;` icons) |  | 
| ValueCollection&lt;Vector2i, LocationInstance&gt; | GetLocationList() |  | 
| void | GetLocations(`Biome` biome, `List&lt;ZoneLocation&gt;` locations, `Boolean` skipDisabled) |  | 
| Single | GetSolidHeight(`Vector3` p) |  | 
| Boolean | GetSolidHeight(`Vector3` p, `Single&` height) |  | 
| Boolean | GetSolidHeight(`Vector3` p, `Single` radius, `Single&` height, `Transform` ignore) |  | 
| Boolean | GetSolidHeight(`Vector3` p, `Single&` height, `Vector3&` normal) |  | 
| Boolean | GetSolidHeight(`Vector3` p, `Single&` height, `Vector3&` normal, `GameObject&` go) |  | 
| void | GetVegetation(`Biome` biome, `List&lt;ZoneVegetation&gt;` vegetation) |  | 
| Vector2i | GetZone(`Vector3` point) |  | 
| Vector3 | GetZonePos(`Vector2i` id) |  | 
| Boolean | IsActiveAreaLoaded() |  | 
| Boolean | IsBlocked(`Vector3` p) |  | 
| Boolean | IsZoneLoaded(`Vector3` point) |  | 
| Boolean | IsZoneLoaded(`Vector2i` zoneID) |  | 
| void | Load(`BinaryReader` reader, `Int32` version) |  | 
| void | PrepareSave() |  | 
| void | ResetGlobalKeys() |  | 
| void | SaveASync(`BinaryWriter` writer) |  | 
| void | SetGlobalKey(`String` name) |  | 
| Boolean | SkipSaving() |  | 
| GameObject | SpawnProxyLocation(`Int32` hash, `Int32` seed, `Vector3` pos, `Quaternion` rot) |  | 
| Boolean | TestSpawnLocation(`String` name, `Vector3` pos) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ZoneSystem](./ZoneSystem.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | PrepareNetViews(`GameObject` root, `List&lt;ZNetView&gt;` views) |  | 
| void | PrepareRandomSpawns(`GameObject` root, `List&lt;RandomSpawn&gt;` randomSpawns) |  | 


