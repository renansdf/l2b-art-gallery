import React, { useState } from 'react';
import {THREE} from 'aframe';

import NextPositionGizmo from './NextPositionGizmo';

import './scripts/aframe-touch-look-controls';
import './scripts/aframe-navigation-collider';
// import '../../helpers/navigation3DFunctions';

export interface IVector3 {
  x: number;
  y: number;
  z: number;
  isVector3?: boolean;
}

const Camera: React.FC = () => {
    const [gizmoPosition, setGizmoPosition] = useState<IVector3>({x: 0, y: 0, z: 5});
    const [cameraPosition, setCameraPosition] = useState<IVector3>({x: 0, y: 1.6, z: 30});
    const [cameraAnimation, setCameraAnimation] = useState<string>('');

    let currentFloor = 0;
    const movementSpeed = 5

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

    const Vector3ToAframeAttribute = (vec: IVector3) => {
      return vec.x + ' ' + vec.y + ' ' + vec.z
    }

    const GetMovementDuration = () => {
      let direction = new THREE.Vector3();
      let currentPos = new THREE.Vector3(cameraPosition.x, cameraPosition.y, cameraPosition.z);
      let targetPos = new THREE.Vector3(gizmoPosition.x, gizmoPosition.y, gizmoPosition.z);
      
      direction = targetPos.sub(currentPos)
      return (direction.length() / movementSpeed) * 1000
    }

    const SetCameraMovementAnimationAttribute = (next_position: IVector3) => {
      let nPoint = next_position
      nPoint.y = cameraYHeight[currentFloor]

      let nextPositionAttr = 'property: position; to: '+ Vector3ToAframeAttribute(nPoint) + ';'
      let movDurationAttr = 'dur: ' + GetMovementDuration().toString() + ';'

      setCameraPosition(nPoint);
      setCameraAnimation(nextPositionAttr + movDurationAttr + ' easing: linear;');
    }

    const MoveCameraToNextPosition = (next_position: IVector3) => {
      const gizmoAdjustedPosition = {...next_position, y: cameraYHeight[currentFloor] - 1}
      setGizmoPosition(gizmoAdjustedPosition);
      SetCameraMovementAnimationAttribute(next_position)
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
      <>
        <NextPositionGizmo position={Vector3ToAframeAttribute(gizmoPosition)} />
        <a-camera id="mainCamera" position="0 1.6 30" animation={cameraAnimation} touch-look-controls wasd-controls="enabled: false" cursor="rayOrigin : mouse" raycaster="objects : .collidable; far : 10;" rotation="0 0 0" active="true" />
      </>
    );
}

export default Camera;