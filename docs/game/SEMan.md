## `SEMan`

```csharp
public class SEMan

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;StatusEffect&gt; | m_statusEffects |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [StatusEffect](./StatusEffect.md) | AddStatusEffect(`String` name, `Boolean` resetTime = False) |  | 
| [StatusEffect](./StatusEffect.md) | AddStatusEffect(`StatusEffect` statusEffect, `Boolean` resetTime = False) |  | 
| void | ApplyDamageMods(`DamageModifiers&` mods) |  | 
| void | ApplyStatusEffectSpeedMods(`Single&` speed) |  | 
| void | GetHUDStatusEffects(`List&lt;StatusEffect&gt;` effects) |  | 
| [StatusEffect](./StatusEffect.md) | GetStatusEffect(`String` name) |  | 
| List&lt;StatusEffect&gt; | GetStatusEffects() |  | 
| Boolean | HaveStatusAttribute(`StatusAttribute` value) |  | 
| Boolean | HaveStatusEffect(`String` name) |  | 
| Boolean | HaveStatusEffectCategory(`String` cat) |  | 
| void | ModifyAttack(`SkillType` skill, `HitData&` hitData) |  | 
| void | ModifyHealthRegen(`Single&` regenMultiplier) |  | 
| void | ModifyJumpStaminaUsage(`Single` baseStaminaUse, `Single&` staminaUse) |  | 
| void | ModifyMaxCarryWeight(`Single` baseLimit, `Single&` limit) |  | 
| void | ModifyNoise(`Single` baseNoise, `Single&` noise) |  | 
| void | ModifyRaiseSkill(`SkillType` skill, `Single&` multiplier) |  | 
| void | ModifyRunStaminaDrain(`Single` baseDrain, `Single&` drain) |  | 
| void | ModifyStaminaRegen(`Single&` staminaMultiplier) |  | 
| void | ModifyStealth(`Single` baseStealth, `Single&` stealth) |  | 
| void | OnDamaged(`HitData` hit, `Character` attacker) |  | 
| void | OnDestroy() |  | 
| Boolean | RemoveStatusEffect(`StatusEffect` se, `Boolean` quiet = False) |  | 
| Boolean | RemoveStatusEffect(`String` name, `Boolean` quiet = False) |  | 
| void | Update(`Single` dt) |  | 


