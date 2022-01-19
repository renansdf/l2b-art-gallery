/*global AFRAME*/

import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import {fadeOut, fadeIn} from '../helpers/effects';
import { useMusic } from './AmbientSound';

interface IObject3D {
  position: any;
  rotation: any;
}

interface ICameraCoordinates{
  x: number;
  y: number;
  z: number;
}

interface ClosedCameraContextData {
  cameraCloseIn: (endPosition: any, hotspot?: any) => void;
  cameraReturnNavigation: () => void;
  setCamera: (camera: any) => void;
  cameraCoordinates: ICameraCoordinates;
  getNormalizedRotationTo: (direction: 'n'|'s'|'e'|'w') => number;
}

const ClosedCamera = createContext<ClosedCameraContextData>({} as ClosedCameraContextData)

const ClosedCameraProvider: React.FC = ({children}) => {
  const [isReading, setIsReading] = useState(false);
  const [currentCloseIn, setCurrentCloseIn] = useState<IObject3D>({position: false, rotation: false});
  const [camera, setCamera] = useState<any>();
  const [currentHotspot, setCurrentHotspot] = useState<any>();
  const [cameraCoordinates, setCameraCoordinates] = useState<ICameraCoordinates>({x:0, y:0, z:0});
  const [ticks, setTicks] = useState(0);
  const {setIsMusicPlaying} = useMusic();

  const THREE = AFRAME.THREE;

  function getPose(object3D: IObject3D) {
    let pose = {
      position: new THREE.Vector3().set(object3D.position.x, object3D.position.y, object3D.position.z),
      rotation: new THREE.Vector3().set(object3D.rotation.x, object3D.rotation.y, object3D.rotation.z)
    }
  
    return pose
  }

  function getCameraPoseObject3D() {
    let obi3D = {
      position: {
        x: camera.object3D.position.x,
        y: camera.object3D.position.y,
        z: camera.object3D.position.z,
      },
      rotation: {
        x: camera.components['touch-look-controls'].pitchObject.rotation.x,
        y: camera.components['touch-look-controls'].yawObject.rotation.y,
        z: 0
      }
    }

    return obi3D;
  }

  const animateCamera = (object3D?: any) => {
    if(isReading) return
    setIsReading(true)
    
    let startPose = getCameraPoseObject3D()
    let endPose: any
    const animationData = { percent: 0 }
    
    if(object3D){
      endPose = getPose(object3D)
      setCurrentCloseIn(startPose)
    } else {
      endPose = currentCloseIn;
    }

    AFRAME.ANIME({
      targets: animationData,
      percent: 1,
      duration: 1500,
      easing: 'linear',
      begin: function() {
        // ToggleMouseLookComponent(false)
        // FadeCurrentHotspot(false)

        // lastAnimationTimestamp = new Date()
      },
      update: function() {
        const deltaPosition = new THREE.Vector3().lerpVectors(startPose.position, endPose.position, animationData.percent)
        const deltaRotation = new THREE.Vector3().lerpVectors(startPose.rotation, endPose.rotation, animationData.percent)

        camera && 
        camera.object3D.position.set(deltaPosition.x, deltaPosition.y, deltaPosition.z);
        camera.components['touch-look-controls'].pitchObject.rotation.x = deltaRotation.x;
        camera.components['touch-look-controls'].yawObject.rotation.y = deltaRotation.y;
      },
      complete: function() {
        setIsReading(false)
      }
    })
  }

  const cameraCloseIn = (endPosition: any, hotspot?: any) => {
    animateCamera(endPosition);
    fadeOut(hotspot);
    setCurrentHotspot(hotspot);
  }
  const cameraReturnNavigation = () => {
    animateCamera();
    fadeIn(currentHotspot);
  }

  const getNormalizedRotationTo = (direction: 'n'|'s'|'e'|'w') => {
    const currentYaw = camera.components['touch-look-controls'].yawObject.rotation.y;
    if (direction === 'n'){
      if(currentYaw > 3){
        return 6.275;
      } else if(currentYaw < -3){
        return -6.275;
      } else {
        return 0;
      }
    } else if (direction === 's'){
      if(currentYaw > 0){
        return 3.125;
      } else {
        return -3.125;
      }
    } else if(direction === 'e'){
      if(currentYaw > 0){
        return 1.576;
      } else {
        return -4.735;
      }
    } else if(direction === 'w'){
      if(currentYaw > 0){
        if(currentYaw < 2){
          return 0;
        }
        return 4.735;
      } else {
        return -1.576;
      }
    } 
    return 1
  }

  useEffect(() => {
    if(camera){
      const intervalId = setInterval(() => {
        if(camera.object3D.position.z < 0){
          setIsMusicPlaying(false);
          clearInterval(intervalId);
        }
      }, 2500)
    }
  },[camera, setIsMusicPlaying]);

  useEffect(() => {
    if(camera){
      setTimeout(() => {
        setCameraCoordinates({
          x: camera.object3D.position.x,
          y: camera.object3D.position.y,
          z: camera.object3D.position.z
        })
        setTicks(ticks + 1)
      },5000)
    }
  }, [ticks, setTicks,camera]);

  return (
    <ClosedCamera.Provider value={{cameraCloseIn, cameraReturnNavigation, setCamera, cameraCoordinates, getNormalizedRotationTo}}>
      {children}
    </ClosedCamera.Provider>
  )
}

function useClosedCamera(): ClosedCameraContextData {
  const context = useContext(ClosedCamera);

  if (!context) {
    throw new Error('The context must be used within an ClosedCamera Provider');
  }

  return context;
}

export { useClosedCamera, ClosedCameraProvider }