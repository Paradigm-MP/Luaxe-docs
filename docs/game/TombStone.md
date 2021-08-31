## `TombStone`

```csharp
public class TombStone
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_floater |  | 
| `StatusEffect` | m_lootStatusEffect |  | 
| `EffectList` | m_removeEffect |  | 
| `Single` | m_spawnUpVel |  | 
| `String` | m_text |  | 
| `Text` | m_worldText |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Int64` | GetOwner() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` hold) |  | 
| `Boolean` | IsOwner() |  | 
| `void` | Setup(`String` ownerName, `Int64` ownerUID) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 

