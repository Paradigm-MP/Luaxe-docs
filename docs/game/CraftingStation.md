## `CraftingStation`

```csharp
public class CraftingStation
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_areaMarker |  | 
| `Transform` | m_connectionPoint |  | 
| `EffectList` | m_craftItemDoneEffects |  | 
| `EffectList` | m_craftItemEffects |  | 
| `Boolean` | m_craftRequireFire |  | 
| `Boolean` | m_craftRequireRoof |  | 
| `Single` | m_discoverRange |  | 
| `GameObject` | m_haveFireObject |  | 
| `Sprite` | m_icon |  | 
| `GameObject` | m_inUseObject |  | 
| `String` | m_name |  | 
| `Single` | m_rangeBuild |  | 
| `EffectList` | m_repairItemDoneEffects |  | 
| `Transform` | m_roofCheckPoint |  | 
| `Boolean` | m_showBasicRecipies |  | 
| `Int32` | m_useAnimation |  | 
| `Single` | m_useDistance |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | CheckUsable(`Player` player, `Boolean` showMessage) |  | 
| `Vector3` | GetConnectionEffectPoint() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Int32` | GetLevel() |  | 
| `Boolean` | Interact(`Humanoid` user, `Boolean` repeat) |  | 
| `Boolean` | InUseDistance(`Humanoid` human) |  | 
| `void` | PokeInUse() |  | 
| `void` | ShowAreaMarker() |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `CraftingStation` | FindClosestStationInRange(`String` name, `Vector3` point, `Single` range) |  | 
| `void` | FindStationsInRange(`String` name, `Vector3` point, `Single` range, `List<CraftingStation>` stations) |  | 
| `CraftingStation` | GetCraftingStation(`Vector3` point) |  | 
| `CraftingStation` | HaveBuildStationInRange(`String` name, `Vector3` point) |  | 
| `void` | UpdateKnownStationsInRange(`Player` player) |  | 


