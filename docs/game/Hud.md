## `Hud`

```csharp
public class Hud
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | m_actionBarRoot |  | 
| `Text` | m_actionName |  | 
| `GuiBar` | m_actionProgress |  | 
| `GameObject` | m_badConnectionIcon |  | 
| `GameObject` | m_betaText |  | 
| `GameObject` | m_buildHud |  | 
| `Image` | m_buildIcon |  | 
| `Text` | m_buildSelection |  | 
| `UIInputHandler` | m_closePieceSelectionButton |  | 
| `Image` | m_crosshair |  | 
| `Image` | m_crosshairBow |  | 
| `Image` | m_damageScreen |  | 
| `GameObject` | m_eventBar |  | 
| `Text` | m_eventName |  | 
| `RectTransform` | m_foodBarRoot |  | 
| `Image[]` | m_foodBars |  | 
| `RectTransform` | m_foodBaseBar |  | 
| `Color` | m_foodColorFull |  | 
| `Color` | m_foodColorHungry |  | 
| `Image` | m_foodIcon |  | 
| `Image[]` | m_foodIcons |  | 
| `Text` | m_foodText |  | 
| `GameObject` | m_fullSail |  | 
| `Text` | m_gpCooldown |  | 
| `Image` | m_gpIcon |  | 
| `Text` | m_gpName |  | 
| `RectTransform` | m_gpRoot |  | 
| `GameObject` | m_halfSail |  | 
| `Animator` | m_healthAnimator |  | 
| `GuiBar` | m_healthBarFast |  | 
| `RectTransform` | m_healthBarRoot |  | 
| `GuiBar` | m_healthBarSlow |  | 
| `Text` | m_healthMaxText |  | 
| `RectTransform` | m_healthPanel |  | 
| `Text` | m_healthText |  | 
| `GameObject` | m_hidden |  | 
| `Text` | m_hoverName |  | 
| `Image` | m_loadingImage |  | 
| `String` | m_loadingImagePath |  | 
| `Int32` | m_loadingImages |  | 
| `GameObject` | m_loadingProgress |  | 
| `CanvasGroup` | m_loadingScreen |  | 
| `Text` | m_loadingTip |  | 
| `List<String>` | m_loadingTips |  | 
| `GameObject` | m_pieceCategoryRoot |  | 
| `GameObject[]` | m_pieceCategoryTabs |  | 
| `Text` | m_pieceDescription |  | 
| `GuiBar` | m_pieceHealthBar |  | 
| `RectTransform` | m_pieceHealthRoot |  | 
| `GameObject` | m_pieceIconPrefab |  | 
| `Single` | m_pieceIconSpacing |  | 
| `RectTransform` | m_pieceListMask |  | 
| `RectTransform` | m_pieceListRoot |  | 
| `GameObject` | m_pieceSelectionWindow |  | 
| `GameObject[]` | m_requirementItems |  | 
| `GameObject` | m_rootObject |  | 
| `GameObject` | m_rudder |  | 
| `GameObject` | m_rudderBackward |  | 
| `GameObject` | m_rudderFastForward |  | 
| `GameObject` | m_rudderForward |  | 
| `GameObject` | m_rudderLeft |  | 
| `GameObject` | m_rudderRight |  | 
| `GameObject` | m_rudderSlow |  | 
| `GameObject` | m_saveIcon |  | 
| `EffectList` | m_selectItemEffect |  | 
| `GameObject` | m_shipControlsRoot |  | 
| `GameObject` | m_shipHudRoot |  | 
| `Image` | m_shipRudderIcon |  | 
| `Image` | m_shipRudderIndicator |  | 
| `Image` | m_shipWindIcon |  | 
| `RectTransform` | m_shipWindIconRoot |  | 
| `RectTransform` | m_shipWindIndicatorRoot |  | 
| `GameObject` | m_sleepingProgress |  | 
| `Animator` | m_staminaAnimator |  | 
| `GameObject` | m_staminaBar |  | 
| `GuiBar` | m_staminaBar2Fast |  | 
| `RectTransform` | m_staminaBar2Root |  | 
| `GuiBar` | m_staminaBar2Slow |  | 
| `GuiBar` | m_staminaBarFast |  | 
| `GuiBar` | m_staminaBarSlow |  | 
| `RectTransform` | m_statusEffectListRoot |  | 
| `Single` | m_statusEffectSpacing |  | 
| `RectTransform` | m_statusEffectTemplate |  | 
| `GuiBar` | m_stealthBar |  | 
| `GameObject` | m_targeted |  | 
| `GameObject` | m_targetedAlert |  | 
| `GameObject` | m_teleportingProgress |  | 
| `Boolean` | m_useRandomImages |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | DamageFlash() |  | 
| `void` | FlashHealthBar() |  | 
| `Boolean` | IsQuickPieceSelectEnabled() |  | 
| `void` | StaminaBarNoStaminaFlash() |  | 
| `void` | StaminaBarUppgradeFlash() |  | 
| `void` | ToggleBetaTextVisible() |  | 
| `void` | TogglePieceSelection() |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| `Hud` | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | HidePieceSelection() |  | 
| `Boolean` | IsPieceSelectionVisible() |  | 
| `Boolean` | IsUserHidden() |  | 


