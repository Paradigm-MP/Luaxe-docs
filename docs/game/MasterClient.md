## `MasterClient`

```csharp
public class MasterClient

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Action<List<ServerData>>` | m_onServerList |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Dispose() |  | 
| `Int32` | GetServerListRevision() |  | 
| `List<ServerData>` | GetServers() |  | 
| `Boolean` | GetServers(`List<ServerData>` servers) |  | 
| `Boolean` | IsConnected() |  | 
| `void` | RegisterServer(`String` name, `String` host, `Int32` port, `Boolean` password, `Boolean` upnp, `Int64` worldUID, `String` version) |  | 
| `void` | RequestServerlist() |  | 
| `void` | SetNameFilter(`String` filter) |  | 
| `void` | UnregisterServer() |  | 
| `void` | Update(`Single` dt) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `MasterClient` | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | Initialize() |  | 


