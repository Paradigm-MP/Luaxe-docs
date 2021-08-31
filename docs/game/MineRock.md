## `MineRock`

```csharp
public class MineRock
    : MonoBehaviour, IDestructible, Hoverable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_areaRoot |  | 
| `GameObject` | m_baseModel |  | 
| `DamageModifiers` | m_damageModifiers |  | 
| `EffectList` | m_destroyedEffect |  | 
| `DropTable` | m_dropItems |  | 
| `Single` | m_health |  | 
| `EffectList` | m_hitEffect |  | 
| `Int32` | m_minToolTier |  | 
| `String` | m_name |  | 
| `Action` | m_onHit |  | 
| `Boolean` | m_removeWhenDestroyed |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Damage(`HitData` hit) |  | 
| `DestructibleType` | GetDestructibleType() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 


