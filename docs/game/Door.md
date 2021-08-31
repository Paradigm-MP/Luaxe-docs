## `Door`

```csharp
public class Door
    : MonoBehaviour, Hoverable, Interactable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [EffectList](./EffectList.md) | m_closeEffects |  | 
| GameObject | m_doorObject |  | 
| [ItemDrop](./ItemDrop.md) | m_keyItem |  | 
| [EffectList](./EffectList.md) | m_lockedEffects |  | 
| String | m_name |  | 
| [EffectList](./EffectList.md) | m_openEffects |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact(`Humanoid` character, `Boolean` hold) |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


