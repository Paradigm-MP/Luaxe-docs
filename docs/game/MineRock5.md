## `MineRock5`

```csharp
public class MineRock5
    : MonoBehaviour, IDestructible, Hoverable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| DamageModifiers | m_damageModifiers |  | 
| [EffectList](./EffectList.md) | m_destroyedEffect |  | 
| [DropTable](./DropTable.md) | m_dropItems |  | 
| Single | m_health |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| Int32 | m_minToolTier |  | 
| String | m_name |  | 
| Boolean | m_supportCheck |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Damage(`HitData` hit) |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 


