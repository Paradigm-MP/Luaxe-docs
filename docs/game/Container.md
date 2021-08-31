## `Container`

```csharp
public class Container
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | m_autoDestroyEmpty |  | 
| `Sprite` | m_bkg |  | 
| `Boolean` | m_checkGuardStone |  | 
| `GameObject` | m_closed |  | 
| `EffectList` | m_closeEffects |  | 
| `DropTable` | m_defaultItems |  | 
| `GameObject` | m_destroyedLootPrefab |  | 
| `Int32` | m_height |  | 
| `String` | m_name |  | 
| `Action` | m_onTakeAllSuccess |  | 
| `GameObject` | m_open |  | 
| `EffectList` | m_openEffects |  | 
| `PrivacySetting` | m_privacy |  | 
| `ZNetView` | m_rootObjectOverride |  | 
| `Vagon` | m_wagon |  | 
| `Int32` | m_width |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | CanBeRemoved() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Inventory` | GetInventory() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` hold) |  | 
| `Boolean` | IsInUse() |  | 
| `Boolean` | IsOwner() |  | 
| `void` | SetInUse(`Boolean` inUse) |  | 
| `Boolean` | TakeAll(`Humanoid` character) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 

