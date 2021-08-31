## `InventoryGrid`

```csharp
public class InventoryGrid
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| GameObject | m_elementPrefab |  | 
| Single | m_elementSpace |  | 
| RectTransform | m_gridRoot |  | 
| Action&lt;InventoryGrid, ItemData, Vector2i&gt; | m_onRightClick |  | 
| Action&lt;InventoryGrid, ItemData, Vector2i, Modifier&gt; | m_onSelected |  | 
| Scrollbar | m_scrollbar |  | 
| UIGroupHandler | m_uiGroup |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Awake() |  | 
| Boolean | DropItem(`Inventory` fromInventory, `ItemData` item, `Int32` amount, `Vector2i` pos) |  | 
| RectTransform | GetGamepadSelectedElement() |  | 
| ItemData | GetGamepadSelectedItem() |  | 
| [Inventory](./Inventory.md) | GetInventory() |  | 
| ItemData | GetItem(`Vector2i` cursorPosition) |  | 
| Vector2 | GetWidgetSize() |  | 
| void | ResetView() |  | 
| void | SetSelection(`Vector2i` pos) |  | 
| void | UpdateInventory(`Inventory` inventory, `Player` player, `ItemData` dragItem) |  | 


