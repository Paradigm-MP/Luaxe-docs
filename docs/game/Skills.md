## `Skills`

```csharp
public class Skills
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_DeathLowerFactor |  | 
| `List<SkillDef>` | m_skills |  | 
| `Single` | m_totalSkillCap |  | 
| `Boolean` | m_useSkillCap |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Awake() |  | 
| `void` | CheatRaiseSkill(`String` name, `Single` value) |  | 
| `void` | CheatResetSkill(`String` name) |  | 
| `void` | Clear() |  | 
| `Single` | GetRandomSkillFactor(`SkillType` skillType) |  | 
| `void` | GetRandomSkillRange(`Single&` min, `Single&` max, `SkillType` skillType) |  | 
| `Single` | GetSkillFactor(`SkillType` skillType) |  | 
| `List<Skill>` | GetSkillList() |  | 
| `Single` | GetTotalSkill() |  | 
| `Single` | GetTotalSkillCap() |  | 
| `void` | Load(`ZPackage` pkg) |  | 
| `void` | LowerAllSkills(`Single` factor) |  | 
| `void` | OnDeath() |  | 
| `void` | RaiseSkill(`SkillType` skillType, `Single` factor = 1) |  | 
| `void` | ResetSkill(`SkillType` skillType) |  | 
| `void` | Save(`ZPackage` pkg) |  | 


Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_maxSkillLevel |  | 
| `Single` | m_skillCurve |  | 


