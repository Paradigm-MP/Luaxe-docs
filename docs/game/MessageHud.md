## `MessageHud`

```csharp
public class MessageHud
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| GameObject | m_biomeFoundPrefab |  | 
| GameObject | m_biomeFoundStinger |  | 
| Int32 | m_maxLogMessages |  | 
| Int32 | m_maxUnlockMessages |  | 
| Int32 | m_maxUnlockMsgSpace |  | 
| Text | m_messageCenterText |  | 
| Image | m_messageIcon |  | 
| Text | m_messageText |  | 
| GameObject | m_unlockMsgPrefab |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;String&gt; | GetLog() |  | 
| void | MessageAll(MessageType type, String text) |  | 
| void | QueueUnlockMsg(Sprite icon, String topic, String description) |  | 
| void | ShowBiomeFoundMsg(String text, Boolean playStinger) |  | 
| void | ShowMessage(MessageType type, String text, Int32 amount = 0, Sprite icon = null) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [MessageHud](./MessageHud.md) | instance |  | 


