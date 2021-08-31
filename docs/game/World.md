## `World`

```csharp
public class World

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | m_loadError |  | 
| `Boolean` | m_menu |  | 
| `String` | m_name |  | 
| `Int32` | m_seed |  | 
| `String` | m_seedName |  | 
| `Int64` | m_uid |  | 
| `Boolean` | m_versionError |  | 
| `Int32` | m_worldGenVersion |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetDBPath() |  | 
| `String` | GetMetaPath() |  | 
| `void` | SaveWorldMetaData() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GenerateSeed() |  | 
| `World` | GetCreateWorld(`String` name) |  | 
| `World` | GetDevWorld() |  | 
| `World` | GetEditorWorld() |  | 
| `World` | GetMenuWorld() |  | 
| `String` | GetMetaPath(`String` name) |  | 
| `List<World>` | GetWorldList() |  | 
| `Boolean` | HaveWorld(`String` name) |  | 
| `World` | LoadWorld(`String` name) |  | 
| `void` | RemoveWorld(`String` name) |  | 


