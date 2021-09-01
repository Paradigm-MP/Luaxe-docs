## `OfferingBowl`

```csharp
public class OfferingBowl
    : MonoBehaviour, Hoverable, Interactable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [ItemDrop](./ItemDrop.md) | m_bossItem |  | 
| Int32 | m_bossItems |  | 
| GameObject | m_bossPrefab |  | 
| [EffectList](./EffectList.md) | m_fuelAddedEffects |  | 
| [ItemDrop](./ItemDrop.md) | m_itemPrefab |  | 
| Transform | m_itemSpawnPoint |  | 
| Single | m_itemstandMaxRange |  | 
| String | m_itemStandPrefix |  | 
| String | m_name |  | 
| String | m_setGlobalKey |  | 
| Single | m_spawnBossDelay |  | 
| [EffectList](./EffectList.md) | m_spawnBossDoneffects |  | 
| Single | m_spawnBossMaxDistance |  | 
| Single | m_spawnBossMaxYDistance |  | 
| [EffectList](./EffectList.md) | m_spawnBossStartEffects |  | 
| Single | m_spawnOffset |  | 
| Boolean | m_useItemStands |  | 
| String | m_useItemText |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) user, Boolean hold) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


