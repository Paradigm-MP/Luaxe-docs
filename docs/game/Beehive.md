## `Beehive`

```csharp
public class Beehive
    : MonoBehaviour, Hoverable, Interactable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| GameObject | m_beeEffect |  | 
| Biome | m_biome |  | 
| Transform | m_coverPoint |  | 
| [ItemDrop](./ItemDrop.md) | m_honeyItem |  | 
| Single | m_maxCover |  | 
| Int32 | m_maxHoney |  | 
| String | m_name |  | 
| Single | m_secPerUnit |  | 
| [EffectList](./EffectList.md) | m_spawnEffect |  | 
| Transform | m_spawnPoint |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) character, Boolean repeat) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


