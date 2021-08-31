## `StoreGui`

```csharp
public class StoreGui
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Button | m_buyButton |  | 
| [EffectList](./EffectList.md) | m_buyEffects |  | 
| [ItemDrop](./ItemDrop.md) | m_coinPrefab |  | 
| Text | m_coinText |  | 
| Single | m_hideDistance |  | 
| [ScrollRectEnsureVisible](./ScrollRectEnsureVisible.md) | m_itemEnsureVisible |  | 
| Single | m_itemSpacing |  | 
| GameObject | m_listElement |  | 
| RectTransform | m_listRoot |  | 
| Scrollbar | m_listScroll |  | 
| GameObject | m_rootPanel |  | 
| Button | m_sellButton |  | 
| [EffectList](./EffectList.md) | m_sellEffects |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Hide() |  | 
| void | OnBuyItem() |  | 
| void | OnSellItem() |  | 
| void | Show([`Trader`](./Trader.md) trader) |  | 


### Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [StoreGui](./StoreGui.md) | instance |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | IsVisible() |  | 


