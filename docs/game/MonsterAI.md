## `MonsterAI`

```csharp
public class MonsterAI
    : BaseAI

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_alertRange |  | 
| `Boolean` | m_attackPlayerObjects |  | 
| `Boolean` | m_avoidLand |  | 
| `Single` | m_circleTargetDistance |  | 
| `Single` | m_circleTargetDuration |  | 
| `Single` | m_circleTargetInterval |  | 
| `Boolean` | m_circulateWhileCharging |  | 
| `Boolean` | m_circulateWhileChargingFlying |  | 
| `Single` | m_consumeHeal |  | 
| `List<ItemDrop>` | m_consumeItems |  | 
| `Single` | m_consumeRange |  | 
| `Single` | m_consumeSearchInterval |  | 
| `Single` | m_consumeSearchRange |  | 
| `Boolean` | m_enableHuntPlayer |  | 
| `Boolean` | m_fleeIfHurtWhenTargetCantBeReached |  | 
| `Single` | m_fleeIfLowHealth |  | 
| `Boolean` | m_fleeIfNotAlerted |  | 
| `Single` | m_interceptTimeMax |  | 
| `Single` | m_interceptTimeMin |  | 
| `Single` | m_maxChaseDistance |  | 
| `Single` | m_minAttackInterval |  | 
| `Single` | m_noiseRangeScale |  | 
| `Boolean` | m_noiseWakeup |  | 
| `Action<ItemDrop>` | m_onConsumedItem |  | 
| `Boolean` | m_sleeping |  | 
| `EffectList` | m_wakeupEffects |  | 
| `Single` | m_wakeupRange |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Awake() |  | 
| `Boolean` | DespawnInDay() |  | 
| `GameObject` | GetFollowTarget() |  | 
| `Character` | GetTargetCreature() |  | 
| `Boolean` | HuntPlayer() |  | 
| `Boolean` | IsEventCreature() |  | 
| `Boolean` | IsSleeping() |  | 
| `void` | MakeTame() |  | 
| `void` | OnDamaged(`Single` damage, `Character` attacker) |  | 
| `void` | OnDrawGizmosSelected() |  | 
| `void` | RPC_OnNearProjectileHit(`Int64` sender, `Vector3` center, `Single` range, `ZDOID` attackerID) |  | 
| `void` | SetAlerted(`Boolean` alert) |  | 
| `void` | SetDespawnInDay(`Boolean` despawn) |  | 
| `void` | SetEventCreature(`Boolean` despawn) |  | 
| `void` | SetFollowTarget(`GameObject` go) |  | 
| `void` | UpdateAI(`Single` dt) |  | 


