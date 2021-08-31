## `MineRock`

```csharp
public class MineRock
    : MonoBehaviour, IDestructible, Hoverable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| GameObject | m_areaRoot |  | 
| GameObject | m_baseModel |  | 
| DamageModifiers | m_damageModifiers |  | 
| [EffectList](./EffectList.md) | m_destroyedEffect |  | 
| [DropTable](./DropTable.md) | m_dropItems |  | 
| Single | m_health |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| Int32 | m_minToolTier |  | 
| String | m_name |  | 
| Action | m_onHit |  | 
| Boolean | m_removeWhenDestroyed |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Damage(`HitData` hit) |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 


