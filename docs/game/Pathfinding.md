## `Pathfinding`

```csharp
public class Pathfinding
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_defaultCost |  | 
| LayerMask | m_layers |  | 
| Single | m_linkCost |  | 
| Single | m_linkWidth |  | 
| Single | m_tileSize |  | 
| Single | m_tileTimeout |  | 
| Single | m_updateInterval |  | 
| Single | m_waterCost |  | 
| LayerMask | m_waterLayers |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | FindValidPoint(`Vector3&` point, `Vector3` center, `Single` range, `AgentType` agentType) |  | 
| Boolean | GetPath(`Vector3` from, `Vector3` to, `List&lt;Vector3&gt;` path, `AgentType` agentType, `Boolean` requireFullPath = False, `Boolean` cleanup = True, `Boolean` havePath = False) |  | 
| Vector3 | GetTilePos(`Vector3Int` id) |  | 
| Boolean | HavePath(`Vector3` from, `Vector3` to, `AgentType` agentType) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Pathfinding](./Pathfinding.md) | instance |  | 


