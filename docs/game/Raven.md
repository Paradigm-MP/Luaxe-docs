## `Raven`

```csharp
public class Raven
    : MonoBehaviour, Hoverable, Interactable, IDestructible

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_autoTalk |  | 
| Single | m_autoTalkDistance |  | 
| Single | m_despawnDistance |  | 
| [EffectList](./EffectList.md) | m_despawnEffect |  | 
| Single | m_dialogVisibleTime |  | 
| Single | m_dontFlyDistance |  | 
| Single | m_enemyCheckDistance |  | 
| GameObject | m_exclamation |  | 
| [EffectList](./EffectList.md) | m_idleEffect |  | 
| Single | m_idleEffectIntervalMax |  | 
| Single | m_idleEffectIntervalMin |  | 
| Boolean | m_isMunin |  | 
| Single | m_longDialogVisibleTime |  | 
| Single | m_minRotationAngle |  | 
| String | m_name |  | 
| Single | m_randomTextInterval |  | 
| Single | m_randomTextIntervalImportant |  | 
| List&lt;String&gt; | m_randomTexts |  | 
| List&lt;String&gt; | m_randomTextsImportant |  | 
| Single | m_rotateSpeed |  | 
| Single | m_spawnDistance |  | 
| Single | m_textCullDistance |  | 
| Single | m_textOffset |  | 
| GameObject | m_visual |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Damage(`HitData` hit) |  | 
| [DestructibleType](./DestructibleType.md) | GetDestructibleType() |  | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact(`Humanoid` character, `Boolean` hold) |  | 
| Boolean | IsAway() |  | 
| Boolean | IsFlying() |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | AddTempText(`String` key, `String` topic, `String` text, `String` label, `Boolean` munin) |  | 
| Boolean | IsInstantiated() |  | 
| void | RegisterStaticText(`RavenText` text) |  | 
| void | UnregisterStaticText(`RavenText` text) |  | 


