## `Player`

```csharp
public class Player
    : Humanoid, IDestructible, Hoverable, IWaterInteractable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [EffectList](./EffectList.md) | m_autopickupEffects |  | 
| Single | m_autoPickupRange |  | 
| Single | m_baseCameraShake |  | 
| [EffectList](./EffectList.md) | m_dodgeEffects |  | 
| Single | m_dodgeStaminaUsage |  | 
| [EffectList](./EffectList.md) | m_drownEffects |  | 
| Single | m_encumberedStaminaDrain |  | 
| [EffectList](./EffectList.md) | m_equipStartEffects |  | 
| Single | m_hardDeathCooldown |  | 
| Single | m_maxCarryWeight |  | 
| Single | m_maxInteractDistance |  | 
| Single | m_maxPlaceDistance |  | 
| Single | m_placeDelay |  | 
| GameObject | m_placeMarker |  | 
| Single | m_removeDelay |  | 
| [EffectList](./EffectList.md) | m_removeEffects |  | 
| Single | m_runStaminaDrain |  | 
| Single | m_scrollSens |  | 
| [EffectList](./EffectList.md) | m_skillLevelupEffects |  | 
| Single | m_sneakStaminaDrain |  | 
| [EffectList](./EffectList.md) | m_spawnEffects |  | 
| Single | m_staminaRegen |  | 
| Single | m_staminaRegenDelay |  | 
| Single | m_staminaRegenTimeMultiplier |  | 
| Single | m_swimStaminaDrainMaxSkill |  | 
| Single | m_swimStaminaDrainMinSkill |  | 
| Sprite | m_textIcon |  | 
| GameObject | m_tombstone |  | 
| GameObject | m_valkyrie |  | 
| Single | m_weightStaminaFactor |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AbortEquipQueue() |  | 
| Boolean | ActivateGuardianPower() |  | 
| void | AddKnownBiome(`Biome` biome) |  | 
| void | AddKnownItem(`ItemData` item) |  | 
| void | AddKnownPiece(`Piece` piece) |  | 
| void | AddKnownRecipe(`Recipe` recipe) |  | 
| void | AddKnownStation(`CraftingStation` station) |  | 
| void | AddKnownText(`String` label, `String` text) |  | 
| void | AddStamina(`Single` v) |  | 
| void | AddUniqueKey(`String` name) |  | 
| Boolean | AlwaysRotateCamera() |  | 
| void | ApplyArmorDamageMods(`DamageModifiers&` mods) |  | 
| void | AttachStart(`Transform` attachPoint, `Boolean` hideWeapons, `Boolean` isBed, `String` attachAnimation, `Vector3` detachOffset) |  | 
| void | AttachStop() |  | 
| void | Awake() |  | 
| Boolean | CanConsumeItem(`ItemData` item) |  | 
| Boolean | CanMove() |  | 
| Boolean | CanSwitchPVP() |  | 
| Boolean | CheckRun(`Vector3` moveDir, `Single` dt) |  | 
| void | ClearFood() |  | 
| Boolean | ConsumeItem(`Inventory` inventory, `ItemData` item) |  | 
| void | ConsumeResources(`Requirement[]` requirements, `Int32` qualityLevel) |  | 
| void | DoDamageCameraShake(`HitData` hit) |  | 
| void | Dodge(`Vector3` dodgeDir) |  | 
| void | FaceLookDirection() |  | 
| void | FixedUpdate() |  | 
| void | GetActionProgress(`String&` name, `Single&` progress) |  | 
| Int32 | GetAvailableBuildPiecesInCategory(`PieceCategory` cat) |  | 
| void | GetAvailableRecipes(`List`1&` available) |  | 
| Single | GetBaseFoodHP() |  | 
| Int32 | GetBaseValue() |  | 
| Single | GetBodyArmor() |  | 
| List&lt;Piece&gt; | GetBuildPieces() |  | 
| void | GetBuildSelection(`Piece&` go, `Vector2Int&` id, `Int32&` total, `PieceCategory&` category, `Boolean&` useCategory) |  | 
| Int32 | GetComfortLevel() |  | 
| [Ship](./Ship.md) | GetControlledShip() |  | 
| Biome | GetCurrentBiome() |  | 
| [CraftingStation](./CraftingStation.md) | GetCurrentCraftingStation() |  | 
| Single | GetEquipmentMovementModifier() |  | 
| List&lt;Food&gt; | GetFoods() |  | 
| void | GetGuardianPowerHUD(`StatusEffect&` se, `Single&` cooldown) |  | 
| String | GetGuardianPowerName() |  | 
| [Character](./Character.md) | GetHoverCreature() |  | 
| [Piece](./Piece.md) | GetHoveringPiece() |  | 
| String | GetHoverName() |  | 
| GameObject | GetHoverObject() |  | 
| String | GetHoverText() |  | 
| Single | GetJogSpeedFactor() |  | 
| List&lt;KeyValuePair&lt;String, String&gt;&gt; | GetKnownTexts() |  | 
| Single | GetMaxCarryWeight() |  | 
| Single | GetMaxStamina() |  | 
| [Piece](./Piece.md) | GetPiece(`Vector2Int` p) |  | 
| Int64 | GetPlayerID() |  | 
| Int32 | GetPlayerModel() |  | 
| String | GetPlayerName() |  | 
| [Ragdoll](./Ragdoll.md) | GetRagdoll() |  | 
| Single | GetRandomSkillFactor(`SkillType` skill) |  | 
| Boolean | GetRelativePosition(`ZDOID&` parent, `Vector3&` relativePos, `Vector3&` relativeVel) |  | 
| Single | GetRunSpeedFactor() |  | 
| [Piece](./Piece.md) | GetSelectedPiece() |  | 
| [ShipControlls](./ShipControlls.md) | GetShipControl() |  | 
| Single | GetSkillFactor(`SkillType` skill) |  | 
| [Skills](./Skills.md) | GetSkills() |  | 
| Single | GetStamina() |  | 
| Single | GetStaminaPercentage() |  | 
| Single | GetStealthFactor() |  | 
| List&lt;String&gt; | GetTrophies() |  | 
| Boolean | HaveQueuedChain() |  | 
| Boolean | HaveRequirements(`Recipe` recipe, `Boolean` discover, `Int32` qualityLevel) |  | 
| Boolean | HaveRequirements(`Piece` piece, `RequirementMode` mode) |  | 
| Boolean | HaveSeenTutorial(`String` name) |  | 
| Boolean | HaveStamina(`Single` amount = 0) |  | 
| Boolean | HaveUniqueKey(`String` name) |  | 
| Boolean | InAttack() |  | 
| Boolean | InBed() |  | 
| Boolean | InCutscene() |  | 
| Boolean | InDebugFlyMode() |  | 
| Boolean | InDodge() |  | 
| Boolean | InEmote() |  | 
| Boolean | InGhostMode() |  | 
| Boolean | InGodMode() |  | 
| Boolean | InIntro() |  | 
| Boolean | InMinorAction() |  | 
| Boolean | InPlaceMode() |  | 
| Boolean | InShelter() |  | 
| Boolean | IsAttached() |  | 
| Boolean | IsBiomeKnown(`Biome` biome) |  | 
| Boolean | IsCrouching() |  | 
| Boolean | IsDead() |  | 
| Boolean | IsDebugFlying() |  | 
| Boolean | IsDodgeInvincible() |  | 
| Boolean | IsEncumbered() |  | 
| Boolean | IsItemQueued(`ItemData` item) |  | 
| Boolean | IsPieceAvailable(`Piece` piece) |  | 
| Boolean | IsPlayer() |  | 
| Boolean | IsPVPEnabled() |  | 
| Boolean | IsRecipeKnown(`String` name) |  | 
| Boolean | IsSafeInHome() |  | 
| Boolean | IsSensed() |  | 
| Boolean | IsSleeping() |  | 
| Boolean | IsTargeted() |  | 
| Boolean | IsTeleporting() |  | 
| void | Load(`ZPackage` pkg) |  | 
| void | Message(`MessageType` type, `String` msg, `Int32` amount = 0, `Sprite` icon = null) |  | 
| Boolean | NoCostCheat() |  | 
| void | OnDamaged(`HitData` hit) |  | 
| void | OnDeath() |  | 
| void | OnDestroy() |  | 
| void | OnDodgeMortal() |  | 
| void | OnJump() |  | 
| void | OnNearFire(`Vector3` point) |  | 
| void | OnRespawn() |  | 
| void | OnSkillLevelup(`SkillType` skill, `Single` level) |  | 
| void | OnSneaking(`Single` dt) |  | 
| void | OnSpawned() |  | 
| void | OnSwiming(`Vector3` targetVel, `Single` dt) |  | 
| void | OnTargeted(`Boolean` sensed, `Boolean` alerted) |  | 
| void | RaiseSkill(`SkillType` skill, `Single` value = 1) |  | 
| void | RemoveFromEquipQueue(`ItemData` item) |  | 
| Boolean | RequiredCraftingStation(`Recipe` recipe, `Int32` qualityLevel, `Boolean` checkLevel) |  | 
| void | ResetCharacter() |  | 
| void | Save(`ZPackage` pkg) |  | 
| void | SetBuildCategory(`Int32` index) |  | 
| void | SetControls(`Vector3` movedir, `Boolean` attack, `Boolean` attackHold, `Boolean` secondaryAttack, `Boolean` block, `Boolean` blockHold, `Boolean` jump, `Boolean` crouch, `Boolean` run, `Boolean` autoRun) |  | 
| void | SetCraftingStation(`CraftingStation` station) |  | 
| void | SetCrouch(`Boolean` crouch) |  | 
| void | SetGhostMode(`Boolean` ghostmode) |  | 
| void | SetGodMode(`Boolean` godMode) |  | 
| void | SetGuardianPower(`String` name) |  | 
| void | SetHairColor(`Vector3` color) |  | 
| void | SetIntro(`Boolean` intro) |  | 
| void | SetLocalPlayer() |  | 
| void | SetMaxHealth(`Single` health, `Boolean` flashBar) |  | 
| void | SetMaxStamina(`Single` stamina, `Boolean` flashBar) |  | 
| void | SetMouseLook(`Vector2` mouseLook) |  | 
| void | SetPlaceMode(`PieceTable` buildPieces) |  | 
| void | SetPlayerID(`Int64` playerID, `String` name) |  | 
| void | SetPlayerModel(`Int32` index) |  | 
| void | SetPVP(`Boolean` enabled) |  | 
| void | SetSeenTutorial(`String` name) |  | 
| void | SetSelectedPiece(`Vector2Int` p) |  | 
| void | SetSkinColor(`Vector3` color) |  | 
| void | SetSleeping(`Boolean` sleep) |  | 
| void | SetupVisEquipment(`VisEquipment` visEq, `Boolean` isRagdoll) |  | 
| Boolean | ShowTeleportAnimation() |  | 
| void | ShowTutorial(`String` name, `Boolean` force = False) |  | 
| void | Start() |  | 
| void | StartEmote(`String` emote, `Boolean` oneshot = True) |  | 
| Boolean | StartGuardianPower() |  | 
| void | StartShipControl(`ShipControlls` shipControl) |  | 
| void | StopEmote() |  | 
| void | StopShipControl() |  | 
| Boolean | TakeInput() |  | 
| Boolean | TeleportTo(`Vector3` pos, `Quaternion` rot, `Boolean` distantTeleport) |  | 
| Boolean | ToggleEquiped(`ItemData` item) |  | 
| void | UnequipDeathDropItems() |  | 
| void | UpdateEyeRotation() |  | 
| void | UseHotbarItem(`Int32` index) |  | 
| void | UseStamina(`Single` v) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_animatorTagCrouch |  | 
| Int32 | m_animatorTagCutscene |  | 
| Int32 | m_animatorTagDodge |  | 
| Int32 | m_animatorTagEmote |  | 
| Int32 | m_animatorTagMinorAction |  | 
| Int32 | m_attackMask |  | 
| Boolean | m_debugMode |  | 
| [Player](./Player.md) | m_localPlayer |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;Player&gt; | GetAllPlayers() |  | 
| [Player](./Player.md) | GetClosestPlayer(`Vector3` point, `Single` maxRange) |  | 
| [Player](./Player.md) | GetPlayer(`Int64` playerID) |  | 
| [Player](./Player.md) | GetPlayerNoiseRange(`Vector3` point, `Single` noiseRangeScale = 1) |  | 
| void | GetPlayersInRange(`Vector3` point, `Single` range, `List&lt;Player&gt;` players) |  | 
| Int32 | GetPlayersInRangeXZ(`Vector3` point, `Single` range) |  | 
| [Player](./Player.md) | GetRandomPlayer() |  | 
| Boolean | IsPlayerInRange(`Vector3` point, `Single` range, `Int64` playerID) |  | 
| Boolean | IsPlayerInRange(`Vector3` point, `Single` range) |  | 
| Boolean | IsPlayerInRange(`Vector3` point, `Single` range, `Single` minNoise) |  | 
| Boolean | IsSeenTutorialsCleared() |  | 
| void | MessageAllInRange(`Vector3` point, `Single` range, `MessageType` type, `String` msg, `Sprite` icon = null) |  | 
| void | ResetSeenTutorials() |  | 


