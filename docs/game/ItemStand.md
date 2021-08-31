## `ItemStand`

```csharp
public class ItemStand
    : MonoBehaviour, Interactable, Hoverable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `EffectList` | m_activatePowerEffects |  | 
| `EffectList` | m_activatePowerEffectsPlayer |  | 
| `Transform` | m_attachOther |  | 
| `Boolean` | m_autoAttach |  | 
| `Boolean` | m_canBeRemoved |  | 
| `EffectList` | m_destroyEffects |  | 
| `Transform` | m_dropSpawnPoint |  | 
| `EffectList` | m_effects |  | 
| `StatusEffect` | m_guardianPower |  | 
| `String` | m_name |  | 
| `ZNetView` | m_netViewOverride |  | 
| `Single` | m_powerActivationDelay |  | 
| `List<ItemDrop>` | m_supportedItems |  | 
| `List<ItemType>` | m_supportedTypes |  | 
| `List<ItemDrop>` | m_unsupportedItems |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | DestroyAttachment() |  | 
| `String` | GetAttachedItem() |  | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | HaveAttachment() |  | 
| `Boolean` | Interact(`Humanoid` user, `Boolean` hold) |  | 
| `Boolean` | IsSupported(`ItemData` item) |  | 
| `Boolean` | IsUnsupported(`ItemData` item) |  | 
| `void` | RPC_DestroyAttachment(`Int64` sender) |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


