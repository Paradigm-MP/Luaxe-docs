## `StatusEffect`

```csharp
public class StatusEffect
    : ScriptableObject

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| String | m_activationAnimation |  | 
| StatusAttribute | m_attributes |  | 
| String | m_category |  | 
| [Character](./Character.md) | m_character |  | 
| Single | m_cooldown |  | 
| Boolean | m_cooldownIcon |  | 
| Boolean | m_flashIcon |  | 
| Sprite | m_icon |  | 
| Boolean | m_isNew |  | 
| String | m_name |  | 
| Single | m_repeatInterval |  | 
| String | m_repeatMessage |  | 
| MessageType | m_repeatMessageType |  | 
| GameObject[] | m_startEffectInstances |  | 
| [EffectList](./EffectList.md) | m_startEffects |  | 
| String | m_startMessage |  | 
| MessageType | m_startMessageType |  | 
| [EffectList](./EffectList.md) | m_stopEffects |  | 
| String | m_stopMessage |  | 
| MessageType | m_stopMessageType |  | 
| Single | m_time |  | 
| String | m_tooltip |  | 
| Single | m_ttl |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | CanAdd(`Character` character) |  | 
| [StatusEffect](./StatusEffect.md) | Clone() |  | 
| Single | GetDuration() |  | 
| String | GetIconText() |  | 
| Single | GetRemaningTime() |  | 
| String | GetTooltipString() |  | 
| Boolean | HaveAttribute(`StatusAttribute` value) |  | 
| Boolean | IsDone() |  | 
| void | ModifyAttack(`SkillType` skill, `HitData&` hitData) |  | 
| void | ModifyDamageMods(`DamageModifiers&` modifiers) |  | 
| void | ModifyHealthRegen(`Single&` regenMultiplier) |  | 
| void | ModifyJumpStaminaUsage(`Single` baseStaminaUse, `Single&` staminaUse) |  | 
| void | ModifyMaxCarryWeight(`Single` baseLimit, `Single&` limit) |  | 
| void | ModifyNoise(`Single` baseNoise, `Single&` noise) |  | 
| void | ModifyRaiseSkill(`SkillType` skill, `Single&` value) |  | 
| void | ModifyRunStaminaDrain(`Single` baseDrain, `Single&` drain) |  | 
| void | ModifySpeed(`Single&` speed) |  | 
| void | ModifyStaminaRegen(`Single&` staminaRegen) |  | 
| void | ModifyStealth(`Single` baseStealth, `Single&` stealth) |  | 
| void | OnDamaged(`HitData` hit, `Character` attacker) |  | 
| void | OnDestroy() |  | 
| void | ResetTime() |  | 
| void | SetAttacker(`Character` attacker) |  | 
| void | Setup(`Character` character) |  | 
| void | Stop() |  | 
| void | TriggerStartEffects() |  | 
| void | UpdateStatusEffect(`Single` dt) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetTimeString(`Single` time, `Boolean` sufix = False, `Boolean` alwaysShowMinutes = False) |  | 


