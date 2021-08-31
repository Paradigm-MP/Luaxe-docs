## `BaseAI`

```csharp
public class BaseAI
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | m_afraidOfFire |  | 
| `Single` | m_airDuration |  | 
| `Boolean` | m_alerted |  | 
| `EffectList` | m_alertedEffects |  | 
| `ZSyncAnimation` | m_animator |  | 
| `Boolean` | m_avoidFire |  | 
| `Boolean` | m_avoidWater |  | 
| `Rigidbody` | m_body |  | 
| `Single` | m_chanceToLand |  | 
| `Single` | m_chanceToTakeoff |  | 
| `Character` | m_character |  | 
| `String` | m_deathMessage |  | 
| `Single` | m_flyAltitudeMax |  | 
| `Single` | m_flyAltitudeMin |  | 
| `Single` | m_groundDuration |  | 
| `Single` | m_hearRange |  | 
| `Boolean` | m_huntPlayer |  | 
| `EffectList` | m_idleSound |  | 
| `Single` | m_idleSoundChance |  | 
| `Single` | m_idleSoundInterval |  | 
| `Single` | m_jumpInterval |  | 
| `Single` | m_maxLandAltitude |  | 
| `Single` | m_moveMinAngle |  | 
| `ZNetView` | m_nview |  | 
| `AgentType` | m_pathAgentType |  | 
| `Single` | m_randomCircleInterval |  | 
| `Boolean` | m_randomFly |  | 
| `Single` | m_randomMoveInterval |  | 
| `Single` | m_randomMoveRange |  | 
| `Boolean` | m_serpentMovement |  | 
| `Single` | m_serpentTurnRadius |  | 
| `Boolean` | m_smoothMovement |  | 
| `String` | m_spawnMessage |  | 
| `Vector3` | m_spawnPoint |  | 
| `Single` | m_takeoffTime |  | 
| `Single` | m_timeSinceHurt |  | 
| `Single` | m_viewAngle |  | 
| `Single` | m_viewRange |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Alert() |  | 
| `Boolean` | AvoidFire(`Single` dt, `Character` moveToTarget, `Boolean` superAfraid) |  | 
| `void` | Awake() |  | 
| `Boolean` | CanHearTarget(`Character` target) |  | 
| `Boolean` | CanSeeTarget(`Character` target) |  | 
| `Boolean` | CanSeeTarget(`StaticTarget` target) |  | 
| `Boolean` | CanSenseTarget(`Character` target) |  | 
| `StaticTarget` | FindClosestStaticPriorityTarget() |  | 
| `Character` | FindEnemy() |  | 
| `Boolean` | FindPath(`Vector3` target) |  | 
| `StaticTarget` | FindRandomStaticTarget(`Single` maxDistance) |  | 
| `Boolean` | Flee(`Single` dt, `Vector3` from) |  | 
| `void` | Follow(`GameObject` go, `Single` dt) |  | 
| `Boolean` | FoundPath() |  | 
| `Single` | GetAltitude() |  | 
| `Boolean` | GetPatrolPoint(`Vector3&` point) |  | 
| `Character` | GetTargetCreature() |  | 
| `TimeSpan` | GetTimeSinceSpawned() |  | 
| `Boolean` | HasZDOOwner() |  | 
| `Boolean` | HaveAlertedCreatureInRange(`Single` range) |  | 
| `Character` | HaveFriendInRange(`Single` range) |  | 
| `void` | HaveFriendsInRange(`Single` range, `Character&` hurtFriend, `Character&` friend) |  | 
| `Character` | HaveHurtFriendInRange(`Single` range) |  | 
| `Boolean` | HavePath(`Vector3` target) |  | 
| `Boolean` | HaveTarget() |  | 
| `Boolean` | HuntPlayer() |  | 
| `void` | IdleMovement(`Single` dt) |  | 
| `Boolean` | IsAlerted() |  | 
| `Boolean` | IsEnemey(`Character` other) |  | 
| `Boolean` | IsLookingAt(`Vector3` point, `Single` minAngle) |  | 
| `Boolean` | IsLookingTowards(`Vector3` dir, `Single` minAngle) |  | 
| `Boolean` | IsSleeping() |  | 
| `Boolean` | IsTakingOff() |  | 
| `Boolean` | IsValidRandomMovePoint(`Vector3` point) |  | 
| `void` | LookAt(`Vector3` point) |  | 
| `void` | LookTowards(`Vector3` dir) |  | 
| `Boolean` | MoveAndAvoid(`Single` dt, `Vector3` point, `Single` dist, `Boolean` run) |  | 
| `void` | MoveAwayAndDespawn(`Single` dt, `Boolean` run) |  | 
| `Boolean` | MoveTo(`Single` dt, `Vector3` point, `Single` dist, `Boolean` run) |  | 
| `void` | MoveTowards(`Vector3` dir, `Boolean` run) |  | 
| `void` | MoveTowardsSwoop(`Vector3` dir, `Boolean` run, `Single` distance) |  | 
| `void` | MoveToWater(`Single` dt, `Single` maxRange) |  | 
| `void` | OnDamaged(`Single` damage, `Character` attacker) |  | 
| `void` | OnDeath() |  | 
| `void` | OnDrawGizmosSelected() |  | 
| `void` | RandomMovement(`Single` dt, `Vector3` centerPoint) |  | 
| `void` | RandomMovementArroundPoint(`Single` dt, `Vector3` point, `Single` distance, `Boolean` run) |  | 
| `Single` | Raycast(`Vector3` p, `Vector3` dir, `Single` distance, `Single` radius) |  | 
| `void` | ResetPatrolPoint() |  | 
| `void` | RPC_OnNearProjectileHit(`Int64` sender, `Vector3` center, `Single` range, `ZDOID` attacker) |  | 
| `void` | SetAlerted(`Boolean` alert) |  | 
| `void` | SetHuntPlayer(`Boolean` hunt) |  | 
| `void` | SetPatrolPoint() |  | 
| `void` | SetPatrolPoint(`Vector3` point) |  | 
| `void` | SetTargetInfo(`ZDOID` targetID) |  | 
| `Single` | StandStillDuration(`Single` distanceTreshold) |  | 
| `void` | StopMoving() |  | 
| `void` | UpdateAI(`Single` dt) |  | 
| `void` | UpdateTakeoffLanding(`Single` dt) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | CanUseAttack(`Character` character, `ItemData` item) |  | 
| `void` | DoProjectileHitNoise(`Vector3` center, `Single` range, `Character` attacker) |  | 
| `Character` | FindClosestEnemy(`Character` me, `Vector3` point, `Single` maxDistance) |  | 
| `Character` | FindRandomEnemy(`Character` me, `Vector3` point, `Single` maxDistance) |  | 
| `List<BaseAI>` | GetAllInstances() |  | 
| `Boolean` | InStealthRange(`Character` me) |  | 
| `Boolean` | IsEnemy(`Character` a, `Character` b) |  | 


