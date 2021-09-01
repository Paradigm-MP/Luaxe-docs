## `Container`

```csharp
public class Container
    : MonoBehaviour, Hoverable, Interactable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_autoDestroyEmpty |  | 
| Sprite | m_bkg |  | 
| Boolean | m_checkGuardStone |  | 
| GameObject | m_closed |  | 
| [EffectList](./EffectList.md) | m_closeEffects |  | 
| [DropTable](./DropTable.md) | m_defaultItems |  | 
| GameObject | m_destroyedLootPrefab |  | 
| Int32 | m_height |  | 
| String | m_name |  | 
| Action | m_onTakeAllSuccess |  | 
| GameObject | m_open |  | 
| [EffectList](./EffectList.md) | m_openEffects |  | 
| PrivacySetting | m_privacy |  | 
| [ZNetView](./ZNetView.md) | m_rootObjectOverride |  | 
| [Vagon](./Vagon.md) | m_wagon |  | 
| Int32 | m_width |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | CanBeRemoved() |  | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| [Inventory](./Inventory.md) | GetInventory() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) character, Boolean hold) |  | 
| Boolean | IsInUse() |  | 
| Boolean | IsOwner() |  | 
| void | SetInUse(Boolean inUse) |  | 
| Boolean | TakeAll([`Humanoid`](./Humanoid.md) character) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


