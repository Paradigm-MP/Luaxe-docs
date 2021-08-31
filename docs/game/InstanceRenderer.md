## `InstanceRenderer`

```csharp
public class InstanceRenderer
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_frustumCull |  | 
| Single | m_lodMaxDistance |  | 
| Single | m_lodMinDistance |  | 
| Material | m_material |  | 
| Mesh | m_mesh |  | 
| Vector3 | m_scale |  | 
| ShadowCastingMode | m_shadowCasting |  | 
| Boolean | m_useLod |  | 
| Boolean | m_useXZLodDistance |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AddInstance(`Vector3` pos, `Quaternion` rot, `Single` scale) |  | 
| void | AddInstance(`Vector3` pos, `Quaternion` rot) |  | 
| void | AddInstance(`Matrix4x4` m) |  | 
| void | Clear() |  | 
| void | SetInstance(`Int32` index, `Vector3` pos, `Quaternion` rot, `Single` scale) |  | 
| void | SetInstances(`List&lt;Transform&gt;` transforms, `Boolean` faceCamera = False) |  | 
| void | SetInstancesBillboard(`List&lt;Vector4&gt;` points) |  | 


