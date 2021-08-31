## `Trader`

```csharp
public class Trader
    : MonoBehaviour, Hoverable, Interactable

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Single` | m_byeRange |  | 
| `Single` | m_greetRange |  | 
| `Single` | m_hideDialogDelay |  | 
| `List<TradeItem>` | m_items |  | 
| `String` | m_name |  | 
| `List<String>` | m_randomBuy |  | 
| `EffectList` | m_randomBuyFX |  | 
| `List<String>` | m_randomGoodbye |  | 
| `EffectList` | m_randomGoodbyeFX |  | 
| `EffectList` | m_randomGreetFX |  | 
| `List<String>` | m_randomGreets |  | 
| `List<String>` | m_randomSell |  | 
| `EffectList` | m_randomSellFX |  | 
| `List<String>` | m_randomStartTrade |  | 
| `EffectList` | m_randomStartTradeFX |  | 
| `List<String>` | m_randomTalk |  | 
| `EffectList` | m_randomTalkFX |  | 
| `Single` | m_randomTalkInterval |  | 
| `Single` | m_standRange |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `String` | GetHoverName() |  | 
| `String` | GetHoverText() |  | 
| `Boolean` | Interact(`Humanoid` character, `Boolean` hold) |  | 
| `void` | OnBought(`TradeItem` item) |  | 
| `void` | OnSold() |  | 
| `Boolean` | UseItem(`Humanoid` user, `ItemData` item) |  | 


