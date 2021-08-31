## `Destructible`

```csharp
public class Destructible
    : MonoBehaviour, IDestructible

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_autoCreateFragments |  | 
| DamageModifiers | m_damages |  | 
| [EffectList](./EffectList.md) | m_destroyedEffect |  | 
| Single | m_destroyNoise |  | 
| [DestructibleType](./DestructibleType.md) | m_destructibleType |  | 
| Single | m_health |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| Single | m_hitNoise |  | 
| Single | m_minDamageTreshold |  | 
| Int32 | m_minToolTier |  | 
| Action | m_onDamaged |  | 
| Action | m_onDestroyed |  | 
| GameObject | m_spawnWhenDestroyed |  | 
| Single | m_ttl |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Damage(`HitData` hit) |  | 
| void | Destroy() |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 
| GameObject | GetParentObject() |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | CreateFragments(`GameObject` rootObject, `Boolean` visibleOnly = True) |  | 


