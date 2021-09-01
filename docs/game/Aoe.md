## `Aoe`

```csharp
public class Aoe
    : MonoBehaviour, IProjectile
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_attachToCaster |  | 
| Single | m_attackForce |  | 
| Boolean | m_attackForceForward |  | 
| Single | m_backstabBonus |  | 
| Boolean | m_blockable |  | 
| DamageTypes | m_damage |  | 
| DamageTypes | m_damagePerLevel |  | 
| Single | m_damageSelf |  | 
| Boolean | m_dodgeable |  | 
| Boolean | m_hitCharacters |  | 
| [EffectList](./EffectList.md) | m_hitEffects |  | 
| Boolean | m_hitEnemy |  | 
| Boolean | m_hitFriendly |  | 
| Single | m_hitInterval |  | 
| Boolean | m_hitOwner |  | 
| Boolean | m_hitProps |  | 
| Boolean | m_hitSame |  | 
| Single | m_radius |  | 
| SkillType | m_skill |  | 
| String | m_statusEffect |  | 
| Int32 | m_toolTier |  | 
| Boolean | m_triggerEnterOnly |  | 
| Single | m_ttl |  | 
| Boolean | m_useAttackSettings |  | 
| Boolean | m_useTriggers |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| DamageTypes | GetDamage() |  | 
| DamageTypes | GetDamage(Int32 itemQuality) |  | 
| String | GetTooltipString(Int32 itemQuality) |  | 
| void | Setup([`Character`](./Character.md) owner, Vector3 velocity, Single hitNoise, [`HitData`](./HitData.md) hitData, ItemData item) |  | 


