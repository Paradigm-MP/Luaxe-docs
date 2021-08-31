## `StationExtension`

```csharp
public class StationExtension
    : MonoBehaviour, Hoverable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_connectionPrefab |  | 
| `CraftingStation` | m_craftingStation |  | 
| `Single` | m_maxStationDistance |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `CraftingStation` | FindClosestStationInRange(`Vector3` center) |  | 
| `List<CraftingStation>` | FindStationsInRange(`Vector3` center) |  | 
| `String` | GetExtensionName() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | OtherExtensionInRange(`Single` radius) |  | 
| `void` | StartConnectionEffect(`CraftingStation` station) |  | 
| `void` | StartConnectionEffect(`Vector3` targetPos) |  | 
| `void` | StopConnectionEffect() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | FindExtensions(`CraftingStation` station, `Vector3` pos, `List<StationExtension>` extensions) |  | 


