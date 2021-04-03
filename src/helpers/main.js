let isReading = false
let currentHotspot

let lastAnimationTimestamp = new Date()
let minEventThreshold = 2000

let lastPose = {
  position: new THREE.Vector3(),
  quaternion : new THREE.Quaternion()
}

function setLastPose(object3D) {
  lastPose.quaternion.setFromEuler(object3D.rotation)
  lastPose.position.set(object3D.position.x, object3D.position.y, object3D.position.z)
}

function getPose(object3D) {
  let pose = {
    position: new THREE.Vector3().set(object3D.position.x, object3D.position.y, object3D.position.z),
    quaternion : new THREE.Quaternion().setFromEuler(object3D.rotation)
  }

  return pose
}

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function AnimateCameraToHotspot(clickedHotspot)
{
  if(isReading) return
  
  const animationData = { percent: 0 }
  const targetObject = mainCamera.object3D
  
  isReading = true
  setLastPose(targetObject)
  currentHotspot = clickedHotspot
  
  let startPose = getPose(targetObject)
  let endPose = getPose(GetAnimationCameraObject3D(clickedHotspot))
  
  AFRAME.ANIME({
    targets: animationData,
    percent: 1,
    duration: 1500,
    easing: 'linear',
    begin: function(anim) {
      ToggleMouseLookComponent(false)
      LoadContentFromHotspot(clickedHotspot.object3D)
      FadeCurrentHotspot(false)

      lastAnimationTimestamp = new Date()
    },
    update: function() {
      const deltaPosition = new THREE.Vector3().lerpVectors(startPose.position, endPose.position, animationData.percent)

      targetObject.position.set(deltaPosition.x, deltaPosition.y, deltaPosition.z)
      THREE.Quaternion.slerp(startPose.quaternion, endPose.quaternion, targetObject.quaternion, animationData.percent)
    },
  })
}

function ReturnCameraToNavigation()
{
  if(!isReading) return

  const animationData = { percent: 0 }
  const targetObject = mainCamera.object3D
  
  isReading = false
  
  let startPose = getPose(targetObject)
  let endPose = lastPose
  
  AFRAME.ANIME({
    targets: animationData,
    percent: 1,
    duration: 1500,
    easing: 'linear',
    begin: function() {
      FadeCurrentHotspot(true)
      currentHotspot = null
      
      lastAnimationTimestamp = new Date()
    },
    update: function() {
      const deltaPosition = new THREE.Vector3().lerpVectors(startPose.position, endPose.position, animationData.percent)

      targetObject.position.set(deltaPosition.x, deltaPosition.y, deltaPosition.z)
      THREE.Quaternion.slerp(startPose.quaternion, endPose.quaternion, targetObject.quaternion, animationData.percent)
    },
    complete: function(anim) {
      ToggleMouseLookComponent(true)
    }
  })
}

function ToggleMouseLookComponent(newValue)
{
  mainCamera.getAttribute('touch-look-controls').isAnimating = !newValue;
}

function HotspotOnClickEvent(evt) {
  const currentTime = new Date()
  const elapsed = currentTime - lastAnimationTimestamp

  if(elapsed <= minEventThreshold) return

  AnimateCameraToHotspot(evt.target)
}

function GetAnimationCameraObject3D(selectedHotspot)
{
  const hotspotId = selectedHotspot.getAttribute('id')
  const closeCamId = hotspotId.replace('hotspot', 'closeCam')
  const closecam = document.getElementById(closeCamId)
  
  return closecam.object3D
}

function FadeCurrentHotspot(fadeIn)
{
  if(fadeIn)
    currentHotspot.setAttribute('animation', "property : components.material.material.opacity; from : 0; to : 1; dur :1000;")
  else
    currentHotspot.setAttribute('animation', "property : components.material.material.opacity; from : 1; to : 0; dur :1000;")
}

function AddHotspotsListeners()
{
  const hotspotsCount = 32
  const hotspots = document.querySelectorAll('[mixin="hotspotMixin"]')
  
  if(hotspots.length < hotspotsCount)
  {
    setTimeout(AddHotspotsListeners, 500)
    return
  }

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', HotspotOnClickEvent, true)
  })
}

window.addEventListener('load', ()=> {
  AddHotspotsListeners()
})