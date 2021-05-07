import React from 'react';
// import { useSidebar } from '../../../hooks/Sidebar';

// import ContosENovelas01 from './content/ContosENovelas01';
// import ContosENovelas02 from './content/ContosENovelas02';
// import ContosENovelas03 from './content/ContosENovelas03';
// import ContosENovelas04 from './content/ContosENovelas04';

const ContosENovelas: React.FC = () => {
  // const {setContent, setSidebarVisibility} = useSidebar();

  // const handleClick = (component: React.FC) => {
  //     setContent(component);
  //     setSidebarVisibility(true);
  // }

  return (
    <a-entity id="ContosENovelas" room_name="contos & novelas">
        {/* <!--NavMesh--> */}
        <a-plane id="ContosENovelas-NavMesh-01" position="18.33 3.64 -3.98" scale="7.2 2.8 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
        <a-plane id="ContosENovelas-NavMesh-02" position="9.97 3.64 -4.18" scale="9 5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
        {/* <!--NavMesh--> */}

        {/* <a-entity id="ContosENovelas-TeleportPoint" rotation="0 90 0" position="14.8 3.1 -4.2" class="teleportPoint"></a-entity> */}

        {/* <!--Hotspots--> */}
        {/* <a-entity id="contosenovelas_hotspot_01" onClick={() => handleClick(ContosENovelas01)} contentType="1" mixin="hotspotMixin" class="collidable" position="16.67 4 -2.65"></a-entity>
        <a-entity id="contosenovelas_hotspot_02" onClick={() => handleClick(ContosENovelas02)} contentType="1" mixin="hotspotMixin" class="collidable" position="16.67 4 -5.25"></a-entity>
        <a-entity id="contosenovelas_hotspot_03" onClick={() => handleClick(ContosENovelas03)} contentType="1" mixin="hotspotMixin" class="collidable" position="19.55 4 -2.65"></a-entity>
        <a-entity id="contosenovelas_hotspot_04" onClick={() => handleClick(ContosENovelas04)} contentType="1" mixin="hotspotMixin" class="collidable" position="19.55 4 -5.25"></a-entity> */}
        {/* <!--Hotspots--> */}

        {/* <!--Close Cameras--> */}
        <a-camera id="contosenovelas_closeCam_01" active="false" class="closeCameras" position="16.64 3.89 -2.75" rotation="-45.00 179.52 0.00"></a-camera>
        <a-camera id="contosenovelas_closeCam_02" active="false" class="closeCameras" position="16.66 3.89 -5.14" rotation="-41.67 358.56 0.00"></a-camera>
        <a-camera id="contosenovelas_closeCam_03" active="false" class="closeCameras" position="19.54 3.88 -2.74" rotation="-45.89 178.08 0.00"></a-camera>
        <a-camera id="contosenovelas_closeCam_04" active="false" class="closeCameras" position="19.54 3.94 -5.19" rotation="-57.86 356.16 0.00"></a-camera>
        {/* <!--Close Cameras--> */}

        {/* <!-- Stair Teleporter--> */}
        <a-entity id="down-stairs-button" position="20.2 4.5 -6" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('memórias')"></a-entity>
        {/* <!-- Stair Teleporter--> */}
      </a-entity>
  );
}

export default ContosENovelas;