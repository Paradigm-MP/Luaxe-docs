## `Game`

```csharp
public class Game
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_consolePrefab |  | 
| `GameObject` | m_playerPrefab |  | 
| `GameObject` | m_portalPrefab |  | 
| `String` | m_StartLocation |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | DiscoverClosestLocation(`String` name, `Vector3` point, `String` pinName, `Int32` pinType) |  | 
| `Single` | GetDifficultyDamageScale(`Vector3` pos) |  | 
| `Single` | GetDifficultyHealthScale(`Vector3` pos) |  | 
| `PlayerProfile` | GetPlayerProfile() |  | 
| `Boolean` | IsShuttingDown() |  | 
| `void` | Logout() |  | 
| `void` | Ping() |  | 
| `void` | RequestRespawn(`Single` delay) |  | 
| `void` | SetForcePlayerDifficulty(`Int32` players) |  | 
| `Boolean` | WaitingForRespawn() |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `Game` | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | SetProfile(`String` filename) |  | 


