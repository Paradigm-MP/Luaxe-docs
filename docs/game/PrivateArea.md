## `PrivateArea`

```csharp
public class PrivateArea
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `EffectList` | m_activateEffect |  | 
| `EffectList` | m_addPermittedEffect |  | 
| `CircleProjector` | m_areaMarker |  | 
| `GameObject` | m_connectEffect |  | 
| `EffectList` | m_deactivateEffect |  | 
| `GameObject` | m_enabledEffect |  | 
| `EffectList` | m_flashEffect |  | 
| `GameObject` | m_inRangeEffect |  | 
| `MeshRenderer` | m_model |  | 
| `String` | m_name |  | 
| `Single` | m_radius |  | 
| `EffectList` | m_removedPermittedEffect |  | 
| `Single` | m_updateConnectionsInterval |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` human, `Boolean` hold) |  | 
| `Boolean` | IsEnabled() |  | 
| `void` | PokeAllAreasInRange() |  | 
| `void` | PokeConnectionEffects() |  | 
| `void` | Setup(`String` name) |  | 
| `void` | ShowAreaMarker() |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | CheckAccess(`Vector3` point, `Single` radius = 0, `Boolean` flash = True, `Boolean` wardCheck = False) |  | 
| `Boolean` | CheckInPrivateArea(`Vector3` point, `Boolean` flash = False) |  | 

