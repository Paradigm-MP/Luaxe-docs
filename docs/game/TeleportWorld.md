## `TeleportWorld`

```csharp
public class TeleportWorld
    : MonoBehaviour, Hoverable, Interactable, TextReceiver

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_activationRange |  | 
| Color | m_colorTargetfound |  | 
| Color | m_colorUnconnected |  | 
| [EffectList](./EffectList.md) | m_connected |  | 
| Single | m_exitDistance |  | 
| MeshRenderer | m_model |  | 
| Transform | m_proximityRoot |  | 
| [EffectFade](./EffectFade.md) | m_target_found |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| String | GetText() |  | 
| Boolean | Interact(`Humanoid` human, `Boolean` hold) |  | 
| void | SetText(`String` text) |  | 
| void | Teleport(`Player` player) |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


