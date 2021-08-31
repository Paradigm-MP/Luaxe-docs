## `SteamManager2`

```csharp
public class SteamManager2
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_bInitialized |  | 
| SteamAPIWarningMessageHook_t | m_SteamAPIWarningMessageHook |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Awake() |  | 
| void | OnDestroy() |  | 
| void | OnEnable() |  | 
| void | Update() |  | 


Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | s_EverInitialized |  | 
| [SteamManager2](./SteamManager2.md) | s_instance |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | Initialized |  | 
| [SteamManager2](./SteamManager2.md) | Instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | SteamAPIDebugTextHook(`Int32` nSeverity, `StringBuilder` pchDebugText) |  | 


