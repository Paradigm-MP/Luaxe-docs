## `FishingFloat`

```csharp
public class FishingFloat
    : MonoBehaviour, IProjectile
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_breakDistance |  | 
| Single | m_hookedStaminaPerSec |  | 
| [LineConnect](./LineConnect.md) | m_hookLine |  | 
| [EffectList](./EffectList.md) | m_lineBreakEffect |  | 
| Single | m_maxDistance |  | 
| Single | m_maxLineSlack |  | 
| Single | m_moveForce |  | 
| [EffectList](./EffectList.md) | m_nibbleEffect |  | 
| Single | m_nibbleForce |  | 
| Single | m_pullLineSpeed |  | 
| Single | m_pullStaminaUse |  | 
| Single | m_range |  | 
| [LineConnect](./LineConnect.md) | m_rodLine |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [Fish](./Fish.md) | GetCatch() |  | 
| [Character](./Character.md) | GetOwner() |  | 
| String | GetTooltipString(Int32 itemQuality) |  | 
| Boolean | IsInWater() |  | 
| void | Nibble([`Fish`](./Fish.md) fish) |  | 
| void | RPC_Nibble(Int64 sender, [`ZDOID`](./ZDOID.md) fishID) |  | 
| void | Setup([`Character`](./Character.md) owner, Vector3 velocity, Single hitNoise, [`HitData`](./HitData.md) hitData, ItemData item) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [FishingFloat](./FishingFloat.md) | FindFloat([`Fish`](./Fish.md) fish) |  | 
| List&lt;FishingFloat&gt; | GetAllInstances() |  | 


