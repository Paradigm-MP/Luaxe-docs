## `Fermenter`

```csharp
public class Fermenter
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `EffectList` | m_addedEffects |  | 
| `Switch` | m_addSwitch |  | 
| `List<ItemConversion>` | m_conversion |  | 
| `Single` | m_fermentationDuration |  | 
| `GameObject` | m_fermentingObject |  | 
| `String` | m_name |  | 
| `Transform` | m_outputPoint |  | 
| `GameObject` | m_readyObject |  | 
| `Transform` | m_roofCheckPoint |  | 
| `EffectList` | m_spawnEffects |  | 
| `Single` | m_tapDelay |  | 
| `EffectList` | m_tapEffects |  | 
| `Switch` | m_tapSwitch |  | 
| `GameObject` | m_topObject |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` user, `Boolean` hold) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


