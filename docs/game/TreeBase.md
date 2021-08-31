## `TreeBase`

```csharp
public class TreeBase
    : MonoBehaviour, IDestructible

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `DamageModifiers` | m_damageModifiers |  | 
| `EffectList` | m_destroyedEffect |  | 
| `DropTable` | m_dropWhenDestroyed |  | 
| `Single` | m_health |  | 
| `EffectList` | m_hitEffect |  | 
| `GameObject` | m_logPrefab |  | 
| `Transform` | m_logSpawnPoint |  | 
| `Int32` | m_minToolTier |  | 
| `EffectList` | m_respawnEffect |  | 
| `Single` | m_spawnYOffset |  | 
| `Single` | m_spawnYStep |  | 
| `GameObject` | m_stubPrefab |  | 
| `GameObject` | m_trunk |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Damage(`HitData` hit) |  | 
| `DestructibleType` | GetDestructibleType() |  | 
| `void` | Grow() |  | 


