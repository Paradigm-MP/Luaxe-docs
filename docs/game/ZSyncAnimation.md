## `ZSyncAnimation`

```csharp
public class ZSyncAnimation
    : MonoBehaviour
```

### Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | m_smoothCharacterSpeeds |  | 
| List&lt;String&gt; | m_syncBools |  | 
| List&lt;String&gt; | m_syncFloats |  | 
| List&lt;String&gt; | m_syncInts |  | 


### Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Boolean | IsOwner() |  | 
| void | SetBool(String name, Boolean value) |  | 
| void | SetBool(Int32 hash, Boolean value) |  | 
| void | SetFloat(String name, Single value) |  | 
| void | SetFloat(Int32 hash, Single value) |  | 
| void | SetInt(String name, Int32 value) |  | 
| void | SetInt(Int32 hash, Int32 value) |  | 
| void | SetSpeed(Single speed) |  | 
| void | SetTrigger(String name) |  | 


### Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| Int32 | GetHash(String name) |  | 


