import React from 'react';

const Poesias: React.FC = () => {
  return (
    <a-entity id="Poesias" room_name="poesias">
        {/* <!--NavMesh--> */}
        <a-plane id="Poesias-NavMesh-01" position="-36.09 6.73 -4.16" scale="4.7 13 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
        <a-plane id="Poesias-NavMesh-02" position="-28.5 6.73 -4.16"  scale="3 10 1" navigation_collider class="collidable" rotation="-90 90 0" mixin="navMeshMaterial"></a-plane>
        {/* <!--NavMesh--> */}

        {/* <!--Teleport Point--> */}
        {/* <a-entity id="Poesias-TeleportPoint" rotation="0 270 0" position="-29.5 7.5 -4.2" class="teleportPoint"></a-entity> */}
        {/* <!--Teleport Point--> */}

        {/* <!--Hotspots--> */}
        {/* <a-entity id="poesias_hotspot_01" contentType="1" mixin="hotspotMixin" class="collidable" position="-34.61 7.41 0.15"></a-entity>
        <a-entity id="poesias_hotspot_02" contentType="1" mixin="hotspotMixin" class="collidable" position="-37.61 7.41 0.15"></a-entity>
        <a-entity id="poesias_hotspot_03" contentType="1" mixin="hotspotMixin" class="collidable" position="-34.61‬ 7.41 1.9"></a-entity>
        <a-entity id="poesias_hotspot_04" contentType="1" mixin="hotspotMixin" class="collidable" position="-37.61 7.41 1.9"></a-entity>

        <a-entity id="poesias_hotspot_05" contentType="1" mixin="hotspotMixin" class="collidable" position="-34.61 7.41 -8.7"></a-entity>
        <a-entity id="poesias_hotspot_06" contentType="1" mixin="hotspotMixin" class="collidable" position="-37.61 7.41 -8.7"></a-entity>
        <a-entity id="poesias_hotspot_07" contentType="1" mixin="hotspotMixin" class="collidable" position="-34.61 7.41 -10.5"></a-entity>
        <a-entity id="poesias_hotspot_08" contentType="1" mixin="hotspotMixin" class="collidable" position="-37.61 7.41 -10.5"></a-entity> */}
        {/* <!--Hotspots--> */}

        {/* <!--Close Cameras--> */}
        <a-camera id="poesias_closeCam_01" active="false" class="closeCameras" position="-34.68 8.25 -1.15" rotation="-0.00 180 0.00"></a-camera>
        <a-camera id="poesias_closeCam_02" active="false" class="closeCameras" position="-37.68 8.29 -1.18" rotation="-4.43 180 0.00"></a-camera>
        <a-camera id="poesias_closeCam_03" active="false" class="closeCameras" position="-34.68 8.30 0.45" rotation="-4.21 180 0.00"></a-camera>
        <a-camera id="poesias_closeCam_04" active="false" class="closeCameras" position="-37.63 8.22 0.68" rotation="-5.32 180 0.00"></a-camera>

        <a-camera id="poesias_closeCam_05" active="false" class="closeCameras" position="-34.61 8.18 -7.51" rotation="0.00 0.00 0.00"></a-camera>
        <a-camera id="poesias_closeCam_06" active="false" class="closeCameras" position="-37.61 8.18 -7.50" rotation="0.00 0.00 0.00"></a-camera>
        <a-camera id="poesias_closeCam_07" active="false" class="closeCameras" position="-34.67 8.18 -9.43" rotation="0.00 0.00 0.00"></a-camera>
        <a-camera id="poesias_closeCam_08" active="false" class="closeCameras" position="-37.61 8.18 -9.45" rotation="0.00 0.00 0.00"></a-camera>
        {/* <!--Close Cameras--> */}

        {/* <!-- Stair Teleporter--> */}
        <a-entity id="down-stairs-button" position="-30.5 7.6 -1.9" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('exposições')"></a-entity>
        {/* <!-- Stair Teleporter-->  */}
      </a-entity>
  );
}

export default Poesias;