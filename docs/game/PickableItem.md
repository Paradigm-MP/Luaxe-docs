## `PickableItem`

```csharp
public class PickableItem
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `ItemDrop` | m_itemPrefab |  | 
| `EffectList` | m_pickEffector |  | 
| `RandomItem[]` | m_randomItemPrefabs |  | 
| `Int32` | m_stack |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` repeat) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


