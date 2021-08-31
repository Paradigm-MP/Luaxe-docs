## `Character`

```csharp
public class Character
    : MonoBehaviour, IDestructible, Hoverable, IWaterInteractable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_acceleration |  | 
| `Single` | m_airControl |  | 
| `Animator` | m_animator |  | 
| `CharacterAnimEvent` | m_animEvent |  | 
| `Boolean` | m_attack |  | 
| `Boolean` | m_attackDraw |  | 
| `EffectList` | m_backstabHitEffects |  | 
| `BaseAI` | m_baseAI |  | 
| `Boolean` | m_blocking |  | 
| `Rigidbody` | m_body |  | 
| `Boolean` | m_boss |  | 
| `String` | m_bossEvent |  | 
| `Boolean` | m_canSwim |  | 
| `CapsuleCollider` | m_collider |  | 
| `EffectList` | m_critHitEffects |  | 
| `Single` | m_crouchSpeed |  | 
| `DamageModifiers` | m_damageModifiers |  | 
| `EffectList` | m_deathEffects |  | 
| `String` | m_defeatSetGlobalKey |  | 
| `Transform` | m_eye |  | 
| `Faction` | m_faction |  | 
| `Single` | m_flyFastSpeed |  | 
| `Boolean` | m_flying |  | 
| `Single` | m_flySlowSpeed |  | 
| `Single` | m_flyTurnSpeed |  | 
| `GroundTiltType` | m_groundTilt |  | 
| `Transform` | m_head |  | 
| `Single` | m_health |  | 
| `EffectList` | m_hitEffects |  | 
| `EffectList` | m_jumpEffects |  | 
| `Single` | m_jumpForce |  | 
| `Single` | m_jumpForceForward |  | 
| `Single` | m_jumpForceTiredFactor |  | 
| `Single` | m_jumpStaminaUsage |  | 
| `LODGroup` | m_lodGroup |  | 
| `Vector3` | m_lookDir |  | 
| `Quaternion` | m_lookYaw |  | 
| `Single` | m_maxAirAltitude |  | 
| `Vector3` | m_moveDir |  | 
| `String` | m_name |  | 
| `ZNetView` | m_nview |  | 
| `Action<Single, Character>` | m_onDamaged |  | 
| `Action` | m_onDeath |  | 
| `Action<Vector3>` | m_onLand |  | 
| `Action<Int32>` | m_onLevelSet |  | 
| `Vector3` | m_pushForce |  | 
| `Boolean` | m_run |  | 
| `Boolean` | m_running |  | 
| `Single` | m_runSpeed |  | 
| `Single` | m_runTurnSpeed |  | 
| `Boolean` | m_secondaryAttack |  | 
| `SEMan` | m_seman |  | 
| `EffectList` | m_slideEffects |  | 
| `Boolean` | m_sliding |  | 
| `Single` | m_speed |  | 
| `Single` | m_staggerDamageFactor |  | 
| `Boolean` | m_staggerWhenBlocked |  | 
| `Single` | m_swimAcceleration |  | 
| `Single` | m_swimDepth |  | 
| `Single` | m_swimSpeed |  | 
| `Single` | m_swimTurnSpeed |  | 
| `Boolean` | m_tolerateFire |  | 
| `Boolean` | m_tolerateSmoke |  | 
| `Boolean` | m_tolerateWater |  | 
| `Single` | m_turnSpeed |  | 
| `GameObject` | m_visual |  | 
| `Boolean` | m_walk |  | 
| `Boolean` | m_walking |  | 
| `Single` | m_walkSpeed |  | 
| `Boolean` | m_wallRunning |  | 
| `EffectList` | m_waterEffects |  | 
| `Single` | m_waterLevel |  | 
| `ZSyncAnimation` | m_zanim |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | AddNoise(`Single` range) |  | 
| `void` | AddPushbackForce(`Vector3&` velocity) |  | 
| `void` | AddRootMotion(`Vector3` vel) |  | 
| `void` | AddStamina(`Single` v) |  | 
| `Boolean` | AlwaysRotateCamera() |  | 
| `void` | ApplyArmorDamageMods(`DamageModifiers&` mods) |  | 
| `void` | ApplyDamage(`HitData` hit, `Boolean` showDamageText, `Boolean` triggerEffects, `DamageModifier` mod = Normal) |  | 
| `void` | AttachStart(`Transform` attachPoint, `Boolean` hideWeapons, `Boolean` isBed, `String` attachAnimation, `Vector3` detachOffset) |  | 
| `void` | AttachStop() |  | 
| `void` | Awake() |  | 
| `Boolean` | BlockAttack(`HitData` hit, `Character` attacker) |  | 
| `Boolean` | CanMove() |  | 
| `Boolean` | CheckRun(`Vector3` moveDir, `Single` dt) |  | 
| `void` | Damage(`HitData` hit) |  | 
| `void` | DamageArmorDurability(`HitData` hit) |  | 
| `void` | DoDamageCameraShake(`HitData` hit) |  | 
| `void` | FixedUpdate() |  | 
| `Single` | GetAttackSpeedFactorMovement() |  | 
| `Single` | GetAttackSpeedFactorRotation() |  | 
| `BaseAI` | GetBaseAI() |  | 
| `Single` | GetBodyArmor() |  | 
| `Vector3` | GetCenterPoint() |  | 
| `CapsuleCollider` | GetCollider() |  | 
| `DamageModifier` | GetDamageModifier(`DamageType` damageType) |  | 
| `DamageModifiers` | GetDamageModifiers() |  | 
| `DestructibleType` | GetDestructibleType() |  | 
| `Single` | GetEquipmentMovementModifier() |  | 
| `Vector3` | GetEyePoint() |  | 
| `Faction` | GetFaction() |  | 
| `Vector3` | GetHeadPoint() |  | 
| `Single` | GetHealth() |  | 
| `Single` | GetHealthPercentage() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Single` | GetJogSpeedFactor() |  | 
| `Collider` | GetLastGroundCollider() |  | 
| `Vector3` | GetLastGroundNormal() |  | 
| `Int32` | GetLevel() |  | 
| `Vector3` | GetLookDir() |  | 
| `Quaternion` | GetLookYaw() |  | 
| `Single` | GetMass() |  | 
| `Single` | GetMaxHealth() |  | 
| `Single` | GetMaxStamina() |  | 
| `Vector3` | GetMoveDir() |  | 
| `Single` | GetNoiseRange() |  | 
| `Int64` | GetOwner() |  | 
| `Single` | GetRadius() |  | 
| `Single` | GetRandomSkillFactor(`SkillType` skill) |  | 
| `Boolean` | GetRelativePosition(`ZDOID&` parent, `Vector3&` relativePos, `Vector3&` relativeVel) |  | 
| `Single` | GetRunSpeedFactor() |  | 
| `SEMan` | GetSEMan() |  | 
| `Single` | GetSkillFactor(`SkillType` skill) |  | 
| `Skills` | GetSkills() |  | 
| `Single` | GetStaminaPercentage() |  | 
| `Ship` | GetStandingOnShip() |  | 
| `Single` | GetStealthFactor() |  | 
| `Vector3` | GetTopPoint() |  | 
| `Transform` | GetTransform() |  | 
| `Vector3` | GetVelocity() |  | 
| `GameObject` | GetVisual() |  | 
| `Boolean` | GetWalk() |  | 
| `ZDOID` | GetZDOID() |  | 
| `Boolean` | HaveStamina(`Single` amount = 0) |  | 
| `void` | Heal(`Single` hp, `Boolean` showText = True) |  | 
| `Boolean` | InAttack() |  | 
| `Boolean` | InBed() |  | 
| `Boolean` | InCutscene() |  | 
| `Boolean` | InDodge() |  | 
| `Boolean` | InEmote() |  | 
| `Boolean` | InGhostMode() |  | 
| `Boolean` | InGodMode() |  | 
| `Boolean` | InInterior() |  | 
| `Boolean` | InIntro() |  | 
| `Boolean` | InMinorAction() |  | 
| `Boolean` | InPlaceMode() |  | 
| `Boolean` | InWater() |  | 
| `Boolean` | InWaterSwimDepth() |  | 
| `Boolean` | IsAttached() |  | 
| `Boolean` | IsBlocking() |  | 
| `Boolean` | IsBoss() |  | 
| `Boolean` | IsCrouching() |  | 
| `Boolean` | IsDead() |  | 
| `Boolean` | IsDebugFlying() |  | 
| `Boolean` | IsDodgeInvincible() |  | 
| `Boolean` | IsEncumbered() |  | 
| `Boolean` | IsFlying() |  | 
| `Boolean` | IsHoldingAttack() |  | 
| `Boolean` | IsKnockedBack() |  | 
| `Boolean` | IsMonsterFaction() |  | 
| `Boolean` | IsOnGround() |  | 
| `Boolean` | IsOwner() |  | 
| `Boolean` | IsPlayer() |  | 
| `Boolean` | IsPVPEnabled() |  | 
| `Boolean` | IsRunning() |  | 
| `Boolean` | IsSneaking() |  | 
| `Boolean` | IsStaggering() |  | 
| `Boolean` | IsSwiming() |  | 
| `Boolean` | IsTamed() |  | 
| `Boolean` | IsTeleporting() |  | 
| `Boolean` | IsWalking() |  | 
| `Boolean` | IsWallRunning() |  | 
| `void` | Jump() |  | 
| `void` | Message(`MessageType` type, `String` msg, `Int32` amount = 0, `Sprite` icon = null) |  | 
| `void` | OnAttackTrigger() |  | 
| `void` | OnAutoJump(`Vector3` dir, `Single` upVel, `Single` forwardVel) |  | 
| `void` | OnDamaged(`HitData` hit) |  | 
| `void` | OnDeath() |  | 
| `void` | OnDestroy() |  | 
| `void` | OnJump() |  | 
| `void` | OnNearFire(`Vector3` point) |  | 
| `void` | OnRagdollCreated(`Ragdoll` ragdoll) |  | 
| `void` | OnSneaking(`Single` dt) |  | 
| `void` | OnStealthSuccess(`Character` character, `Single` factor) |  | 
| `void` | OnStopMoving() |  | 
| `void` | OnSwiming(`Vector3` targetVel, `Single` dt) |  | 
| `void` | OnTargeted(`Boolean` sensed, `Boolean` alerted) |  | 
| `void` | OnWeaponTrailStart() |  | 
| `void` | RaiseSkill(`SkillType` skill, `Single` value = 1) |  | 
| `void` | ResetCloth() |  | 
| `void` | SetCrouch(`Boolean` crouch) |  | 
| `void` | SetHealth(`Single` health) |  | 
| `void` | SetInWater(`Single` depth) |  | 
| `void` | SetLevel(`Int32` level) |  | 
| `void` | SetLookDir(`Vector3` dir) |  | 
| `void` | SetMaxHealth(`Single` health) |  | 
| `void` | SetMoveDir(`Vector3` dir) |  | 
| `void` | SetRun(`Boolean` run) |  | 
| `void` | SetTamed(`Boolean` tamed) |  | 
| `void` | SetVisible(`Boolean` visible) |  | 
| `void` | SetWalk(`Boolean` walk) |  | 
| `void` | ShowPickupMessage(`ItemData` item, `Int32` amount) |  | 
| `void` | ShowRemovedMessage(`ItemData` item, `Int32` amount) |  | 
| `void` | Stagger(`Vector3` forceDirection) |  | 
| `void` | Start() |  | 
| `Boolean` | StartAttack(`Character` target, `Boolean` charge) |  | 
| `void` | StopEmote() |  | 
| `Boolean` | TakeInput() |  | 
| `Boolean` | TeleportTo(`Vector3` pos, `Quaternion` rot, `Boolean` distantTeleport) |  | 
| `void` | UpdateEyeRotation() |  | 
| `void` | UpdateLodgroup() |  | 
| `Boolean` | UseMeleeCamera() |  | 
| `void` | UseStamina(`Single` stamina) |  | 


Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Int32` | m_animatorTagFreeze |  | 
| `Int32` | m_animatorTagSitting |  | 
| `Int32` | m_animatorTagStagger |  | 
| `Int32` | m_characterGhostLayer |  | 
| `Int32` | m_characterLayer |  | 
| `Int32` | m_characterNetLayer |  | 
| `Single` | m_minSlideDegreesMonster |  | 
| `Single` | m_minSlideDegreesPlayer |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `List<Character>` | GetAllCharacters() |  | 
| `void` | GetCharactersInRange(`Vector3` point, `Single` radius, `List<Character>` characters) |  | 
| `Boolean` | IsCharacterInRange(`Vector3` point, `Single` range) |  | 
| `Boolean` | IsDPSDebugEnabled() |  | 
| `void` | SetDPSDebug(`Boolean` enabled) |  | 

