## `Door`

```csharp
public class Door
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `EffectList` | m_closeEffects |  | 
| `GameObject` | m_doorObject |  | 
| `ItemDrop` | m_keyItem |  | 
| `EffectList` | m_lockedEffects |  | 
| `String` | m_name |  | 
| `EffectList` | m_openEffects |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` hold) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


