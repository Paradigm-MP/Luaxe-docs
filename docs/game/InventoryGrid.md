## `InventoryGrid`

```csharp
public class InventoryGrid
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_elementPrefab |  | 
| `Single` | m_elementSpace |  | 
| `RectTransform` | m_gridRoot |  | 
| `Action<InventoryGrid, ItemData, Vector2i>` | m_onRightClick |  | 
| `Action<InventoryGrid, ItemData, Vector2i, Modifier>` | m_onSelected |  | 
| `Scrollbar` | m_scrollbar |  | 
| `UIGroupHandler` | m_uiGroup |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Awake() |  | 
| `Boolean` | DropItem(`Inventory` fromInventory, `ItemData` item, `Int32` amount, `Vector2i` pos) |  | 
| `RectTransform` | GetGamepadSelectedElement() |  | 
| `ItemData` | GetGamepadSelectedItem() |  | 
| `Inventory` | GetInventory() |  | 
| `ItemData` | GetItem(`Vector2i` cursorPosition) |  | 
| `Vector2` | GetWidgetSize() |  | 
| `void` | ResetView() |  | 
| `void` | SetSelection(`Vector2i` pos) |  | 
| `void` | UpdateInventory(`Inventory` inventory, `Player` player, `ItemData` dragItem) |  | 


