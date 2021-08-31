## `Fireplace`

```csharp
public class Fireplace
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_checkTerrainOffset |  | 
| Single | m_coverCheckOffset |  | 
| GameObject | m_enabledObject |  | 
| GameObject | m_enabledObjectHigh |  | 
| GameObject | m_enabledObjectLow |  | 
| [ItemDrop](./ItemDrop.md) | m_fireworkItem |  | 
| Int32 | m_fireworkItems |  | 
| GameObject | m_fireworks |  | 
| [EffectList](./EffectList.md) | m_fuelAddedEffects |  | 
| [ItemDrop](./ItemDrop.md) | m_fuelItem |  | 
| Single | m_maxFuel |  | 
| String | m_name |  | 
| GameObject | m_playerBaseObject |  | 
| Single | m_secPerFuel |  | 
| [SmokeSpawner](./SmokeSpawner.md) | m_smokeSpawner |  | 
| Single | m_startFuel |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Awake() |  | 
| Boolean | CanBeRemoved() |  | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact(`Humanoid` user, `Boolean` hold) |  | 
| Boolean | IsBurning() |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


