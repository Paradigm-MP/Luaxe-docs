## `Piece`

```csharp
public class Piece
    : StaticTarget
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_allowAltGroundPlacement |  | 
| Boolean | m_allowedInDungeons |  | 
| Boolean | m_canBeRemoved |  | 
| PieceCategory | m_category |  | 
| Boolean | m_clipEverything |  | 
| Boolean | m_clipGround |  | 
| Int32 | m_comfort |  | 
| ComfortGroup | m_comfortGroup |  | 
| [CraftingStation](./CraftingStation.md) | m_craftingStation |  | 
| Boolean | m_cultivatedGroundOnly |  | 
| String | m_description |  | 
| GameObject | m_destroyedLootPrefab |  | 
| String | m_dlc |  | 
| Boolean | m_enabled |  | 
| Boolean | m_groundOnly |  | 
| Boolean | m_groundPiece |  | 
| Sprite | m_icon |  | 
| Boolean | m_inCeilingOnly |  | 
| Boolean | m_isUpgrade |  | 
| String | m_name |  | 
| Boolean | m_noClipping |  | 
| Boolean | m_noInWater |  | 
| Boolean | m_notOnFloor |  | 
| Boolean | m_notOnTiltingSurface |  | 
| Boolean | m_notOnWood |  | 
| Biome | m_onlyInBiome |  | 
| Boolean | m_onlyInTeleportArea |  | 
| [EffectList](./EffectList.md) | m_placeEffect |  | 
| Boolean | m_repairPiece |  | 
| Requirement[] | m_resources |  | 
| Single | m_spaceRequirement |  | 
| Boolean | m_targetNonPlayerBuilt |  | 
| Boolean | m_waterPiece |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | CanBeRemoved() |  | 
| void | DropResources() |  | 
| Int64 | GetCreator() |  | 
| void | GetSnapPoints(List&lt;Transform&gt; points) |  | 
| Boolean | IsCreator() |  | 
| Boolean | IsPlacedByPlayer() |  | 
| Boolean | IsPriorityTarget() |  | 
| Boolean | IsRandomTarget() |  | 
| void | SetCreator(Int64 uid) |  | 
| void | SetInvalidPlacementHeightlight(Boolean enabled) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | GetAllPiecesInRadius(Vector3 p, Single radius, List&lt;Piece&gt; pieces) |  | 
| void | GetSnapPoints(Vector3 point, Single radius, List&lt;Transform&gt; points, List&lt;Piece&gt; pieces) |  | 


