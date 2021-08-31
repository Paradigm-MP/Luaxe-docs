## `HitArea`

```csharp
public class HitArea
    : MonoBehaviour, IDestructible

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_health |  | 
| `Action<HitData, HitArea>` | m_onHit |  | 
| `GameObject` | m_parentObject |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Damage(`HitData` hit) |  | 
| `DestructibleType` | GetDestructibleType() |  | 


