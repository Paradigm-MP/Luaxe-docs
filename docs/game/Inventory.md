## `Inventory`

```csharp
public class Inventory

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Action` | m_onChanged |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | AddItem(`ItemData` item) |  | 
| `ItemData` | AddItem(`String` name, `Int32` stack, `Int32` quality, `Int32` variant, `Int64` crafterID, `String` crafterName) |  | 
| `Boolean` | CanAddItem(`GameObject` prefab, `Int32` stack = -1) |  | 
| `Boolean` | CanAddItem(`ItemData` item, `Int32` stack = -1) |  | 
| `Boolean` | ContainsItem(`ItemData` item) |  | 
| `Int32` | CountItems(`String` name) |  | 
| `List<ItemData>` | GetAllItems() |  | 
| `void` | GetAllItems(`String` name, `List<ItemData>` items) |  | 
| `void` | GetAllItems(`ItemType` type, `List<ItemData>` items) |  | 
| `void` | GetAllPieceTables(`List<PieceTable>` tables) |  | 
| `ItemData` | GetAmmoItem(`String` ammoName) |  | 
| `Sprite` | GetBkg() |  | 
| `void` | GetBoundItems(`List<ItemData>` bound) |  | 
| `Int32` | GetEmptySlots() |  | 
| `List<ItemData>` | GetEquipedtems() |  | 
| `Int32` | GetHeight() |  | 
| `ItemData` | GetItem(`Int32` index) |  | 
| `ItemData` | GetItem(`String` name) |  | 
| `ItemData` | GetItemAt(`Int32` x, `Int32` y) |  | 
| `String` | GetName() |  | 
| `ItemData` | GetOtherItemAt(`Int32` x, `Int32` y, `ItemData` oldItem) |  | 
| `Single` | GetTotalWeight() |  | 
| `void` | GetValuableItems(`List<ItemData>` items) |  | 
| `Int32` | GetWidth() |  | 
| `void` | GetWornItems(`List<ItemData>` worn) |  | 
| `Boolean` | HaveEmptySlot() |  | 
| `Boolean` | HaveItem(`String` name) |  | 
| `Boolean` | IsTeleportable() |  | 
| `void` | Load(`ZPackage` pkg) |  | 
| `void` | MoveAll(`Inventory` fromInventory) |  | 
| `void` | MoveInventoryToGrave(`Inventory` original) |  | 
| `void` | MoveItemToThis(`Inventory` fromInventory, `ItemData` item) |  | 
| `Boolean` | MoveItemToThis(`Inventory` fromInventory, `ItemData` item, `Int32` amount, `Int32` x, `Int32` y) |  | 
| `Int32` | NrOfItems() |  | 
| `void` | Print() |  | 
| `void` | RemoveAll() |  | 
| `Boolean` | RemoveItem(`Int32` index) |  | 
| `Boolean` | RemoveItem(`ItemData` item) |  | 
| `Boolean` | RemoveItem(`ItemData` item, `Int32` amount) |  | 
| `void` | RemoveItem(`String` name, `Int32` amount) |  | 
| `Boolean` | RemoveOneItem(`ItemData` item) |  | 
| `void` | Save(`ZPackage` pkg) |  | 
| `Single` | SlotsUsedPercentage() |  | 


