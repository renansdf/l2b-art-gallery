/*global THREE*/

function TeleportCamera(floor, room)
{
	currentFloor = floor

	let newPos = teleportPoints[room].object3D.position
	newPos.y = cameraYHeight[currentFloor]
  
  let newRot = teleportPoints[room].getAttribute('rotation')

  mainCamera.setAttribute('position', Vector3ToAframeAttribute(newPos))
  SetCameraRotation(newRot)
}

function SetCameraRotation(rot)
{
  mainCamera.components['touch-look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(rot.x)
  mainCamera.components['touch-look-controls'].yawObject.rotation.y = THREE.Math.degToRad(rot.y)
}
