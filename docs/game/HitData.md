## `HitData`

```csharp
public class HitData

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `ZDOID` | m_attacker |  | 
| `Single` | m_backstabBonus |  | 
| `Boolean` | m_blockable |  | 
| `DamageTypes` | m_damage |  | 
| `Vector3` | m_dir |  | 
| `Boolean` | m_dodgeable |  | 
| `Collider` | m_hitCollider |  | 
| `Vector3` | m_point |  | 
| `Single` | m_pushForce |  | 
| `SkillType` | m_skill |  | 
| `Single` | m_staggerMultiplier |  | 
| `String` | m_statusEffect |  | 
| `Int32` | m_toolTier |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | ApplyArmor(`Single` ac) |  | 
| `void` | ApplyModifier(`Single` multiplier) |  | 
| `void` | ApplyResistance(`DamageModifiers` modifiers, `DamageModifier&` significantModifier) |  | 
| `void` | BlockDamage(`Single` damage) |  | 
| `void` | Deserialize(`ZPackage&` pkg) |  | 
| `Character` | GetAttacker() |  | 
| `Single` | GetTotalBlockableDamage() |  | 
| `Single` | GetTotalDamage() |  | 
| `Single` | GetTotalElementalDamage() |  | 
| `Single` | GetTotalPhysicalDamage() |  | 
| `Boolean` | HaveAttacker() |  | 
| `void` | Serialize(`ZPackage&` pkg) |  | 
| `void` | SetAttacker(`Character` attacker) |  | 


