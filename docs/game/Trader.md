## `Trader`

```csharp
public class Trader
    : MonoBehaviour, Hoverable, Interactable
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_byeRange |  | 
| Single | m_greetRange |  | 
| Single | m_hideDialogDelay |  | 
| List&lt;TradeItem&gt; | m_items |  | 
| String | m_name |  | 
| List&lt;String&gt; | m_randomBuy |  | 
| [EffectList](./EffectList.md) | m_randomBuyFX |  | 
| List&lt;String&gt; | m_randomGoodbye |  | 
| [EffectList](./EffectList.md) | m_randomGoodbyeFX |  | 
| [EffectList](./EffectList.md) | m_randomGreetFX |  | 
| List&lt;String&gt; | m_randomGreets |  | 
| List&lt;String&gt; | m_randomSell |  | 
| [EffectList](./EffectList.md) | m_randomSellFX |  | 
| List&lt;String&gt; | m_randomStartTrade |  | 
| [EffectList](./EffectList.md) | m_randomStartTradeFX |  | 
| List&lt;String&gt; | m_randomTalk |  | 
| [EffectList](./EffectList.md) | m_randomTalkFX |  | 
| Single | m_randomTalkInterval |  | 
| Single | m_standRange |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| String | GetHoverName() |  | 
| String | GetHoverText() |  | 
| Boolean | Interact([`Humanoid`](./Humanoid.md) character, Boolean hold) |  | 
| void | OnBought(TradeItem item) |  | 
| void | OnSold() |  | 
| Boolean | UseItem([`Humanoid`](./Humanoid.md) user, ItemData item) |  | 


