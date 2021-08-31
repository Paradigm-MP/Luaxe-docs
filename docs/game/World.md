## `World`

```csharp
public class World

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_loadError |  | 
| Boolean | m_menu |  | 
| String | m_name |  | 
| Int32 | m_seed |  | 
| String | m_seedName |  | 
| Int64 | m_uid |  | 
| Boolean | m_versionError |  | 
| Int32 | m_worldGenVersion |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetDBPath() |  | 
| String | GetMetaPath() |  | 
| void | SaveWorldMetaData() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GenerateSeed() |  | 
| [World](./World.md) | GetCreateWorld(`String` name) |  | 
| [World](./World.md) | GetDevWorld() |  | 
| [World](./World.md) | GetEditorWorld() |  | 
| [World](./World.md) | GetMenuWorld() |  | 
| String | GetMetaPath(`String` name) |  | 
| List&lt;World&gt; | GetWorldList() |  | 
| Boolean | HaveWorld(`String` name) |  | 
| [World](./World.md) | LoadWorld(`String` name) |  | 
| void | RemoveWorld(`String` name) |  | 


