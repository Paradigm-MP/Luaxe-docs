## `Fermenter`

```csharp
public class Fermenter
    : MonoBehaviour, Hoverable, Interactable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [EffectList](./EffectList.md) | m_addedEffects |  | 
| [Switch](./Switch.md) | m_addSwitch |  | 
| List&lt;ItemConversion&gt; | m_conversion |  | 
| Single | m_fermentationDuration |  | 
| GameObject | m_fermentingObject |  | 
| String | m_name |  | 
| Transform | m_outputPoint |  | 
| GameObject | m_readyObject |  | 
| Transform | m_roofCheckPoint |  | 
| [EffectList](./EffectList.md) | m_spawnEffects |  | 
| Single | m_tapDelay |  | 
| [EffectList](./EffectList.md) | m_tapEffects |  | 
| [Switch](./Switch.md) | m_tapSwitch |  | 
| GameObject | m_topObject |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) user, Boolean hold) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


