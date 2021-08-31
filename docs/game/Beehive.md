## `Beehive`

```csharp
public class Beehive
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_beeEffect |  | 
| `Biome` | m_biome |  | 
| `Transform` | m_coverPoint |  | 
| `ItemDrop` | m_honeyItem |  | 
| `Single` | m_maxCover |  | 
| `Int32` | m_maxHoney |  | 
| `String` | m_name |  | 
| `Single` | m_secPerUnit |  | 
| `EffectList` | m_spawnEffect |  | 
| `Transform` | m_spawnPoint |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` repeat) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


