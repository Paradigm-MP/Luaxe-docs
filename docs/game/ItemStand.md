## `ItemStand`

```csharp
public class ItemStand
    : MonoBehaviour, Interactable, Hoverable

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [EffectList](./EffectList.md) | m_activatePowerEffects |  | 
| [EffectList](./EffectList.md) | m_activatePowerEffectsPlayer |  | 
| Transform | m_attachOther |  | 
| Boolean | m_autoAttach |  | 
| Boolean | m_canBeRemoved |  | 
| [EffectList](./EffectList.md) | m_destroyEffects |  | 
| Transform | m_dropSpawnPoint |  | 
| [EffectList](./EffectList.md) | m_effects |  | 
| [StatusEffect](./StatusEffect.md) | m_guardianPower |  | 
| String | m_name |  | 
| [ZNetView](./ZNetView.md) | m_netViewOverride |  | 
| Single | m_powerActivationDelay |  | 
| List&lt;ItemDrop&gt; | m_supportedItems |  | 
| List&lt;ItemType&gt; | m_supportedTypes |  | 
| List&lt;ItemDrop&gt; | m_unsupportedItems |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | DestroyAttachment() |  | 
| String | GetAttachedItem() |  | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | HaveAttachment() |  | 
| Boolean | Interact(`Humanoid` user, `Boolean` hold) |  | 
| Boolean | IsSupported(`ItemData` item) |  | 
| Boolean | IsUnsupported(`ItemData` item) |  | 
| void | RPC_DestroyAttachment(`Int64` sender) |  | 
| Boolean | UseItem(`Humanoid` user, `ItemData` item) |  | 


