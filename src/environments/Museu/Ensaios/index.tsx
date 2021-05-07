import React from 'react';

const Ensaios: React.FC = () => {
  return (
    <a-entity id="Ensaios" room_name="ensaios">
    {/* <!--NavMesh--> */}
    <a-plane id="Ensaios-NavMesh" position="-33.54 0.59 -4.12" scale="14 3.63 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
    {/* <!--NavMesh--> */}

    {/* <!--NavMesh Occluders--> */}
    <a-box id="Ensaios Wall_1" position="-26.539 1.95 -2.4" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Ensaios Wall_2" position="-26.534 1.95 -5.85" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
    {/* <!--NavMesh Occluders--> */}

    {/* <!--Teleport Point--> */}
    {/* <a-entity id="Ensaios-TeleportPoint" rotation="0 270 0" position="-26.74456 0.14515 -4.12" class="teleportPoint"></a-entity> */}
    {/* <!--Teleport Point--> */}

    {/* <!--Hotspots--> */}
    {/* <a-entity id="ensaios_hotspot_01" contentType="0" mixin="hotspotMixin" class="collidable" position="-29.6 1.6 -5.8"></a-entity>
    <a-entity id="ensaios_hotspot_02" contentType="0" mixin="hotspotMixin" class="collidable" position="-32.02 1.6 -5.8"></a-entity>
    <a-entity id="ensaios_hotspot_03" contentType="0" mixin="hotspotMixin" class="collidable" position="-34.55 1.6 -5.8"></a-entity>
    <a-entity id="ensaios_hotspot_04" contentType="0" mixin="hotspotMixin" class="collidable" position="-29.6 1.6 -2.5"></a-entity>
    <a-entity id="ensaios_hotspot_05" contentType="0" mixin="hotspotMixin" class="collidable" position="-32.02 1.6 -2.5"></a-entity>
    <a-entity id="ensaios_hotspot_06" contentType="0" mixin="hotspotMixin" class="collidable" position="-34.55 1.6 -2.5"></a-entity> */}
    {/* <!--Hotspots--> */}

    {/* <!--Close Cameras--> */}
    <a-camera id="ensaios_closeCam_01" active="false" class="closeCameras" position="-29.56 1.45 -4.78" rotation="0.00 0.00 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_02" active="false" class="closeCameras" position="-32.03 1.45 -4.78" rotation="-1.77 359.04 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_03" active="false" class="closeCameras" position="-34.61 1.45 -4.88" rotation="0.00 0.00 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_04" active="false" class="closeCameras" position="-29.66 1.44 -3.46" rotation="0.89 179.52 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_05" active="false" class="closeCameras" position="-32.10 1.43 -3.43" rotation="-0.89 178.65 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_06" active="false" class="closeCameras" position="-34.56 1.42 -3.38" rotation="-2.88 180.00 0.00"></a-camera>
    {/* <!--Close Cameras--> */}
  </a-entity>
  );
}

export default Ensaios;