## `TreeBase`

```csharp
public class TreeBase
    : MonoBehaviour, IDestructible

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| DamageModifiers | m_damageModifiers |  | 
| [EffectList](./EffectList.md) | m_destroyedEffect |  | 
| [DropTable](./DropTable.md) | m_dropWhenDestroyed |  | 
| Single | m_health |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| GameObject | m_logPrefab |  | 
| Transform | m_logSpawnPoint |  | 
| Int32 | m_minToolTier |  | 
| [EffectList](./EffectList.md) | m_respawnEffect |  | 
| Single | m_spawnYOffset |  | 
| Single | m_spawnYStep |  | 
| GameObject | m_stubPrefab |  | 
| GameObject | m_trunk |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Damage([`HitData`](./HitData.md) hit) |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 
| void | Grow() |  | 


