## `Humanoid`

```csharp
public class Humanoid
    : Character, IDestructible, Hoverable, IWaterInteractable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| ItemData | m_ammoItem |  | 
| Single | m_attackDrawTime |  | 
| String | m_beardItem |  | 
| Single | m_blockStaminaDrain |  | 
| ItemData | m_chestItem |  | 
| [EffectList](./EffectList.md) | m_consumeItemEffects |  | 
| [Attack](./Attack.md) | m_currentAttack |  | 
| GameObject[] | m_defaultItems |  | 
| [EffectList](./EffectList.md) | m_dropEffects |  | 
| [EffectList](./EffectList.md) | m_equipEffects |  | 
| Single | m_equipStaminaDrain |  | 
| String | m_hairItem |  | 
| ItemData | m_helmetItem |  | 
| ItemData | m_hiddenLeftItem |  | 
| ItemData | m_hiddenRightItem |  | 
| [Inventory](./Inventory.md) | m_inventory |  | 
| Single | m_lastCombatTimer |  | 
| ItemData | m_leftItem |  | 
| ItemData | m_legItem |  | 
| [EffectList](./EffectList.md) | m_perfectBlockEffect |  | 
| [EffectList](./EffectList.md) | m_pickupEffects |  | 
| [Attack](./Attack.md) | m_previousAttack |  | 
| GameObject[] | m_randomArmor |  | 
| ItemSet[] | m_randomSets |  | 
| GameObject[] | m_randomShield |  | 
| GameObject[] | m_randomWeapon |  | 
| ItemData | m_rightItem |  | 
| ItemData | m_shoulderItem |  | 
| [ItemDrop](./ItemDrop.md) | m_unarmedWeapon |  | 
| ItemData | m_utilityItem |  | 
| [VisEquipment](./VisEquipment.md) | m_visEquipment |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AbortEquipQueue() |  | 
| void | AddUniqueKey(String name) |  | 
| void | Awake() |  | 
| Boolean | BlockAttack([`HitData`](./HitData.md) hit, [`Character`](./Character.md) attacker) |  | 
| Boolean | CanConsumeItem(ItemData item) |  | 
| Boolean | CheckRun(Vector3 moveDir, Single dt) |  | 
| Boolean | ConsumeItem([`Inventory`](./Inventory.md) inventory, ItemData item) |  | 
| void | DamageArmorDurability([`HitData`](./HitData.md) hit) |  | 
| Boolean | DropItem([`Inventory`](./Inventory.md) inventory, ItemData item, Int32 amount) |  | 
| void | EquipBestWeapon([`Character`](./Character.md) targetCreature, [`StaticTarget`](./StaticTarget.md) targetStatic, [`Character`](./Character.md) hurtFriend, [`Character`](./Character.md) friend) |  | 
| Boolean | EquipItem(ItemData item, Boolean triggerEquipEffects = True) |  | 
| void | FixedUpdate() |  | 
| Vector3 | GetAimDir(Vector3 fromPoint) |  | 
| ItemData | GetAmmoItem() |  | 
| Single | GetAttackDrawPercentage() |  | 
| Single | GetAttackSpeedFactorMovement() |  | 
| Single | GetAttackSpeedFactorRotation() |  | 
| String | GetBeard() |  | 
| ItemData | GetCurrentBlocker() |  | 
| ItemData | GetCurrentWeapon() |  | 
| Single | GetEquipmentWeight() |  | 
| String | GetHair() |  | 
| GameObject | GetHoverObject() |  | 
| [Inventory](./Inventory.md) | GetInventory() |  | 
| ItemData | GetLeftItem() |  | 
| ItemData | GetRightItem() |  | 
| void | GiveDefaultItems() |  | 
| Boolean | HaveQueuedChain() |  | 
| Boolean | HaveUniqueKey(String name) |  | 
| void | HideHandItems() |  | 
| Boolean | InAttack() |  | 
| Boolean | IsBlocking() |  | 
| Boolean | IsHoldingAttack() |  | 
| Boolean | IsItemEquiped(ItemData item) |  | 
| Boolean | IsSitting() |  | 
| Boolean | IsTeleportable() |  | 
| void | OnAttackTrigger() |  | 
| void | OnDamaged([`HitData`](./HitData.md) hit) |  | 
| void | OnRagdollCreated([`Ragdoll`](./Ragdoll.md) ragdoll) |  | 
| void | OnStopMoving() |  | 
| void | OnWeaponTrailStart() |  | 
| Boolean | Pickup(GameObject go) |  | 
| ItemData | PickupPrefab(GameObject prefab, Int32 stackSize = 0) |  | 
| void | RemoveFromEquipQueue(ItemData item) |  | 
| void | SetBeard(String name) |  | 
| void | SetHair(String hair) |  | 
| void | SetPlaceMode([`PieceTable`](./PieceTable.md) buildPieces) |  | 
| void | SetupVisEquipment([`VisEquipment`](./VisEquipment.md) visEq, Boolean isRagdoll) |  | 
| void | ShowHandItems() |  | 
| void | Start() |  | 
| Boolean | StartAttack([`Character`](./Character.md) target, Boolean secondaryAttack) |  | 
| Boolean | ToggleEquiped(ItemData item) |  | 
| void | UnequipAllItems() |  | 
| void | UnequipItem(ItemData item, Boolean triggerEquipEffects = True) |  | 
| void | UseItem([`Inventory`](./Inventory.md) inventory, ItemData item, Boolean fromInventoryGui) |  | 
| Boolean | UseMeleeCamera() |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_animatorTagAttack |  | 


