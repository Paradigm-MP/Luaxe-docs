## `AudioMan`

```csharp
public class AudioMan
    : MonoBehaviour
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_ambientFadeTime |  | 
| AudioMixerGroup | m_ambientMixer |  | 
| AudioMixer | m_masterMixer |  | 
| AudioClip | m_oceanAudio |  | 
| Single | m_oceanDepthTreshold |  | 
| Single | m_oceanFadeSpeed |  | 
| Single | m_oceanMoveSpeed |  | 
| Single | m_oceanVolumeMax |  | 
| Single | m_oceanVolumeMin |  | 
| Single | m_randomAmbientChance |  | 
| Single | m_randomAmbientInterval |  | 
| GameObject | m_randomAmbientPrefab |  | 
| List&lt;BiomeAmbients&gt; | m_randomAmbients |  | 
| Single | m_randomFadeIn |  | 
| Single | m_randomFadeOut |  | 
| Single | m_randomMaxDistance |  | 
| Single | m_randomMaxPitch |  | 
| Single | m_randomMaxVol |  | 
| Single | m_randomMinDistance |  | 
| Single | m_randomMinPitch |  | 
| Single | m_randomMinVol |  | 
| Single | m_randomPan |  | 
| Single | m_snapshotTransitionTime |  | 
| AudioClip | m_windAudio |  | 
| Single | m_windIntensityPower |  | 
| Single | m_windMaxPitch |  | 
| Single | m_windMaxVol |  | 
| Single | m_windMinPitch |  | 
| Single | m_windMinVol |  | 
| Single | m_windVariation |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | QueueAmbientLoop(AudioClip clip, Single vol) |  | 
| void | SetIndoor(Boolean indoor) |  | 
| void | StopAmbientLoop() |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [AudioMan](./AudioMan.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | GetSFXVolume() |  | 
| void | SetSFXVolume(Single vol) |  | 


