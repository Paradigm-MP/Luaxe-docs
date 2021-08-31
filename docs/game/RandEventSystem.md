## `RandEventSystem`

```csharp
public class RandEventSystem
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_eventChance |  | 
| Single | m_eventIntervalMin |  | 
| List&lt;RandomEvent&gt; | m_events |  | 
| Single | m_randomEventRange |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [RandomEvent](./RandomEvent.md) | GetActiveEvent() |  | 
| [RandomEvent](./RandomEvent.md) | GetCurrentRandomEvent() |  | 
| List&lt;SpawnData&gt; | GetCurrentSpawners() |  | 
| String | GetEnvOverride() |  | 
| String | GetMusicOverride() |  | 
| Boolean | HaveEvent(`String` name) |  | 
| void | Load(`BinaryReader` reader, `Int32` version) |  | 
| void | PrepareSave() |  | 
| void | ResetRandomEvent() |  | 
| void | SaveAsync(`BinaryWriter` writer) |  | 
| void | SetRandomEventByName(`String` name, `Vector3` pos) |  | 
| void | StartRandomEvent() |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [RandEventSystem](./RandEventSystem.md) | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | HaveActiveEvent() |  | 
| Boolean | InEvent() |  | 


