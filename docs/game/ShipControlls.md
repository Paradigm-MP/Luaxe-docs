## `ShipControlls`

```csharp
public class ShipControlls
    : MonoBehaviour, Interactable, Hoverable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| String | m_attachAnimation |  | 
| Transform | m_attachPoint |  | 
| Vector3 | m_detachOffset |  | 
| String | m_hoverText |  | 
| Single | m_maxUseRange |  | 
| [Ship](./Ship.md) | m_ship |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| [Ship](./Ship.md) | GetShip() |  | 
| Boolean | HaveValidUser() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) character, Boolean repeat) |  | 
| Boolean | IsLocalUser() |  | 
| void | OnUseStop([`Player`](./Player.md) player) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


