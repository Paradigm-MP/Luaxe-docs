## `ToggleSwitch`

```csharp
public class ToggleSwitch
    : MonoBehaviour, Interactable, Hoverable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Material | m_disableMaterial |  | 
| Material | m_enableMaterial |  | 
| String | m_hoverText |  | 
| String | m_name |  | 
| Action&lt;ToggleSwitch, Humanoid&gt; | m_onUse |  | 
| MeshRenderer | m_renderer |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact(`Humanoid` character, `Boolean` hold) |  | 
| void | SetState(`Boolean` enabled) |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


