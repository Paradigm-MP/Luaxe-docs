## `Attack`

```csharp
public class Attack

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_attackAngle |  | 
| String | m_attackAnimation |  | 
| Int32 | m_attackChainLevels |  | 
| Single | m_attackHeight |  | 
| Single | m_attackHitNoise |  | 
| Single | m_attackOffset |  | 
| String | m_attackOriginJoint |  | 
| GameObject | m_attackProjectile |  | 
| Int32 | m_attackRandomAnimations |  | 
| Single | m_attackRange |  | 
| Single | m_attackRayWidth |  | 
| Single | m_attackStamina |  | 
| Single | m_attackStartNoise |  | 
| AttackType | m_attackType |  | 
| Single | m_burstInterval |  | 
| Boolean | m_consumeItem |  | 
| Single | m_damageMultiplier |  | 
| Boolean | m_destroyPreviousProjectile |  | 
| Single | m_forceMultiplier |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| HitPointType | m_hitPointtype |  | 
| Boolean | m_hitTerrain |  | 
| [EffectList](./EffectList.md) | m_hitTerrainEffect |  | 
| Boolean | m_hitThroughWalls |  | 
| Single | m_lastChainDamageMultiplier |  | 
| Single | m_launchAngle |  | 
| Boolean | m_lowerDamagePerHit |  | 
| Single | m_maxYAngle |  | 
| Boolean | m_multiHit |  | 
| Single | m_projectileAccuracy |  | 
| Single | m_projectileAccuracyMin |  | 
| Int32 | m_projectileBursts |  | 
| Int32 | m_projectiles |  | 
| Single | m_projectileVel |  | 
| Single | m_projectileVelMin |  | 
| [DestructibleType](./DestructibleType.md) | m_resetChainIfHit |  | 
| GameObject | m_spawnOnTrigger |  | 
| SkillType | m_specialHitSkill |  | 
| [DestructibleType](./DestructibleType.md) | m_specialHitType |  | 
| Single | m_speedFactor |  | 
| Single | m_speedFactorRotation |  | 
| Single | m_staggerMultiplier |  | 
| [EffectList](./EffectList.md) | m_startEffect |  | 
| [EffectList](./EffectList.md) | m_trailStartEffect |  | 
| [EffectList](./EffectList.md) | m_triggerEffect |  | 
| Boolean | m_useCharacterFacing |  | 
| Boolean | m_useCharacterFacingYAim |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | CanStartChainAttack() |  | 
| [Attack](./Attack.md) | Clone() |  | 
| ItemData | GetWeapon() |  | 
| void | OnAttackTrigger() |  | 
| void | OnTrailStart() |  | 
| Boolean | Start(`Humanoid` character, `Rigidbody` body, `ZSyncAnimation` zanim, `CharacterAnimEvent` animEvent, `VisEquipment` visEquipment, `ItemData` weapon, `Attack` previousAttack, `Single` timeSinceLastAttack, `Single` attackDrawPercentage) |  | 
| Boolean | StartDraw(`Humanoid` character, `ItemData` weapon) |  | 
| void | Stop() |  | 
| void | Update(`Single` dt) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_attackMask |  | 
| Int32 | m_attackMaskTerrain |  | 


