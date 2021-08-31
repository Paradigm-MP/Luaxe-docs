## `RandomEvent`

```csharp
public class RandomEvent

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Biome | m_biome |  | 
| Single | m_duration |  | 
| Boolean | m_enabled |  | 
| String | m_endMessage |  | 
| String | m_forceEnvironment |  | 
| String | m_forceMusic |  | 
| String | m_name |  | 
| Boolean | m_nearBaseOnly |  | 
| List&lt;String&gt; | m_notRequiredGlobalKeys |  | 
| Boolean | m_pauseIfNoPlayerInArea |  | 
| Vector3 | m_pos |  | 
| Boolean | m_random |  | 
| List&lt;String&gt; | m_requiredGlobalKeys |  | 
| List&lt;SpawnData&gt; | m_spawn |  | 
| String | m_startMessage |  | 
| Single | m_time |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [RandomEvent](./RandomEvent.md) | Clone() |  | 
| String | GetHudText() |  | 
| Single | GetTime() |  | 
| Boolean | InEventBiome() |  | 
| void | OnActivate() |  | 
| void | OnDeactivate(`Boolean` end) |  | 
| void | OnStart() |  | 
| void | OnStop() |  | 
| Boolean | Update(`Boolean` server, `Boolean` active, `Boolean` playerInArea, `Single` dt) |  | 


