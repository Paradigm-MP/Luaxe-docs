## `ObjectDB`

```csharp
public class ObjectDB
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `List<GameObject>` | m_items |  | 
| `List<Recipe>` | m_recipes |  | 
| `List<StatusEffect>` | m_StatusEffects |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | CopyOtherDB(`ObjectDB` other) |  | 
| `List<ItemDrop>` | GetAllItems(`ItemType` type, `String` startWith) |  | 
| `GameObject` | GetItemPrefab(`String` name) |  | 
| `GameObject` | GetItemPrefab(`Int32` hash) |  | 
| `Int32` | GetPrefabHash(`GameObject` prefab) |  | 
| `Recipe` | GetRecipe(`ItemData` item) |  | 
| `StatusEffect` | GetStatusEffect(`String` name) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `ObjectDB` | instance |  | 


