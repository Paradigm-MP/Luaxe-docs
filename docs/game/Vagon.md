## `Vagon`

```csharp
public class Vagon
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Vector3` | m_attachOffset |  | 
| `Transform` | m_attachPoint |  | 
| `Single` | m_audioChangeSpeed |  | 
| `Single` | m_baseMass |  | 
| `Single` | m_breakForce |  | 
| `Container` | m_container |  | 
| `Single` | m_detachDistance |  | 
| `Single` | m_itemWeightMassFactor |  | 
| `Vector3` | m_lineAttachOffset |  | 
| `Transform` | m_lineAttachPoints0 |  | 
| `Transform` | m_lineAttachPoints1 |  | 
| `List<LoadData>` | m_loadVis |  | 
| `Single` | m_maxPitch |  | 
| `Single` | m_maxPitchVel |  | 
| `Single` | m_maxVol |  | 
| `Single` | m_maxVolVel |  | 
| `Single` | m_minPitch |  | 
| `String` | m_name |  | 
| `Single` | m_spring |  | 
| `Single` | m_springDamping |  | 
| `AudioSource[]` | m_wheelLoops |  | 
| `Rigidbody[]` | m_wheels |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` hold) |  | 
| `Boolean` | InUse() |  | 
| `Boolean` | IsAttached(`Character` character) |  | 
| `void` | RPC_RequestOwn(`Int64` sender) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


