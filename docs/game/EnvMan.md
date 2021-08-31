## `EnvMan`

```csharp
public class EnvMan
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| List&lt;BiomeEnvSetup&gt; | m_biomes |  | 
| MeshRenderer | m_clouds |  | 
| Int64 | m_dayLengthSec |  | 
| String | m_debugEnv |  | 
| Single | m_debugTime |  | 
| Boolean | m_debugTimeOfDay |  | 
| Boolean | m_debugWind |  | 
| Single | m_debugWindAngle |  | 
| Single | m_debugWindIntensity |  | 
| Light | m_dirLight |  | 
| Single | m_edgeOfWorldWidth |  | 
| Int64 | m_environmentDuration |  | 
| List&lt;EnvSetup&gt; | m_environments |  | 
| String | m_introEnvironment |  | 
| MeshRenderer | m_rainClouds |  | 
| MeshRenderer | m_rainCloudsDownside |  | 
| Single | m_randomMusicIntervalMax |  | 
| Single | m_randomMusicIntervalMin |  | 
| Single | m_sunHorizonTransitionH |  | 
| Single | m_sunHorizonTransitionL |  | 
| Single | m_transitionDuration |  | 
| Single | m_wetTransitionDuration |  | 
| Int64 | m_windPeriodDuration |  | 
| Single | m_windTransitionDuration |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetAmbientMusic() |  | 
| Biome | GetCurrentBiome() |  | 
| [EnvSetup](./EnvSetup.md) | GetCurrentEnvironment() |  | 
| Int32 | GetDay(`Double` time) |  | 
| Double | GetMorningStartSec(`Int32` day) |  | 
| Vector3 | GetSunDirection() |  | 
| Color | GetSunFogColor() |  | 
| void | GetWindData(`Vector4&` wind1, `Vector4&` wind2, `Single&` alpha) |  | 
| Vector3 | GetWindDir() |  | 
| Vector3 | GetWindForce() |  | 
| Single | GetWindIntensity() |  | 
| Boolean | IsAfternoon() |  | 
| Boolean | IsCold() |  | 
| Boolean | IsDay() |  | 
| Boolean | IsDaylight() |  | 
| Boolean | IsEnvironment(`String` name) |  | 
| Boolean | IsEnvironment(`List&lt;String&gt;` names) |  | 
| Boolean | IsFreezing() |  | 
| Boolean | IsNight() |  | 
| Boolean | IsTimeSkipping() |  | 
| Boolean | IsWet() |  | 
| void | ResetDebugWind() |  | 
| void | SetDebugWind(`Single` angle, `Single` intensity) |  | 
| void | SetForceEnvironment(`String` env) |  | 
| void | SkipToMorning() |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [EnvMan](./EnvMan.md) | instance |  | 


