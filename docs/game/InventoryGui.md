## `InventoryGui`

```csharp
public class InventoryGui
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Text | m_armor |  | 
| Single | m_autoCloseDistance |  | 
| [EffectList](./EffectList.md) | m_closeInventoryEffects |  | 
| RectTransform | m_container |  | 
| Text | m_containerName |  | 
| Text | m_containerWeight |  | 
| Button | m_craftButton |  | 
| Button | m_craftCancelButton |  | 
| Single | m_craftDuration |  | 
| Image | m_craftingStationIcon |  | 
| Text | m_craftingStationLevel |  | 
| RectTransform | m_craftingStationLevelRoot |  | 
| Text | m_craftingStationName |  | 
| [EffectList](./EffectList.md) | m_craftItemDoneEffects |  | 
| [EffectList](./EffectList.md) | m_craftItemEffects |  | 
| GuiBar | m_craftProgressBar |  | 
| Transform | m_craftProgressPanel |  | 
| GameObject | m_dragItemPrefab |  | 
| Button | m_dropButton |  | 
| Transform | m_infoPanel |  | 
| UIGroupHandler | m_inventoryGroup |  | 
| Transform | m_inventoryRoot |  | 
| Text | m_itemCraftType |  | 
| Image | m_minStationLevelIcon |  | 
| Text | m_minStationLevelText |  | 
| [EffectList](./EffectList.md) | m_moveItemEffects |  | 
| [EffectList](./EffectList.md) | m_openInventoryEffects |  | 
| RectTransform | m_player |  | 
| Text | m_playerName |  | 
| Toggle | m_pvp |  | 
| Text | m_qualityLevel |  | 
| Button | m_qualityLevelDown |  | 
| Button | m_qualityLevelUp |  | 
| RectTransform | m_qualityPanel |  | 
| Text | m_recipeDecription |  | 
| GameObject | m_recipeElementPrefab |  | 
| [ScrollRectEnsureVisible](./ScrollRectEnsureVisible.md) | m_recipeEnsureVisible |  | 
| Image | m_recipeIcon |  | 
| RectTransform | m_recipeListRoot |  | 
| Scrollbar | m_recipeListScroll |  | 
| Single | m_recipeListSpace |  | 
| Text | m_recipeName |  | 
| GameObject[] | m_recipeRequirementList |  | 
| Button | m_repairButton |  | 
| Image | m_repairButtonGlow |  | 
| Transform | m_repairPanel |  | 
| Transform | m_repairPanelSelection |  | 
| [SkillsDialog](./SkillsDialog.md) | m_skillsDialog |  | 
| Text | m_splitAmount |  | 
| Button | m_splitCancelButton |  | 
| Image | m_splitIcon |  | 
| Text | m_splitIconName |  | 
| Button | m_splitOkButton |  | 
| Transform | m_splitPanel |  | 
| Slider | m_splitSlider |  | 
| Button | m_tabCraft |  | 
| Button | m_tabUpgrade |  | 
| Button | m_takeAllButton |  | 
| [TextsDialog](./TextsDialog.md) | m_textsDialog |  | 
| GameObject | m_trophieElementPrefab |  | 
| RectTransform | m_trophieListRoot |  | 
| Single | m_trophieListSpace |  | 
| GameObject | m_trophiesPanel |  | 
| Scrollbar | m_trophyListScroll |  | 
| UIGroupHandler[] | m_uiGroups |  | 
| GuiBar | m_upgradeItemDurability |  | 
| Image | m_upgradeItemIcon |  | 
| Text | m_upgradeItemIndex |  | 
| Text | m_upgradeItemName |  | 
| Text | m_upgradeItemNextQuality |  | 
| Text | m_upgradeItemQuality |  | 
| GameObject | m_upgradeItemQualityArrow |  | 
| Button | m_variantButton |  | 
| [VariantDialog](./VariantDialog.md) | m_variantDialog |  | 
| Text | m_weight |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | Hide() |  | 
| Boolean | InCraftTab() |  | 
| Boolean | InUpradeTab() |  | 
| Boolean | IsContainerOpen() |  | 
| void | OnCloseTrophies() |  | 
| void | OnOpenSkills() |  | 
| void | OnOpenTexts() |  | 
| void | OnOpenTrophies() |  | 
| void | OnShowVariantSelection() |  | 
| void | OnTabCraftPressed() |  | 
| void | OnTabUpgradePressed() |  | 
| void | Show(`Container` container) |  | 


Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [InventoryGui](./InventoryGui.md) | instance |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | HideRequirement(`Transform` elementRoot) |  | 
| Boolean | IsVisible() |  | 
| Boolean | SetupRequirement(`Transform` elementRoot, `Requirement` req, `Player` player, `Boolean` craft, `Int32` quality) |  | 


