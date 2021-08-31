## `GameCamera`

```csharp
public class GameCamera
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Vector3 | m_3rdCombatOffset |  | 
| Vector3 | m_3rdOffset |  | 
| LayerMask | m_blockCameraMask |  | 
| Single | m_flyingDistance |  | 
| Single | m_fov |  | 
| Vector3 | m_fpsOffset |  | 
| Single | m_freeFlyMaxFov |  | 
| Single | m_freeFlyMinFov |  | 
| Single | m_inventoryOffset |  | 
| Single | m_maxDistance |  | 
| Single | m_maxDistanceBoat |  | 
| Single | m_minDistance |  | 
| Single | m_minWaterDistance |  | 
| Single | m_nearClipPlaneMax |  | 
| Single | m_nearClipPlaneMin |  | 
| Single | m_raycastWidth |  | 
| Single | m_shakeFreq |  | 
| Single | m_shakeMovement |  | 
| Camera | m_skyCamera |  | 
| Single | m_smoothness |  | 
| Boolean | m_smoothYTilt |  | 
| Single | m_tiltSmoothnessShipMax |  | 
| Single | m_tiltSmoothnessShipMin |  | 
| Single | m_zoomSens |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AddShake(Vector3 point, Single range, Single strength, Boolean continous) |  | 
| void | ApplySettings() |  | 
| Single | GetFreeFlySmoothness() |  | 
| void | SetFreeFlySmoothness(Single smooth) |  | 
| void | ToggleFreeFly() |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [GameCamera](./GameCamera.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | InFreeFly() |  | 
| void | ScreenShot() |  | 


