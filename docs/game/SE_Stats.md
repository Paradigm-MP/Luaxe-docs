## `SE_Stats`

```csharp
public class SE_Stats
    : StatusEffect

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_addMaxCarryWeight |  | 
| Single | m_damageModifier |  | 
| Single | m_healthOverTime |  | 
| Single | m_healthOverTimeDuration |  | 
| Single | m_healthOverTimeInterval |  | 
| Single | m_healthPerTick |  | 
| Single | m_healthPerTickMinHealthPercentage |  | 
| Single | m_healthRegenMultiplier |  | 
| Single | m_jumpStaminaUseModifier |  | 
| SkillType | m_modifyAttackSkill |  | 
| List&lt;DamageModPair&gt; | m_mods |  | 
| Single | m_noiseModifier |  | 
| SkillType | m_raiseSkill |  | 
| Single | m_raiseSkillModifier |  | 
| Single | m_runStaminaDrainModifier |  | 
| Single | m_staminaDrainPerSec |  | 
| Single | m_staminaOverTime |  | 
| Single | m_staminaOverTimeDuration |  | 
| Single | m_staminaRegenMultiplier |  | 
| Single | m_stealthModifier |  | 
| Single | m_tickInterval |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetTooltipString() |  | 
| void | ModifyAttack(`SkillType` skill, `HitData&` hitData) |  | 
| void | ModifyDamageMods(`DamageModifiers&` modifiers) |  | 
| void | ModifyHealthRegen(`Single&` regenMultiplier) |  | 
| void | ModifyJumpStaminaUsage(`Single` baseStaminaUse, `Single&` staminaUse) |  | 
| void | ModifyMaxCarryWeight(`Single` baseLimit, `Single&` limit) |  | 
| void | ModifyNoise(`Single` baseNoise, `Single&` noise) |  | 
| void | ModifyRaiseSkill(`SkillType` skill, `Single&` value) |  | 
| void | ModifyRunStaminaDrain(`Single` baseDrain, `Single&` drain) |  | 
| void | ModifyStaminaRegen(`Single&` staminaRegen) |  | 
| void | ModifyStealth(`Single` baseStealth, `Single&` stealth) |  | 
| void | Setup(`Character` character) |  | 
| void | UpdateStatusEffect(`Single` dt) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetDamageModifiersTooltipString(`List&lt;DamageModPair&gt;` mods) |  | 


