## `Projectile`

```csharp
public class Projectile
    : MonoBehaviour, IProjectile

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_aoe |  | 
| Single | m_attackForce |  | 
| Single | m_backstabBonus |  | 
| Boolean | m_blockable |  | 
| Boolean | m_canHitWater |  | 
| DamageTypes | m_damage |  | 
| Boolean | m_dodgeable |  | 
| Single | m_gravity |  | 
| Boolean | m_groundHitOnly |  | 
| GameObject | m_hideOnHit |  | 
| [EffectList](./EffectList.md) | m_hitEffects |  | 
| Single | m_hitNoise |  | 
| [EffectList](./EffectList.md) | m_hitWaterEffects |  | 
| Single | m_rayRadius |  | 
| Boolean | m_respawnItemOnHit |  | 
| Single | m_rotateVisual |  | 
| Boolean | m_showBreakMessage |  | 
| Vector3 | m_spawnOffset |  | 
| GameObject | m_spawnOnHit |  | 
| Single | m_spawnOnHitChance |  | 
| [EffectList](./EffectList.md) | m_spawnOnHitEffects |  | 
| Boolean | m_spawnRandomRotation |  | 
| Boolean | m_staticHitOnly |  | 
| String | m_statusEffect |  | 
| Boolean | m_stayAfterHitStatic |  | 
| Boolean | m_stopEmittersOnHit |  | 
| Single | m_ttl |  | 
| GameObject | m_visual |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetTooltipString(Int32 itemQuality) |  | 
| Vector3 | GetVelocity() |  | 
| void | Setup([`Character`](./Character.md) owner, Vector3 velocity, Single hitNoise, [`HitData`](./HitData.md) hitData, ItemData item) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| GameObject | FindHitObject(Collider collider) |  | 


