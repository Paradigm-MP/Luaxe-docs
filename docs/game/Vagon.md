## `Vagon`

```csharp
public class Vagon
    : MonoBehaviour, Hoverable, Interactable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Vector3 | m_attachOffset |  | 
| Transform | m_attachPoint |  | 
| Single | m_audioChangeSpeed |  | 
| Single | m_baseMass |  | 
| Single | m_breakForce |  | 
| [Container](./Container.md) | m_container |  | 
| Single | m_detachDistance |  | 
| Single | m_itemWeightMassFactor |  | 
| Vector3 | m_lineAttachOffset |  | 
| Transform | m_lineAttachPoints0 |  | 
| Transform | m_lineAttachPoints1 |  | 
| List&lt;LoadData&gt; | m_loadVis |  | 
| Single | m_maxPitch |  | 
| Single | m_maxPitchVel |  | 
| Single | m_maxVol |  | 
| Single | m_maxVolVel |  | 
| Single | m_minPitch |  | 
| String | m_name |  | 
| Single | m_spring |  | 
| Single | m_springDamping |  | 
| AudioSource[] | m_wheelLoops |  | 
| Rigidbody[] | m_wheels |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) character, Boolean hold) |  | 
| Boolean | InUse() |  | 
| Boolean | IsAttached([`Character`](./Character.md) character) |  | 
| void | RPC_RequestOwn(Int64 sender) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


