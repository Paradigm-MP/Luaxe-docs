## `TreeLog`

```csharp
public class TreeLog
    : MonoBehaviour, IDestructible

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| DamageModifiers | m_damages |  | 
| [EffectList](./EffectList.md) | m_destroyedEffect |  | 
| [DropTable](./DropTable.md) | m_dropWhenDestroyed |  | 
| Single | m_health |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| Single | m_hitNoise |  | 
| Int32 | m_minToolTier |  | 
| Single | m_spawnDistance |  | 
| Transform[] | m_subLogPoints |  | 
| GameObject | m_subLogPrefab |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Damage([`HitData`](./HitData.md) hit) |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 


