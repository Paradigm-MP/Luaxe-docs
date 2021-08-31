## `RandEventSystem`

```csharp
public class RandEventSystem
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_eventChance |  | 
| `Single` | m_eventIntervalMin |  | 
| `List<RandomEvent>` | m_events |  | 
| `Single` | m_randomEventRange |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `RandomEvent` | GetActiveEvent() |  | 
| `RandomEvent` | GetCurrentRandomEvent() |  | 
| `List<SpawnData>` | GetCurrentSpawners() |  | 
| `String` | GetEnvOverride() |  | 
| `String` | GetMusicOverride() |  | 
| `Boolean` | HaveEvent(`String` name) |  | 
| `void` | Load(`BinaryReader` reader, `Int32` version) |  | 
| `void` | PrepareSave() |  | 
| `void` | ResetRandomEvent() |  | 
| `void` | SaveAsync(`BinaryWriter` writer) |  | 
| `void` | SetRandomEventByName(`String` name, `Vector3` pos) |  | 
| `void` | StartRandomEvent() |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `RandEventSystem` | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | HaveActiveEvent() |  | 
| `Boolean` | InEvent() |  | 


