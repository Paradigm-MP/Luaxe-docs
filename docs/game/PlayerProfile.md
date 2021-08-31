## `PlayerProfile`

```csharp
public class PlayerProfile

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| PlayerStats | m_playerStats |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | ClearCustomSpawnPoint() |  | 
| void | ClearLoguoutPoint() |  | 
| Vector3 | GetCustomSpawnPoint() |  | 
| Vector3 | GetDeathPoint() |  | 
| String | GetFilename() |  | 
| Vector3 | GetHomePoint() |  | 
| Vector3 | GetLogoutPoint() |  | 
| Byte[] | GetMapData() |  | 
| String | GetName() |  | 
| Int64 | GetPlayerID() |  | 
| Boolean | HaveCustomSpawnPoint() |  | 
| Boolean | HaveDeathPoint() |  | 
| Boolean | HaveIncompatiblPlayerData() |  | 
| Boolean | HaveLogoutPoint() |  | 
| Boolean | Load() |  | 
| void | LoadPlayerData(`Player` player) |  | 
| Boolean | Save() |  | 
| void | SaveLogoutPoint() |  | 
| void | SavePlayerData(`Player` player) |  | 
| void | SetCustomSpawnPoint(`Vector3` point) |  | 
| void | SetDeathPoint(`Vector3` point) |  | 
| void | SetHomePoint(`Vector3` point) |  | 
| void | SetLogoutPoint(`Vector3` point) |  | 
| void | SetMapData(`Byte[]` data) |  | 
| void | SetName(`String` name) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Vector3 | m_originalSpawnPoint |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;PlayerProfile&gt; | GetAllPlayerProfiles() |  | 
| Boolean | HaveProfile(`String` name) |  | 
| void | RemoveProfile(`String` name) |  | 


