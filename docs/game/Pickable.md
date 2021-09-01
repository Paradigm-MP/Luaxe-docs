## `Pickable`

```csharp
public class Pickable
    : MonoBehaviour, Hoverable, Interactable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_amount |  | 
| [DropTable](./DropTable.md) | m_extraDrops |  | 
| GameObject | m_hideWhenPicked |  | 
| GameObject | m_itemPrefab |  | 
| String | m_overrideName |  | 
| Boolean | m_pickEffectAtSpawnPoint |  | 
| [EffectList](./EffectList.md) | m_pickEffector |  | 
| Int32 | m_respawnTimeMinutes |  | 
| Single | m_spawnOffset |  | 
| Boolean | m_useInteractAnimation |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) character, Boolean repeat) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


