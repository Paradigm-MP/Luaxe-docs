## `MusicMan`

```csharp
public class MusicMan
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_combatMusicTimeout |  | 
| List&lt;NamedMusic&gt; | m_music |  | 
| AudioMixerGroup | m_musicMixer |  | 
| Single | m_randomMusicIntervalMax |  | 
| Single | m_randomMusicIntervalMin |  | 
| Single | m_sailMusicMinSailTime |  | 
| Single | m_sailMusicShipSpeedThreshold |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | ApplySettings() |  | 
| Boolean | IsPlaying() |  | 
| void | Reset() |  | 
| void | ResetCombatTimer() |  | 
| void | TriggerMusic(String name) |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_masterMusicVolume |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [MusicMan](./MusicMan.md) | instance |  | 


