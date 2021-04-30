import React from 'react';

const Exposicoes: React.FC = () => {
  return (
    <a-entity id="Exposicoes" room_name="exposições">
    {/* <!--NavMesh--> */}
    <a-plane id="Exposicoes-NavMesh" position="-26.4 3.67 -4.21" scale="19 3.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
    {/* <!--NavMesh--> */}

    {/* <!--NavMesh Occluders--> */}
    <a-box id="Exposicoes Support_1" position="-25.607 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Support_2" position="-25.607 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Support_3" position="-28.05 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Support_4" position="-28.05 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Support_5" position="-30.5 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Support_6" position="-30.5 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>

    <a-box id="Exposicoes Wall_1" position="-22.1 5 -5.85" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Wall_2" position="-22.1 5 -2.35" scale="0.23 2.7 1.165" class="collidable" mixin="occluderMaterial"></a-box>
    {/* <!--NavMesh Occluders--> */}

    {/* <!--Teleport Point--> */}
    <a-entity id="Exposicoes-TeleportPoint" rotation="0 270 0" position="-22.23678 4.43 -4.21" class="teleportPoint"></a-entity>
    {/* <!--Teleport Point--> */}

    {/* <!--Hotspots--> */}
    <a-entity id="exposicoes_hotspot_01" contentType="0" mixin="hotspotMixin" class="collidable" position="-25.35 4.85 -2.55"></a-entity>
    <a-entity id="exposicoes_hotspot_02" contentType="0" mixin="hotspotMixin" class="collidable" position="-25.35 4.85 -5.65"></a-entity>

    <a-entity id="exposicoes_hotspot_03" contentType="2" mixin="hotspotMixin" class="collidable" position="-27.79 4.85 -2.55"></a-entity>
    <a-entity id="exposicoes_hotspot_04" contentType="2" mixin="hotspotMixin" class="collidable" position="-27.79 4.85 -5.65"></a-entity>

    <a-entity id="exposicoes_hotspot_05" contentType="2" mixin="hotspotMixin" class="collidable" position="-30.2 4.85 -2.55"></a-entity>
    <a-entity id="exposicoes_hotspot_06" contentType="2" mixin="hotspotMixin" class="collidable" position="-30.2 4.85 -5.65"></a-entity>
    {/* <!--Hotspots--> */}

    {/* <!--Close Cameras--> */}
    <a-camera id="exposicoes_closeCam_01" active="false" class="closeCameras" position="-24.18 4.79 -2.51" rotation="-1.77 90.24 0.00"></a-camera>
    <a-camera id="exposicoes_closeCam_02" active="false" class="closeCameras" position="-24.27 4.85 -5.64" rotation="-5.76 90.72 0.00"></a-camera>

    <a-camera id="exposicoes_closeCam_03" active="false" class="closeCameras" position="-26.69 4.91 -2.51" rotation="-7.32 89.76 0.00"></a-camera>
    <a-camera id="exposicoes_closeCam_04" active="false" class="closeCameras" position="-26.73 4.82 -5.65" rotation="-6.21 90.72 0.00"></a-camera>

    <a-camera id="exposicoes_closeCam_05" active="false" class="closeCameras" position="-29.16 4.92 -2.48" rotation="-10.20 89.28 0.00"></a-camera>
    <a-camera id="exposicoes_closeCam_06" active="false" class="closeCameras" position="-29.09 4.90 -5.67" rotation="-4.66 90.72 0.00"></a-camera>
    {/* <!--Close Cameras--> */}

    {/* <!-- Stair Teleporter--> */}
    <a-entity id="down-stairs-button" position="-19 4.5 -3.1" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('infantis')"></a-entity>
    <a-entity id="down-stairs-button" position="-33 4.5 -3.2" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #up-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('poesias')"></a-entity>
    {/* <!-- Stair Teleporter--> */}
  </a-entity>
  );
}

export default Exposicoes;