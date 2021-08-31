## `FishingFloat`

```csharp
public class FishingFloat
    : MonoBehaviour, IProjectile

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_breakDistance |  | 
| `Single` | m_hookedStaminaPerSec |  | 
| `LineConnect` | m_hookLine |  | 
| `EffectList` | m_lineBreakEffect |  | 
| `Single` | m_maxDistance |  | 
| `Single` | m_maxLineSlack |  | 
| `Single` | m_moveForce |  | 
| `EffectList` | m_nibbleEffect |  | 
| `Single` | m_nibbleForce |  | 
| `Single` | m_pullLineSpeed |  | 
| `Single` | m_pullStaminaUse |  | 
| `Single` | m_range |  | 
| `LineConnect` | m_rodLine |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Fish` | GetCatch() |  | 
| `Character` | GetOwner() |  | 
| `String` | GetTooltipString(`Int32` itemQuality) |  | 
| `Boolean` | IsInWater() |  | 
| `void` | Nibble(`Fish` fish) |  | 
| `void` | RPC_Nibble(`Int64` sender, `ZDOID` fishID) |  | 
| `void` | Setup(`Character` owner, `Vector3` velocity, `Single` hitNoise, `HitData` hitData, `ItemData` item) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `FishingFloat` | FindFloat(`Fish` fish) |  | 
| `List<FishingFloat>` | GetAllInstances() |  | 


