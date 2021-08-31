## `WearNTear`

```csharp
public class WearNTear
    : MonoBehaviour, IDestructible

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_autoCreateFragments |  | 
| GameObject | m_broken |  | 
| Vector3 | m_comOffset |  | 
| DamageModifiers | m_damages |  | 
| [EffectList](./EffectList.md) | m_destroyedEffect |  | 
| Single | m_destroyNoise |  | 
| GameObject[] | m_fragmentRoots |  | 
| Single | m_health |  | 
| [EffectList](./EffectList.md) | m_hitEffect |  | 
| Single | m_hitNoise |  | 
| MaterialType | m_materialType |  | 
| GameObject | m_new |  | 
| Boolean | m_noRoofWear |  | 
| Boolean | m_noSupportWear |  | 
| Action | m_onDamaged |  | 
| Action | m_onDestroyed |  | 
| Boolean | m_supports |  | 
| [EffectList](./EffectList.md) | m_switchEffect |  | 
| GameObject | m_wet |  | 
| GameObject | m_worn |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | ApplyDamage(`Single` damage) |  | 
| void | Damage(`HitData` hit) |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 
| Single | GetHealthPercentage() |  | 
| void | Highlight() |  | 
| void | OnPlaced() |  | 
| void | Remove() |  | 
| Boolean | Repair() |  | 
| void | UpdateWear() |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_randomInitialDamage |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;WearNTear&gt; | GetAllInstaces() |  | 


