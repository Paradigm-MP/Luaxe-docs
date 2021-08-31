## `CharacterDrop`

```csharp
public class CharacterDrop
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| `List<Drop>` | m_drops |  | 
| `Vector3` | m_spawnOffset |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `List<KeyValuePair<GameObject, Int32>>` | GenerateDropList() |  | 
| `void` | SetDropsEnabled(`Boolean` enabled) |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| `void` | DropItems(`List<KeyValuePair<GameObject, Int32>>` drops, `Vector3` centerPos, `Single` dropArea) |  | 


