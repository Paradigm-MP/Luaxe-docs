## `SpawnSystem`

```csharp
public class SpawnSystem
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;Biome&gt; | m_biomeFolded |  | 
| Single | m_levelupChance |  | 
| List&lt;SpawnData&gt; | m_spawners |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | GetSpawners(`Biome` biome, `List&lt;SpawnData&gt;` spawners) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | GetNrOfInstances(`GameObject` prefab) |  | 
| Int32 | GetNrOfInstances(`GameObject` prefab, `Vector3` center, `Single` maxRange, `Boolean` eventCreaturesOnly = False, `Boolean` procreationOnly = False) |  | 


