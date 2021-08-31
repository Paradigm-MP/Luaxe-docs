## `CookingStation`

```csharp
public class CookingStation
    : MonoBehaviour, Interactable, Hoverable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `EffectList` | m_addEffect |  | 
| `List<ItemConversion>` | m_conversion |  | 
| `EffectList` | m_doneEffect |  | 
| `String` | m_name |  | 
| `EffectList` | m_overcookedEffect |  | 
| `ItemDrop` | m_overCookedItem |  | 
| `EffectList` | m_pickEffector |  | 
| `Transform[]` | m_slots |  | 
| `Single` | m_spawnForce |  | 
| `Single` | m_spawnOffset |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` user, `Boolean` hold) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


