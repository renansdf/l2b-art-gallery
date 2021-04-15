import React from 'react';
import {navMeshMaterial, occluderMaterial, hotspotMixin} from '../mixins';

const Memorias: React.FC = () => {
    return (
        <a-entity id="Memorias" room_name="memórias">
            {/* <!--NavMesh--> */}
            <a-plane id="Memorias-NavMesh" position="13.32 0.6 -4.21" scale="14 4 1" navigation_collider class="collidable" rotation="-90 0 0" mixin={navMeshMaterial}></a-plane>
            {/* <!--NavMesh--> */}

            {/* <!--NavMesh Occluders--> */}
            <a-box id="Memorias Wall_1" position="6.341 1.95 -2.45" scale="0.08 2.79 1.8" class="collidable" mixin={occluderMaterial}></a-box>
            <a-box id="Memorias Wall_2" position="6.341 1.95 -5.95" scale="0.08 2.79 1.8" class="collidable" mixin={occluderMaterial}></a-box>
            {/* <!--NavMesh Occluders--> */}

            {/* <!--Teleport Point--> */}
            <a-entity id="Memorias-TeleportPoint" rotation="0 90 0" position="6.72111 0 -4.21" class="teleportPoint"></a-entity>
            {/* <!--Teleport Point--> */}

            {/* <!--Hotspots--> */}
            <a-entity id="memorias_hotspot_01" contentType="1" mixin={hotspotMixin} class="collidable" position="10.78 1.4 -6"></a-entity>
            <a-entity id="memorias_hotspot_02" contentType="1" mixin={hotspotMixin} class="collidable" position="10.78 1.4 -2.5"></a-entity>
            {/* <!--Hotspots--> */}

            {/* <!--Close Cameras--> */}
            <a-camera id="memorias_closeCam_01" active="false" class="closeCameras" position="10.76 1.20 -5.95" rotation="-36.58 359.52 0.00"></a-camera>
            <a-camera id="memorias_closeCam_02" active="false" class="closeCameras" position="10.75 1.22 -2.47" rotation="-40.34 180.00 0.00"></a-camera>
            {/* <!--Close Cameras--> */}

            {/* <!-- Stair Teleporter--> */}
            {/* <a-entity id="down-stairs-button" position="16 1.5 -6" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #up-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('contos & novelas')"></a-entity> */}
            {/* <!-- Stair Teleporter--> */}
        </a-entity>
    )
}

export default Memorias;