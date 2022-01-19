import React, { useEffect, useRef, useState } from 'react';
import {THREE} from 'aframe';

import NextPositionGizmo from './NextPositionGizmo';

import './scripts/aframe-touch-look-controls';
import './scripts/aframe-navigation-collider';
import { useTeleport } from '../../hooks/Teleport';
import {useClosedCamera} from '../../hooks/ClosedCamera';

export interface IVector3 {
  x: number;
  y: number;
  z: number;
  isVector3?: boolean;
}

interface CameraProps {
  setAttribute: any;
  getAttribute: any;
  object3D: {
    position: any;
    rotation: {
      set: any;
    }
  }
  components: any;
}

const Camera: React.FC = () => {
    const [gizmoPosition, setGizmoPosition] = useState<IVector3>({x: 0, y: 0, z: 5});
    const [cameraAnimation, setCameraAnimation] = useState<string>('');
    const [previousPosition, setPreviousPosition] = useState<IVector3>();

    const cameraRef = useRef<CameraProps>();
    const {cameraAttr} = useTeleport();
    const {setCamera} = useClosedCamera();
    const movementSpeed = 2;

    const Vector3ToAframeAttribute = (vec: IVector3) => {
      return vec.x + ' ' + vec.y + ' ' + vec.z
    }

    useEffect(() => {
      setPreviousPosition(cameraRef.current?.object3D.position) 
    }, []);

    useEffect(() => {
      setCamera(cameraRef.current);
    }, [setCamera]);

    useEffect(() => {
      if(cameraRef.current){
        cameraRef.current.setAttribute('position', cameraAttr.position);

        if(cameraRef.current.components['touch-look-controls'].pitchObject){
          cameraRef.current.components['touch-look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(cameraAttr.rotation.x);
          cameraRef.current.components['touch-look-controls'].yawObject.rotation.y = THREE.Math.degToRad(cameraAttr.rotation.y);
        }
      }
    }, [cameraAttr]);

    const setHeigth = (value: number) => {
      if(value > 0 && value < 2){
        return 1.6;
      }
      if(value > 3 && value < 5){
        return 4.81;
      }
      if(value > 6 && value < 9){
        return 8.05;
      }
      return 1.6;
    }
    
    const GetMovementDuration = (next_position: IVector3) => {
      let direction = new THREE.Vector3();
      let currentPos = new THREE.Vector3(previousPosition?.x, previousPosition?.y, previousPosition?.z);
      let targetPos = new THREE.Vector3(next_position.x, next_position.y, next_position.z);
      
      direction = targetPos.sub(currentPos);
      return (direction.length() / movementSpeed) * 1000
    }

    const SetCameraMovementAnimationAttribute = (next_position: IVector3) => {
      let nPoint = next_position;
      nPoint.y = setHeigth(next_position.y);

      let nextPositionAttr = 'property: position; to: '+ Vector3ToAframeAttribute(nPoint) + ';'
      let movDurationAttr = 'dur: ' + GetMovementDuration(next_position).toString() + ';'

      setCameraAnimation(nextPositionAttr + movDurationAttr + ' easing: linear;');
    }

    const MoveCameraToNextPosition = (next_position: IVector3) => {
      const gizmoAdjustedPosition = {...next_position, y: setHeigth(next_position.y) - 1.05}
      setGizmoPosition(gizmoAdjustedPosition);
      SetCameraMovementAnimationAttribute(next_position);
    }

    const AddNavMeshListeners = () => {
      const navmeshes = document.querySelectorAll('[navigation_collider]')
      navmeshes.forEach(navmesh => {
        navmesh.addEventListener('raycast_intersection_event', (evt: any) => {
          // const room_name = evt.target.parentEl.getAttribute('room_name')
    
          // setHeaderRoomName(room_name)
          MoveCameraToNextPosition(evt.detail)
        })
      });
    }
    
    window.addEventListener('load', () => {
      AddNavMeshListeners()
    })

    return (
      <a-entity id="cameraRig">
        <NextPositionGizmo position={Vector3ToAframeAttribute(gizmoPosition)} />
        <a-camera 
          ref={cameraRef} 
          id="mainCamera" 
          animation={cameraAnimation} 
          touch-look-controls 
          wasd-controls="enabled: false" 
          cursor="rayOrigin : mouse" 
          raycaster="objects : .collidable; far : 6;" 
          active="true"
          fov="88"
        />
      </a-entity>
    );
}

export default Camera;