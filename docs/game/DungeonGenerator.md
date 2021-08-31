## `DungeonGenerator`

```csharp
public class DungeonGenerator
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Algorithm` | m_algorithm |  | 
| `Single` | m_campRadiusMax |  | 
| `Single` | m_campRadiusMin |  | 
| `Single` | m_doorChance |  | 
| `List<DoorDef>` | m_doorTypes |  | 
| `Int32` | m_gridSize |  | 
| `Int32` | m_maxRooms |  | 
| `Single` | m_maxTilt |  | 
| `Single` | m_minAltitude |  | 
| `Int32` | m_minRequiredRooms |  | 
| `Int32` | m_minRooms |  | 
| `Single` | m_perimeterBuffer |  | 
| `Int32` | m_perimeterSections |  | 
| `List<String>` | m_requiredRooms |  | 
| `Single` | m_spawnChance |  | 
| `Theme` | m_themes |  | 
| `Single` | m_tileWidth |  | 
| `Vector3` | m_zoneCenter |  | 
| `Vector3` | m_zoneSize |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Clear() |  | 
| `void` | Derp() |  | 
| `void` | Generate(`SpawnMode` mode) |  | 
| `void` | Generate(`Int32` seed, `SpawnMode` mode) |  | 


