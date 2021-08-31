## `TerrainModifier`

```csharp
public class TerrainModifier
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_chanceToSpawn |  | 
| Boolean | m_level |  | 
| Single | m_levelOffset |  | 
| Single | m_levelRadius |  | 
| Int32 | m_maxSpawned |  | 
| [EffectList](./EffectList.md) | m_onPlacedEffect |  | 
| Boolean | m_paintCleared |  | 
| Boolean | m_paintHeightCheck |  | 
| Single | m_paintRadius |  | 
| PaintType | m_paintType |  | 
| Boolean | m_playerModifiction |  | 
| Boolean | m_smooth |  | 
| Single | m_smoothPower |  | 
| Single | m_smoothRadius |  | 
| Int32 | m_sortOrder |  | 
| Boolean | m_spawnAtMaxLevelDepth |  | 
| GameObject | m_spawnOnPlaced |  | 
| Boolean | m_square |  | 
| Boolean | m_useTerrainCompiler |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Int64 | GetCreationTime() |  | 
| Single | GetRadius() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [Piece](./Piece.md) | FindClosestModifierPieceInRange(`Vector3` point, `Single` range) |  | 
| List&lt;TerrainModifier&gt; | GetAllInstances() |  | 
| void | SetTriggerOnPlaced(`Boolean` trigger) |  | 


