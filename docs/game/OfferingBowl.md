## `OfferingBowl`

```csharp
public class OfferingBowl
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `ItemDrop` | m_bossItem |  | 
| `Int32` | m_bossItems |  | 
| `GameObject` | m_bossPrefab |  | 
| `EffectList` | m_fuelAddedEffects |  | 
| `ItemDrop` | m_itemPrefab |  | 
| `Transform` | m_itemSpawnPoint |  | 
| `Single` | m_itemstandMaxRange |  | 
| `String` | m_itemStandPrefix |  | 
| `String` | m_name |  | 
| `String` | m_setGlobalKey |  | 
| `Single` | m_spawnBossDelay |  | 
| `EffectList` | m_spawnBossDoneffects |  | 
| `Single` | m_spawnBossMaxDistance |  | 
| `Single` | m_spawnBossMaxYDistance |  | 
| `EffectList` | m_spawnBossStartEffects |  | 
| `Single` | m_spawnOffset |  | 
| `Boolean` | m_useItemStands |  | 
| `String` | m_useItemText |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` user, `Boolean` hold) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 

