## `Recipe`

```csharp
public class Recipe
    : ScriptableObject
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_amount |  | 
| [CraftingStation](./CraftingStation.md) | m_craftingStation |  | 
| Boolean | m_enabled |  | 
| [ItemDrop](./ItemDrop.md) | m_item |  | 
| Int32 | m_minStationLevel |  | 
| [CraftingStation](./CraftingStation.md) | m_repairStation |  | 
| Requirement[] | m_resources |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [CraftingStation](./CraftingStation.md) | GetRequiredStation(Int32 quality) |  | 
| Int32 | GetRequiredStationLevel(Int32 quality) |  | 


