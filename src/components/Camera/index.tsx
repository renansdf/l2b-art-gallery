import React, { useEffect, useRef, useState } from 'react';
import {THREE} from 'aframe';

import NextPositionGizmo from './NextPositionGizmo';

import './scripts/aframe-touch-look-controls';
import './scripts/aframe-navigation-collider';
import { useTeleport } from '../../hooks/Teleport';
// import '../../helpers/navigation3DFunctions';

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
    rotation: {
      set: any;
    }
  }
  components: any;
}

const Camera: React.FC = () => {
    const [gizmoPosition, setGizmoPosition] = useState<IVector3>({x: 0, y: 0, z: 5});
    const [cameraAnimation, setCameraAnimation] = useState<string>('');

    const cameraRef = useRef<CameraProps>();
    const {cameraAttr} = useTeleport();

    useEffect(() => {
      if(cameraRef.current){

        // console.log(cameraAttr, cameraRef.current.components['touch-look-controls']);
        cameraRef.current.setAttribute('position', cameraAttr.position);
        // cameraRef.current.setAttribute('rotation', cameraAttr.rotation);
        // cameraRef.current.components['touch-look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(cameraAttr.rotation.x);
        cameraRef.current.object3D.rotation.set(
          THREE.Math.degToRad(cameraAttr.rotation.x),
          THREE.Math.degToRad(cameraAttr.rotation.y),
          THREE.Math.degToRad(cameraAttr.rotation.z)
        );
      }
    }, [cameraAttr]);

    const movementSpeed = 15;

    const Vector3ToAframeAttribute = (vec: IVector3) => {
      return vec.x + ' ' + vec.y + ' ' + vec.z
    }

    const GetMovementDuration = () => {
      let direction = new THREE.Vector3();
      let currentPos = new THREE.Vector3(cameraAttr.position.x, cameraAttr.position.y, cameraAttr.position.z);
      let targetPos = new THREE.Vector3(gizmoPosition.x, gizmoPosition.y, gizmoPosition.z);
      
      direction = targetPos.sub(currentPos)
      return (direction.length() / movementSpeed) * 1000
    }

    const SetCameraMovementAnimationAttribute = (next_position: IVector3) => {
      let nPoint = next_position
      nPoint.y = next_position.y+0.5;

      let nextPositionAttr = 'property: position; to: '+ Vector3ToAframeAttribute(nPoint) + ';'
      let movDurationAttr = 'dur: ' + GetMovementDuration().toString() + ';'

      setCameraAnimation(nextPositionAttr + movDurationAttr + ' easing: linear;');
    }

    const MoveCameraToNextPosition = (next_position: IVector3) => {
      const gizmoAdjustedPosition = {...next_position, y: next_position.y - 0.45}
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
    
    window.addEventListener('load', ()=> {
      AddNavMeshListeners()
    })

    return (
      <a-entity id="cameraRig">
        <NextPositionGizmo position={Vector3ToAframeAttribute(gizmoPosition)} />
        <a-camera ref={cameraRef} id="mainCamera" animation={cameraAnimation} touch-look-controls wasd-controls="enabled: false" cursor="rayOrigin : mouse" raycaster="objects : .collidable; far : 10;" active="true" />
      </a-entity>
    );
}

export default Camera;