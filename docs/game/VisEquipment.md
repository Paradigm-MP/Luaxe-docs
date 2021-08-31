## `VisEquipment`

```csharp
public class VisEquipment
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Transform` | m_backAtgeir |  | 
| `Transform` | m_backBow |  | 
| `Transform` | m_backMelee |  | 
| `Transform` | m_backShield |  | 
| `Transform` | m_backTool |  | 
| `Transform` | m_backTwohandedMelee |  | 
| `SkinnedMeshRenderer` | m_bodyModel |  | 
| `CapsuleCollider[]` | m_clothColliders |  | 
| `Transform` | m_helmet |  | 
| `Boolean` | m_isPlayer |  | 
| `Transform` | m_leftHand |  | 
| `PlayerModel[]` | m_models |  | 
| `Transform` | m_rightHand |  | 
| `Boolean` | m_useAllTrails |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `GameObject` | AttachItem(`Int32` itemHash, `Int32` variant, `Transform` joint, `Boolean` enableEquipEffects = True) |  | 
| `Int32` | GetModelIndex() |  | 
| `void` | SetBeardItem(`String` name) |  | 
| `void` | SetChestItem(`String` name) |  | 
| `void` | SetHairColor(`Vector3` color) |  | 
| `void` | SetHairItem(`String` name) |  | 
| `void` | SetHelmetItem(`String` name) |  | 
| `void` | SetLeftBackItem(`String` name, `Int32` variant) |  | 
| `void` | SetLeftItem(`String` name, `Int32` variant) |  | 
| `void` | SetLegItem(`String` name) |  | 
| `void` | SetModel(`Int32` index) |  | 
| `void` | SetRightBackItem(`String` name) |  | 
| `void` | SetRightItem(`String` name) |  | 
| `void` | SetShoulderItem(`String` name, `Int32` variant) |  | 
| `void` | SetSkinColor(`Vector3` color) |  | 
| `void` | SetUtilityItem(`String` name) |  | 
| `void` | SetWeaponTrails(`Boolean` enabled) |  | 
| `void` | UpdateLodgroup() |  | 


