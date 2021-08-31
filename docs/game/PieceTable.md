## `PieceTable`

```csharp
public class PieceTable
    : MonoBehaviour

```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_canRemovePieces |  | 
| List&lt;GameObject&gt; | m_pieces |  | 
| PieceCategory | m_selectedCategory |  | 
| Vector2Int[] | m_selectedPiece |  | 
| Boolean | m_useCategories |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | DownPiece() |  | 
| Int32 | GetAvailablePiecesInCategory(`PieceCategory` cat) |  | 
| Int32 | GetAvailablePiecesInSelectedCategory() |  | 
| [Piece](./Piece.md) | GetPiece(`Int32` category, `Vector2Int` p) |  | 
| [Piece](./Piece.md) | GetPiece(`Vector2Int` p) |  | 
| List&lt;Piece&gt; | GetPiecesInSelectedCategory() |  | 
| Vector2Int | GetSelectedIndex() |  | 
| [Piece](./Piece.md) | GetSelectedPiece() |  | 
| GameObject | GetSelectedPrefab() |  | 
| Boolean | IsPieceAvailable(`Piece` piece) |  | 
| void | LeftPiece() |  | 
| void | NextCategory() |  | 
| void | PrevCategory() |  | 
| void | RightPiece() |  | 
| void | SetCategory(`Int32` index) |  | 
| void | SetSelected(`Vector2Int` p) |  | 
| void | UpdateAvailable(`HashSet&lt;String&gt;` knownRecipies, `Player` player, `Boolean` hideUnavailable, `Boolean` noPlacementCost) |  | 
| void | UpPiece() |  | 


### Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | m_gridHeight |  | 
| Int32 | m_gridWidth |  | 


