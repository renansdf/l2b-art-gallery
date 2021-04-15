/*global THREE*/

let isReading = false;

const teleportPoints = document.querySelectorAll('.teleportPoint')
const fade_duration = 3

function GetRoomData(room_name)
{
  if(!gallery_rooms_data[room_name]){
    console.error('Cannot find room : ' + room_name)
    return { floor: 0 , room : 0}
  }

  return gallery_rooms_data[room_name]
}

// function SetHeaderAndHideMapContainer(room_name)
// {
//   setHeaderRoomName(room_name)
//   SetModalBottomRoomName(room_name)

//   if(isMobileDevice())
//     HideGalleryMapContainerMobile()
//   else
//     HideRightContentContainer()
// }

function TeleportCamera(floor, room)
{
	currentFloor = floor

	let newPos = teleportPoints[room].object3D.position
	newPos.y = cameraYHeight[currentFloor]
  
  let newRot = teleportPoints[room].getAttribute('rotation')

  mainCamera.setAttribute('position', Vector3ToAframeAttribute(newPos))
  SetCameraRotation(newRot)
}

// function FadeAndTeleport(room_name)
// {
//   if(IsFading()) return

//   const { floor, room } = GetRoomData(room_name)   
//   SetHeaderAndHideMapContainer(room_name)
//   Fade(fade_duration)

//   const fade_duration_ms = (fade_duration * 1000)
//   setTimeout(() => { TeleportCamera(floor, room) }, (fade_duration_ms / 2));
// }

// TODO : resolver esse teleport
// function FadeAndTeleportFromWelcomeHotspot(room_name) {
//   if(IsFading()) return

//   // Fade 
//   Fade(fade_duration)

//   const fade_duration_ms = (fade_duration * 1000)
  
//   setTimeout(() => { 
//     // Set the new room name
//     setHeaderRoomName(room_name)
//     SetModalBottomRoomName(room_name)

//     // Hide the opened content 
//     if (isMobileDevice()) {
//       HideBottomContentContainer()
//       HideMobileBackToNavigationButton()
//       HideMobileReadContentButton()
//       ShowMobileMapButton()
//     } else {
//       HideRightContentContainer()
//     }

//     // Show the invisible hotspot button 
//     currentHotspot.components.material.material.opacity = 1
//     currentHotspot = null

//     // Move the camera to the room position
//     ToggleMouseLookComponent(false)
//     const { floor, room } = GetRoomData(room_name)
//     TeleportCamera(floor, room)

//     // Enable the navigation again
//     ToggleMouseLookComponent(true)
//     isReading = false
//    }, (fade_duration_ms / 2));
// }

function SetCameraRotation(rot)
{
  mainCamera.components['touch-look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(rot.x)
  mainCamera.components['touch-look-controls'].yawObject.rotation.y = THREE.Math.degToRad(rot.y)
}
