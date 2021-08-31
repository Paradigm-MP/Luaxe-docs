## `Chat`

```csharp
public class Chat
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| RectTransform | m_chatWindow |  | 
| Single | m_hideDelay |  | 
| InputField | m_input |  | 
| GameObject | m_npcTextBase |  | 
| GameObject | m_npcTextBaseLarge |  | 
| Text | m_output |  | 
| GameObject | m_worldTextBase |  | 
| Single | m_worldTextTTL |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | ClearNpcText(`GameObject` talker) |  | 
| void | GetPingWorldTexts(`List&lt;WorldTextInstance&gt;` texts) |  | 
| void | GetShoutWorldTexts(`List&lt;WorldTextInstance&gt;` texts) |  | 
| Boolean | HasFocus() |  | 
| Boolean | IsChatDialogWindowVisible() |  | 
| Boolean | IsDialogVisible(`GameObject` talker) |  | 
| void | OnNewChatMessage(`GameObject` go, `Int64` senderID, `Vector3` pos, `Type` type, `String` user, `String` text) |  | 
| void | SendPing(`Vector3` position) |  | 
| void | SendText(`Type` type, `String` text) |  | 
| void | SetNpcText(`GameObject` talker, `Vector3` offset, `Single` cullDistance, `Single` ttl, `String` topic, `String` text, `Boolean` large) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Chat](./Chat.md) | instance |  | 


