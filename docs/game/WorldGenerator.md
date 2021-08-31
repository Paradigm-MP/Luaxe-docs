## `WorldGenerator`

```csharp
public class WorldGenerator

```

### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Biome | GetBiome(`Vector3` point) |  | 
| Biome | GetBiome(`Single` wx, `Single` wy) |  | 
| BiomeArea | GetBiomeArea(`Vector3` point) |  | 
| Single | GetBiomeHeight(`Biome` biome, `Single` wx, `Single` wy) |  | 
| Single | GetHeight(`Single` wx, `Single` wy) |  | 
| List&lt;Vector2&gt; | GetLakes() |  | 
| List&lt;Vector2&gt; | GetMountains() |  | 
| Vector2i | GetRiverGrid(`Single` wx, `Single` wy) |  | 
| List&lt;River&gt; | GetRivers() |  | 
| Int32 | GetSeed() |  | 
| List&lt;River&gt; | GetStreams() |  | 
| void | GetTerrainDelta(`Vector3` center, `Single` radius, `Single&` delta, `Vector3&` slopeDirection) |  | 
| Boolean | InsideRiverGrid(`Vector2i` grid, `Vector2` p, `Single` r) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | waterEdge |  | 
| Single | worldSize |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [WorldGenerator](./WorldGenerator.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Deitialize() |  | 
| Single | GetForestFactor(`Vector3` pos) |  | 
| Boolean | InForest(`Vector3` pos) |  | 
| void | Initialize(`World` world) |  | 


