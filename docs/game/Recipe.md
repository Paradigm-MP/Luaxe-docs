## `Recipe`

```csharp
public class Recipe
    : ScriptableObject

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Int32` | m_amount |  | 
| `CraftingStation` | m_craftingStation |  | 
| `Boolean` | m_enabled |  | 
| `ItemDrop` | m_item |  | 
| `Int32` | m_minStationLevel |  | 
| `CraftingStation` | m_repairStation |  | 
| `Requirement[]` | m_resources |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `CraftingStation` | GetRequiredStation(`Int32` quality) |  | 
| `Int32` | GetRequiredStationLevel(`Int32` quality) |  | 


