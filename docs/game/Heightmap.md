## `Heightmap`

```csharp
public class Heightmap
    : MonoBehaviour
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_distantLodEditorHax |  | 
| Boolean | m_isDistantLod |  | 
| Material | m_material |  | 
| Single | m_scale |  | 
| GameObject | m_terrainCompilerPrefab |  | 
| Int32 | m_width |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | CheckTerrainModIsContained([`TerrainModifier`](./TerrainModifier.md) modifier) |  | 
| void | Clear() |  | 
| [TerrainComp](./TerrainComp.md) | GetAndCreateTerrainCompiler() |  | 
| Single | GetBaseHeight(Int32 x, Int32 y) |  | 
| Biome | GetBiome(Vector3 point) |  | 
| BiomeArea | GetBiomeArea() |  | 
| List&lt;Biome&gt; | GetBiomes() |  | 
| Single | GetHeight(Int32 x, Int32 y) |  | 
| Single[] | GetOceanDepth() |  | 
| Single | GetOceanDepth(Vector3 worldPos) |  | 
| Color | GetPaintMask(Int32 x, Int32 y) |  | 
| Boolean | HaveBiome(Biome biome) |  | 
| Boolean | HaveQueuedRebuild() |  | 
| Boolean | IsBiomeEdge() |  | 
| Boolean | IsCleared(Vector3 worldPos) |  | 
| Boolean | IsCultivated(Vector3 worldPos) |  | 
| Boolean | IsPointInside(Vector3 point, Single radius = 0) |  | 
| void | Poke(Boolean delayed) |  | 
| void | Regenerate() |  | 
| void | SetHeight(Int32 x, Int32 y, Single h) |  | 
| Boolean | TerrainVSModifier([`TerrainModifier`](./TerrainModifier.md) modifier) |  | 
| void | WorldToVertex(Vector3 worldPos, Int32& x, Int32& y) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_levelMaxDelta |  | 
| Single | m_smoothMaxDelta |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | AtMaxLevelDepth(Vector3 worldPos) |  | 
| Biome | FindBiome(Vector3 point) |  | 
| Biome | FindBiomeClutter(Vector3 point) |  | 
| [Heightmap](./Heightmap.md) | FindHeightmap(Vector3 point) |  | 
| void | FindHeightmap(Vector3 point, Single radius, List&lt;Heightmap&gt; heightmaps) |  | 
| void | ForceGenerateAll() |  | 
| List&lt;Heightmap&gt; | GetAllHeightmaps() |  | 
| Boolean | GetAverageHeight(Vector3 worldPos, Single radius, Single& height) |  | 
| Color32 | GetBiomeColor(Biome biome) |  | 
| Boolean | GetHeight(Vector3 worldPos, Single& height) |  | 
| Single | GetOceanDepthAll(Vector3 worldPos) |  | 
| Boolean | HaveQueuedRebuild(Vector3 point, Single radius) |  | 


