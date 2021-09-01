## `SpawnAbility`

```csharp
public class SpawnAbility
    : MonoBehaviour, IProjectile
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_alertSpawnedCreature |  | 
| Int32 | m_maxSpawned |  | 
| Single | m_maxTargetRange |  | 
| Int32 | m_maxToSpawn |  | 
| Int32 | m_minToSpawn |  | 
| Single | m_projectileAccuracy |  | 
| Single | m_projectileVelocity |  | 
| Boolean | m_snapToTerrain |  | 
| Boolean | m_spawnAtTarget |  | 
| Single | m_spawnDelay |  | 
| [EffectList](./EffectList.md) | m_spawnEffects |  | 
| Single | m_spawnGroundOffset |  | 
| GameObject[] | m_spawnPrefab |  | 
| Single | m_spawnRadius |  | 
| TargetType | m_targetType |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetTooltipString(Int32 itemQuality) |  | 
| void | Setup([`Character`](./Character.md) owner, Vector3 velocity, Single hitNoise, [`HitData`](./HitData.md) hitData, ItemData item) |  | 


