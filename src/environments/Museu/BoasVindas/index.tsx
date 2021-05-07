import React from 'react';
// import { useSidebar } from '../../../hooks/Sidebar';

// import BoasVindasHotspot01 from './content/BoasVindasHotspot01';
// import BoasVindasHotspot02 from './content/BoasVindasHotspot02';
// import BoasVindasHotspot03 from './content/BoasVindasHotspot03';

const BoasVindas: React.FC = () => {
    // const {setContent, setSidebarVisibility} = useSidebar();

    // const handleClick = (component: React.FC) => {
    //     setContent(component);
    //     setSidebarVisibility(true);
    // }

    return (
        <a-entity id="BoasVindas" room_name="bem vindo">
            {/* <!--NavMesh --> */}
            <a-plane id="Corredor_BoasVindas" position="-0.09 0.59 15.5" scale="2.3 35 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas-NavMesh" position="-0.06 0.59 -4.1" scale="8 4 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas_Memorias_Connection" position="5.15 0.59 -4.16" scale="2.4 1.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas_Infantis_Connection" position="-5.25 0.59 -4.21" scale="2.4 1.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            {/* <!--NavMesh--> */}

            {/* <a-entity id="BoasVindas_TeleportPoint" rotation="0 0 0" position="0 1.6 0" class="teleportPoint"></a-entity> */}
            
            {/* <!--NavMesh Occluders--> */}
            <a-box id="BoasVindas_Occluder" position="0.06 0.85 -5.18" scale="1.916 0.502 0.638" class="collidable" mixin="occluderMaterial"></a-box>
            {/* <!--NavMesh Occluders--> */}

            {/* <!--HotSpots--> */}
            {/* <a-entity id="boasvindas_hotspot_01" onClick={() => handleClick(BoasVindasHotspot01)} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="0.05 3 -6.83"></a-entity>
            <a-entity id="boasvindas_hotspot_02" onClick={() => handleClick(BoasVindasHotspot02)} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="3.3 3 -4.1"></a-entity>
            <a-entity id="boasvindas_hotspot_03" onClick={() => handleClick(BoasVindasHotspot03)} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="-3.3 3 -4.1"></a-entity> */}
            {/* <!--HotSpots--> */}

            {/* <!--CloseCameras--> */}
            <a-camera id="boasvindas_closeCam_01" active="false" class="closeCameras" position="0.21 4.74 -5.06" rotation="-1.55 357 0.00"></a-camera>
            <a-camera id="boasvindas_closeCam_02" active="false" class="closeCameras" position="1.45 4.47 -4.29" rotation="0.44 267.36 0.00"></a-camera>
            <a-camera id="boasvindas_closeCam_03" active="false" class="closeCameras" position="-1.51 4.67 -4.09" rotation="-0.44 87.36 0.00"></a-camera>
            {/* <!--CloseCameras--> */}
        </a-entity>
    );
}

export default BoasVindas