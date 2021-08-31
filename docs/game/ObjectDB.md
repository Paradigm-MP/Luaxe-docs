## `ObjectDB`

```csharp
public class ObjectDB
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;GameObject&gt; | m_items |  | 
| List&lt;Recipe&gt; | m_recipes |  | 
| List&lt;StatusEffect&gt; | m_StatusEffects |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | CopyOtherDB(`ObjectDB` other) |  | 
| List&lt;ItemDrop&gt; | GetAllItems(`ItemType` type, `String` startWith) |  | 
| GameObject | GetItemPrefab(`String` name) |  | 
| GameObject | GetItemPrefab(`Int32` hash) |  | 
| Int32 | GetPrefabHash(`GameObject` prefab) |  | 
| [Recipe](./Recipe.md) | GetRecipe(`ItemData` item) |  | 
| [StatusEffect](./StatusEffect.md) | GetStatusEffect(`String` name) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ObjectDB](./ObjectDB.md) | instance |  | 


