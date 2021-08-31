## `CharacterAnimEvent`

```csharp
public class CharacterAnimEvent
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_bodyLookWeight |  | 
| `Single` | m_eyeLookWeight |  | 
| `Transform[]` | m_eyes |  | 
| `Foot[]` | m_feets |  | 
| `Boolean` | m_femaleHack |  | 
| `Single` | m_femaleOffset |  | 
| `Single` | m_footDownMax |  | 
| `Boolean` | m_footIK |  | 
| `Single` | m_footOffset |  | 
| `Single` | m_footStepHeight |  | 
| `Single` | m_headLookWeight |  | 
| `Boolean` | m_headRotation |  | 
| `Transform` | m_leftShoulder |  | 
| `Transform` | m_lookAt |  | 
| `Single` | m_lookClamp |  | 
| `Single` | m_lookWeight |  | 
| `Single` | m_maleOffset |  | 
| `Transform` | m_rightShoulder |  | 
| `Single` | m_stabalizeDistance |  | 
| `Boolean` | m_useFeetValues |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | CanChain() |  | 
| `void` | Chain() |  | 
| `void` | DodgeMortal() |  | 
| `void` | FindJoints() |  | 
| `void` | FootStep(`AnimationEvent` e) |  | 
| `void` | FreezeFrame(`Single` delay) |  | 
| `void` | GPower() |  | 
| `void` | Hit() |  | 
| `void` | OnAttackTrigger() |  | 
| `void` | ResetChain() |  | 
| `void` | Speed(`Single` speedScale) |  | 
| `void` | Stop(`AnimationEvent` e) |  | 
| `void` | TrailOff() |  | 
| `void` | TrailOn() |  | 


