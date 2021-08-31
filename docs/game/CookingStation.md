## `CookingStation`

```csharp
public class CookingStation
    : MonoBehaviour, Interactable, Hoverable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [EffectList](./EffectList.md) | m_addEffect |  | 
| List&lt;ItemConversion&gt; | m_conversion |  | 
| [EffectList](./EffectList.md) | m_doneEffect |  | 
| String | m_name |  | 
| [EffectList](./EffectList.md) | m_overcookedEffect |  | 
| [ItemDrop](./ItemDrop.md) | m_overCookedItem |  | 
| [EffectList](./EffectList.md) | m_pickEffector |  | 
| Transform[] | m_slots |  | 
| Single | m_spawnForce |  | 
| Single | m_spawnOffset |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact(`Humanoid` user, `Boolean` hold) |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


