## `Location`

```csharp
public class Location
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | m_applyRandomDamage |  | 
| `Boolean` | m_clearArea |  | 
| `Single` | m_exteriorRadius |  | 
| `Boolean` | m_hasInterior |  | 
| `String` | m_interiorEnvironment |  | 
| `GameObject` | m_interiorPrefab |  | 
| `Single` | m_interiorRadius |  | 
| `Boolean` | m_noBuild |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Boolean` | IsInside(`Vector3` point, `Single` radius) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `Location` | GetLocation(`Vector3` point) |  | 
| `Boolean` | IsInsideLocation(`Vector3` point, `Single` distance) |  | 
| `Boolean` | IsInsideNoBuildLocation(`Vector3` point) |  | 


