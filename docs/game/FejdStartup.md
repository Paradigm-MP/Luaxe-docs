## `FejdStartup`

```csharp
public class FejdStartup
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| GameObject | m_betaText |  | 
| Transform | m_cameraMarkerCharacter |  | 
| Transform | m_cameraMarkerCredits |  | 
| Transform | m_cameraMarkerGame |  | 
| Transform | m_cameraMarkerMain |  | 
| Transform | m_cameraMarkerStart |  | 
| Single | m_cameraMoveSpeed |  | 
| Single | m_cameraMoveSpeedStart |  | 
| GameObject | m_changeEffectPrefab |  | 
| Transform | m_characterPreviewPoint |  | 
| Single | m_characterRotateSpeed |  | 
| Single | m_characterRotateSpeedGamepad |  | 
| GameObject | m_characterSelectScreen |  | 
| Text | m_connectionFailedError |  | 
| GameObject | m_connectionFailedPanel |  | 
| GameObject | m_consolePrefab |  | 
| GameObject | m_createWorldPanel |  | 
| RectTransform | m_creditsList |  | 
| GameObject | m_creditsPanel |  | 
| Single | m_creditsSpeed |  | 
| Button | m_csLeftButton |  | 
| Text | m_csName |  | 
| Button | m_csNewBigButton |  | 
| Button | m_csNewButton |  | 
| Button | m_csNewCharacterDone |  | 
| InputField | m_csNewCharacterName |  | 
| Button | m_csRemoveButton |  | 
| Button | m_csRightButton |  | 
| Button | m_csStartButton |  | 
| GameObject | m_feedbackPrefab |  | 
| InputField | m_filterInputField |  | 
| Toggle | m_friendFilterSwitch |  | 
| GameObject | m_gameMainPrefab |  | 
| Button | m_joinGameButton |  | 
| Int32 | m_joinHostPort |  | 
| InputField | m_joinIPAddress |  | 
| Button | m_joinIPJoinButton |  | 
| GameObject | m_joinIPPanel |  | 
| GameObject | m_loading |  | 
| GameObject | m_mainCamera |  | 
| GameObject | m_mainMenu |  | 
| Button | m_manualIPButton |  | 
| Animator | m_menuAnimator |  | 
| Int32 | m_minimumPasswordLength |  | 
| GameObject | m_ndaPanel |  | 
| GameObject | m_newCharacterError |  | 
| GameObject | m_newCharacterPanel |  | 
| GameObject | m_newGameVersionPanel |  | 
| Text | m_newVersionName |  | 
| Button | m_newWorldDone |  | 
| InputField | m_newWorldName |  | 
| InputField | m_newWorldSeed |  | 
| Toggle | m_openServerToggle |  | 
| Text | m_passwordError |  | 
| GameObject | m_playerPrefab |  | 
| GameObject | m_playerVersionPanel |  | 
| Toggle | m_publicFilterSwitch |  | 
| Toggle | m_publicServerToggle |  | 
| GameObject | m_removeCharacterDialog |  | 
| Text | m_removeCharacterName |  | 
| GameObject | m_removeWorldDialog |  | 
| Text | m_removeWorldName |  | 
| GameObject | m_selectCharacterPanel |  | 
| Text | m_serverCount |  | 
| GameObject | m_serverListElement |  | 
| Single | m_serverListElementStep |  | 
| [ScrollRectEnsureVisible](./ScrollRectEnsureVisible.md) | m_serverListEnsureVisible |  | 
| GameObject | m_serverListPanel |  | 
| RectTransform | m_serverListRoot |  | 
| InputField | m_serverPassword |  | 
| Int32 | m_serverPlayerLimit |  | 
| Button | m_serverRefreshButton |  | 
| GameObject | m_settingsPrefab |  | 
| GameObject | m_startGamePanel |  | 
| Text | m_versionLabel |  | 
| String | m_versionXmlUrl |  | 
| GameObject | m_worldListElement |  | 
| Single | m_worldListElementStep |  | 
| [ScrollRectEnsureVisible](./ScrollRectEnsureVisible.md) | m_worldListEnsureVisible |  | 
| GameObject | m_worldListPanel |  | 
| RectTransform | m_worldListRoot |  | 
| Button | m_worldRemove |  | 
| Button | m_worldStart |  | 
| GameObject | m_worldVersionPanel |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [Player](./Player.md) | GetPreviewPlayer() |  | 
| void | OnAbort() |  | 
| void | OnButtonDiscord() |  | 
| void | OnButtonFacebook() |  | 
| void | OnButtonFeedback() |  | 
| void | OnButtonNDAAccept() |  | 
| void | OnButtonNDADecline() |  | 
| void | OnButtonRemoveCharacterNo() |  | 
| void | OnButtonRemoveCharacterYes() |  | 
| void | OnButtonRemoveWorldNo() |  | 
| void | OnButtonRemoveWorldYes() |  | 
| void | OnButtonSettings() |  | 
| void | OnButtonShowLog() |  | 
| void | OnButtonTwitter() |  | 
| void | OnButtonWebPage() |  | 
| void | OnCharacterLeft() |  | 
| void | OnCharacterNew() |  | 
| void | OnCharacterRemove() |  | 
| void | OnCharacterRight() |  | 
| void | OnCharacterStart() |  | 
| void | OnConnectionFailedOk() |  | 
| void | OnCredits() |  | 
| void | OnCreditsBack() |  | 
| void | OnJoinIPBack() |  | 
| void | OnJoinIPConnect() |  | 
| void | OnJoinIPOpen() |  | 
| void | OnJoinStart() |  | 
| void | OnNewCharacterCancel() |  | 
| void | OnNewCharacterDone() |  | 
| void | OnNewVersionButtonContinue() |  | 
| void | OnNewVersionButtonDownload() |  | 
| void | OnNewWorldBack() |  | 
| void | OnNewWorldDone() |  | 
| void | OnPlayerVersionOk() |  | 
| void | OnSelectWorldTab() |  | 
| void | OnSelelectCharacterBack() |  | 
| void | OnServerFilterChanged() |  | 
| void | OnServerListTab() |  | 
| void | OnStartGame() |  | 
| void | OnStartGameBack() |  | 
| void | OnWorldNew() |  | 
| void | OnWorldRemove() |  | 
| void | OnWorldStart() |  | 
| void | OnWorldVersionYes() |  | 
| void | RequestServerList() |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FejdStartup](./FejdStartup.md) | instance |  | 


