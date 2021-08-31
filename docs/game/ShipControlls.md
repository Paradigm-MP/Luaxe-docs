## `ShipControlls`

```csharp
public class ShipControlls
    : MonoBehaviour, Interactable, Hoverable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | m_attachAnimation |  | 
| `Transform` | m_attachPoint |  | 
| `Vector3` | m_detachOffset |  | 
| `String` | m_hoverText |  | 
| `Single` | m_maxUseRange |  | 
| `Ship` | m_ship |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Ship` | GetShip() |  | 
| `Boolean` | HaveValidUser() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` repeat) |  | 
| `Boolean` | IsLocalUser() |  | 
| `void` | OnUseStop(`Player` player) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


