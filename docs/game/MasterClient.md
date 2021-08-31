## `MasterClient`

```csharp
public class MasterClient

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Action&lt;List&lt;ServerData&gt;&gt; | m_onServerList |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Dispose() |  | 
| Int32 | GetServerListRevision() |  | 
| List&lt;ServerData&gt; | GetServers() |  | 
| Boolean | GetServers(List&lt;ServerData&gt; servers) |  | 
| Boolean | IsConnected() |  | 
| void | RegisterServer(String name, String host, Int32 port, Boolean password, Boolean upnp, Int64 worldUID, String version) |  | 
| void | RequestServerlist() |  | 
| void | SetNameFilter(String filter) |  | 
| void | UnregisterServer() |  | 
| void | Update(Single dt) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [MasterClient](./MasterClient.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Initialize() |  | 


