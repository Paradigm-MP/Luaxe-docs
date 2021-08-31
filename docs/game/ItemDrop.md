## `ItemDrop`

```csharp
public class ItemDrop
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | m_autoDestroy |  | 
| `Boolean` | m_autoPickup |  | 
| `ItemData` | m_itemData |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | CanPickup() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` repeat) |  | 
| `void` | LoadFromExternalZDO(`ZDO` zdo) |  | 
| `void` | OnPlayerDrop() |  | 
| `void` | Pickup(`Humanoid` character) |  | 
| `Boolean` | RemoveOne() |  | 
| `void` | RequestOwn() |  | 
| `void` | SetStack(`Int32` stack) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `ItemDrop` | DropItem(`ItemData` item, `Int32` amount, `Vector3` position, `Quaternion` rotation) |  | 
| `void` | LoadFromZDO(`ItemData` itemData, `ZDO` zdo) |  | 
| `void` | SaveToZDO(`ItemData` itemData, `ZDO` zdo) |  | 


