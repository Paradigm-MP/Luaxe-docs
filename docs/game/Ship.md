## `Ship`

```csharp
public class Ship
    : MonoBehaviour

```

Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| Single | m_angularDamping |  | 
| Single | m_backwardForce |  | 
| Transform | m_controlGuiPos |  | 
| Single | m_damping |  | 
| Single | m_dampingForward |  | 
| Single | m_dampingSideway |  | 
| Single | m_disableLevel |  | 
| BoxCollider | m_floatCollider |  | 
| Single | m_force |  | 
| Single | m_forceDistance |  | 
| GameObject | m_mastObject |  | 
| Single | m_minWaterImpactForce |  | 
| Single | m_minWaterImpactInterval |  | 
| GameObject | m_rudderObject |  | 
| Single | m_rudderRotationMax |  | 
| Single | m_rudderRotationSpeed |  | 
| Single | m_rudderSpeed |  | 
| Single | m_sailForceFactor |  | 
| Single | m_sailForceOffset |  | 
| GameObject | m_sailObject |  | 
| [ShipControlls](./ShipControlls.md) | m_shipControlls |  | 
| Single | m_stearForce |  | 
| Single | m_stearForceOffset |  | 
| Single | m_stearVelForceFactor |  | 
| Single | m_upsideDownDmg |  | 
| Single | m_upsideDownDmgInterval |  | 
| Single | m_waterImpactDamage |  | 
| [EffectList](./EffectList.md) | m_waterImpactEffect |  | 
| Single | m_waterLevelOffset |  | 


Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| void | ApplyMovementControlls(`Vector3` dir) |  | 
| void | Backward() |  | 
| Boolean | CanBeRemoved() |  | 
| void | Forward() |  | 
| Single | GetRudder() |  | 
| Single | GetRudderValue() |  | 
| Single | GetShipYawAngle() |  | 
| Single | GetSpeed() |  | 
| Speed | GetSpeedSetting() |  | 
| Single | GetWindAngle() |  | 
| Single | GetWindAngleFactor() |  | 
| Boolean | HasPlayerOnboard() |  | 
| Boolean | HaveControllingPlayer() |  | 
| Boolean | IsOwner() |  | 
| Boolean | IsPlayerInBoat(`ZDOID` zdoid) |  | 
| Boolean | IsPlayerInBoat(`Player` player) |  | 
| Boolean | IsSailUp() |  | 
| Boolean | IsWindControllActive() |  | 
| void | Rudder(`Single` rudder) |  | 
| void | Stop() |  | 


Static Methods

| Type | Name | Summary | 
| --- | --- | --- | 
| [Ship](./Ship.md) | GetLocalShip() |  | 


