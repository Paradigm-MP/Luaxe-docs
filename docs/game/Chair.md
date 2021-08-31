## `Chair`

```csharp
public class Chair
    : MonoBehaviour, Hoverable, Interactable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| String | m_attachAnimation |  | 
| Transform | m_attachPoint |  | 
| Vector3 | m_detachOffset |  | 
| String | m_name |  | 
| Single | m_useDistance |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) human, Boolean hold) |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


