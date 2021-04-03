const gallery_rooms_data = {
  /*
  [   poesias     ]
  [   exposições  ]                             [ contos & novelas  ]
  [   memórias    ] [ bem vindo ] [ infantis  ] [ ensaios           ]
  */

  'memórias':           { floor: 0, room: 0 },
  'bem vindo':          { floor: 0, room: 1 },
  'infantis':           { floor: 0, room: 2 },
  'ensaios':            { floor: 0, room: 3 },

  'exposições':         { floor: 1, room: 4 },
  'contos & novelas':   { floor: 1, room: 5 },

  'poesias':            { floor: 2, room: 6 }
}

const cameraYHeight = [
	1.6, // floor 0 height
	4.6, // floor 1 height
	7.5  // floor 2 height
]

const mainCamera = document.querySelector('#mainCamera')
const positionGizmo = document.querySelector('#nextPositionGizmo')
const teleportPoints = document.querySelectorAll('.teleportPoint')
const movementSpeed = 2
const fade_duration = 3

let currentFloor = 0

function Vector3ToAframeAttribute(vec)
{
  return vec.x + ' ' + vec.y + ' ' + vec.z
}

function GetMovementDuration()
{
	let direction = new THREE.Vector3();
  let currentPos = new THREE.Vector3().copy(mainCamera.object3D.position)
  let targetPos = new THREE.Vector3().copy(positionGizmo.object3D.position)
  
  direction = targetPos.sub(currentPos)
  return (direction.length() / movementSpeed) * 1000
}

function GetRoomData(room_name)
{
  if(!gallery_rooms_data[room_name]){
    console.error('Cannot find room : ' + room_name)
    return { floor: 0 , room : 0}
  }

  return gallery_rooms_data[room_name]
}

function SetHeaderAndHideMapContainer(room_name)
{
  setHeaderRoomName(room_name)
  SetModalBottomRoomName(room_name)

  if(isMobileDevice())
    HideGalleryMapContainerMobile()
  else
    HideRightContentContainer()
}

function TeleportCamera(floor, room)
{
	currentFloor = floor

	let newPos = teleportPoints[room].object3D.position
	newPos.y = cameraYHeight[currentFloor]
  
  let newRot = teleportPoints[room].getAttribute('rotation')

  mainCamera.setAttribute('position', Vector3ToAframeAttribute(newPos))
  SetCameraRotation(newRot)
}

function FadeAndTeleport(room_name)
{
  if(IsFading()) return

  const { floor, room } = GetRoomData(room_name)   
  SetHeaderAndHideMapContainer(room_name)
  Fade(fade_duration)

  const fade_duration_ms = (fade_duration * 1000)
  setTimeout(() => { TeleportCamera(floor, room) }, (fade_duration_ms / 2));
}

// TODO : resolver esse teleport
function FadeAndTeleportFromWelcomeHotspot(room_name) {
  if(IsFading()) return

  // Fade 
  Fade(fade_duration)

  const fade_duration_ms = (fade_duration * 1000)
  
  setTimeout(() => { 
    // Set the new room name
    setHeaderRoomName(room_name)
    SetModalBottomRoomName(room_name)

    // Hide the opened content 
    if (isMobileDevice()) {
      HideBottomContentContainer()
      HideMobileBackToNavigationButton()
      HideMobileReadContentButton()
      ShowMobileMapButton()
    } else {
      HideRightContentContainer()
    }

    // Show the invisible hotspot button 
    currentHotspot.components.material.material.opacity = 1
    currentHotspot = null

    // Move the camera to the room position
    ToggleMouseLookComponent(false)
    const { floor, room } = GetRoomData(room_name)
    TeleportCamera(floor, room)

    // Enable the navigation again
    ToggleMouseLookComponent(true)
    isReading = false
   }, (fade_duration_ms / 2));
}

function SetCameraRotation(rot)
{
  mainCamera.components['touch-look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(rot.x)
  mainCamera.components['touch-look-controls'].yawObject.rotation.y = THREE.Math.degToRad(rot.y)
}

function SetCameraMovementAnimationAttribute(next_position)
{
  let nPoint = next_position
  nPoint.y = cameraYHeight[currentFloor]

  let nextPositionAttr = 'property: position; to: '+ Vector3ToAframeAttribute(nPoint) + ';'
  let movDurationAttr = 'dur: ' + GetMovementDuration().toString() + ';'
  mainCamera.setAttribute('animation', nextPositionAttr + movDurationAttr + ' easing: linear;');
}

function MoveCameraToNextPosition(next_position)
{
  if(isReading) return
  
	SetGizmoPosition(next_position)
  SetCameraMovementAnimationAttribute(next_position)
  GizmoFadeInOut()
}

function SetGizmoPosition(pos)
{
  positionGizmo.setAttribute('position', pos);
}

function GizmoFadeInOut(fade_duration = 0.7)
{
  positionGizmo.emit('fadein',null, false)
  setTimeout(()=>{
    positionGizmo.emit('fadeout',null, false)
  }, fade_duration * 1000)
}

function AddNavMeshListeners() {
  const navmeshes = document.querySelectorAll('[navigation_collider]')
  navmeshes.forEach(navmesh => {
    navmesh.addEventListener('raycast_intersection_event', (evt) => {
      const room_name = evt.target.parentEl.getAttribute('room_name')

      setHeaderRoomName(room_name)
      MoveCameraToNextPosition(evt.detail)
    })
  });
}

window.addEventListener('load', ()=> {
  AddNavMeshListeners()
})