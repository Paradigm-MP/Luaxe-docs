## `SpawnSystem`

```csharp
public class SpawnSystem
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `List<Biome>` | m_biomeFolded |  | 
| `Single` | m_levelupChance |  | 
| `List<SpawnData>` | m_spawners |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | GetSpawners(`Biome` biome, `List<SpawnData>` spawners) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Int32` | GetNrOfInstances(`GameObject` prefab) |  | 
| `Int32` | GetNrOfInstances(`GameObject` prefab, `Vector3` center, `Single` maxRange, `Boolean` eventCreaturesOnly = False, `Boolean` procreationOnly = False) |  | 


