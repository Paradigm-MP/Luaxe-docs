## `Minimap`

```csharp
public class Minimap
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Color | m_ashlandsColor |  | 
| Text | m_biomeNameLarge |  | 
| Text | m_biomeNameSmall |  | 
| Color | m_blackforestColor |  | 
| Single | m_clickDuration |  | 
| Color | m_deepnorthColor |  | 
| Single | m_exploreInterval |  | 
| Single | m_exploreRadius |  | 
| RectTransform | m_gamepadCrosshair |  | 
| Color | m_heathColor |  | 
| List&lt;SpriteData&gt; | m_icons |  | 
| RectTransform | m_largeMarker |  | 
| GameObject | m_largeRoot |  | 
| RectTransform | m_largeShipMarker |  | 
| List&lt;LocationSpriteData&gt; | m_locationIcons |  | 
| RawImage | m_mapImageLarge |  | 
| RawImage | m_mapImageSmall |  | 
| Single | m_maxZoom |  | 
| Color | m_meadowsColor |  | 
| Single | m_minZoom |  | 
| Color | m_mistlandsColor |  | 
| Color | m_mountainColor |  | 
| InputField | m_nameInput |  | 
| GameObject | m_pinPrefab |  | 
| RectTransform | m_pinRootLarge |  | 
| RectTransform | m_pinRootSmall |  | 
| Single | m_pinSizeLarge |  | 
| Single | m_pinSizeSmall |  | 
| Single | m_pixelSize |  | 
| Toggle | m_publicPosition |  | 
| Single | m_removeRadius |  | 
| Image | m_selectedIcon0 |  | 
| Image | m_selectedIcon1 |  | 
| Image | m_selectedIcon2 |  | 
| Image | m_selectedIcon3 |  | 
| Image | m_selectedIcon4 |  | 
| Single | m_showNamesZoom |  | 
| RectTransform | m_smallMarker |  | 
| GameObject | m_smallRoot |  | 
| RectTransform | m_smallShipMarker |  | 
| Color | m_swampColor |  | 
| Int32 | m_textureSize |  | 
| RectTransform | m_windMarker |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| PinData | AddPin(`Vector3` pos, `PinType` type, `String` name, `Boolean` save, `Boolean` isChecked) |  | 
| Boolean | DiscoverLocation(`Vector3` pos, `PinType` type, `String` name) |  | 
| void | ExploreAll() |  | 
| void | ForceRegen() |  | 
| void | OnMapDblClick() |  | 
| void | OnMapLeftClick() |  | 
| void | OnMapMiddleClick(`UIInputHandler` handler) |  | 
| void | OnMapRightClick(`UIInputHandler` handler) |  | 
| void | OnPressedIcon0() |  | 
| void | OnPressedIcon1() |  | 
| void | OnPressedIcon2() |  | 
| void | OnPressedIcon3() |  | 
| void | OnPressedIcon4() |  | 
| void | OnTogglePublicPosition() |  | 
| Boolean | RemovePin(`Vector3` pos, `Single` radius) |  | 
| void | RemovePin(`PinData` pin) |  | 
| void | Reset() |  | 
| void | SaveMapData() |  | 
| void | ShowPointOnMap(`Vector3` point) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Minimap](./Minimap.md) | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | InTextInput() |  | 
| Boolean | IsOpen() |  | 


