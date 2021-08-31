## `Destructible`

```csharp
public class Destructible
    : MonoBehaviour, IDestructible

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | m_autoCreateFragments |  | 
| `DamageModifiers` | m_damages |  | 
| `EffectList` | m_destroyedEffect |  | 
| `Single` | m_destroyNoise |  | 
| `DestructibleType` | m_destructibleType |  | 
| `Single` | m_health |  | 
| `EffectList` | m_hitEffect |  | 
| `Single` | m_hitNoise |  | 
| `Single` | m_minDamageTreshold |  | 
| `Int32` | m_minToolTier |  | 
| `Action` | m_onDamaged |  | 
| `Action` | m_onDestroyed |  | 
| `GameObject` | m_spawnWhenDestroyed |  | 
| `Single` | m_ttl |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Damage(`HitData` hit) |  | 
| `void` | Destroy() |  | 
| `DestructibleType` | GetDestructibleType() |  | 
| `GameObject` | GetParentObject() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | CreateFragments(`GameObject` rootObject, `Boolean` visibleOnly = True) |  | 


