## `Fish`

```csharp
public class Fish
    : MonoBehaviour, IWaterInteractable, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_acceleration |  | 
| `Single` | m_avoidRange |  | 
| `Single` | m_avoidSpeedScale |  | 
| `Single` | m_baseHookChance |  | 
| `Single` | m_eatDuration |  | 
| `Single` | m_height |  | 
| `Single` | m_hookForce |  | 
| `Single` | m_maxDepth |  | 
| `Single` | m_minDepth |  | 
| `String` | m_name |  | 
| `GameObject` | m_pickupItem |  | 
| `Int32` | m_pickupItemStackSize |  | 
| `Single` | m_speed |  | 
| `Single` | m_staminaUse |  | 
| `Single` | m_swimRange |  | 
| `Single` | m_turnRate |  | 
| `Single` | m_wpDurationMax |  | 
| `Single` | m_wpDurationMin |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Transform` | GetTransform() |  | 
| `ZDOID` | GetZDOID() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` repeat) |  | 
| `Boolean` | IsOwner() |  | 
| `Boolean` | Pickup(`Humanoid` character) |  | 
| `void` | SetInWater(`Single` waterLevel) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


