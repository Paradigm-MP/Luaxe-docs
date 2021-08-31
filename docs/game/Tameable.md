## `Tameable`

```csharp
public class Tameable
    : MonoBehaviour, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_commandable |  | 
| Single | m_fedDuration |  | 
| [EffectList](./EffectList.md) | m_petEffect |  | 
| [EffectList](./EffectList.md) | m_sootheEffect |  | 
| [EffectList](./EffectList.md) | m_tamedEffect |  | 
| Single | m_tamingTime |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverText() |  | 
| Boolean | Interact(`Humanoid` user, `Boolean` hold) |  | 
| Boolean | IsHungry() |  | 
| void | Tame() |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | TameAllInArea(`Vector3` point, `Single` radius) |  | 


