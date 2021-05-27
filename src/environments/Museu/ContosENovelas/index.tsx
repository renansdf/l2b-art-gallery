import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import ContentPagination from '../../../components/ContentPagination';

const ContosENovelas: React.FC = () => {
  const {setContent, setSidebarVisibility} = useSidebar();

  const handleClick = useCallback((component: JSX.Element) => {
    setContent(component);
    setSidebarVisibility(true);
  }, [setContent, setSidebarVisibility]);

  return (
    <a-entity id="ContosENovelas" room_name="contos & novelas">
        {/* <!--NavMesh--> */}
        <a-plane id="ContosENovelas-NavMesh" position="-20.870 3.67 -4.170" scale="32.520 4.430 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
        {/* <!--NavMesh--> */}

        {/* <!--NavMesh Occluders--> */}
        <a-box id="ContosENovelas Support_1" position="-27.227 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
        <a-box id="ContosENovelas Support_2" position="-27.227 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
        <a-box id="ContosENovelas Support_3" position="-29.470 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
        <a-box id="ContosENovelas Support_4" position="-29.470 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>

        <a-box id="ContosENovelas Wall_1" position="-23.590 5 -5.650" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>
        <a-box id="ContosENovelas Wall_2" position="-23.590 5 -2.620" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>
        {/* <!--NavMesh Occluders--> */}

        {/* <a-entity id="ContosENovelas-TeleportPoint" rotation="0 90 0" position="14.8 3.1 -4.2" class="teleportPoint"></a-entity> */}

        {/* <!--Hotspots--> */}
        <a-entity id="ContoENovelas_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YK7F4xAAACUAX0KH" />)} mixin="hotspotMixin" class="collidable" position="-26.35 4.85 -2.55"></a-entity>
        <a-entity id="ContoENovelas_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YK7NYBAAACQAX2On" />)} mixin="hotspotMixin" class="collidable" position="-28.65 4.85 -2.55"></a-entity>

        <a-entity id="ContoENovelas_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YK7NexAAACUAX2Qp" />)} mixin="hotspotMixin" class="collidable" position="-28.65 4.85 -6"></a-entity>
        <a-entity id="ContoENovelas_hotspot_04" onClick={() => handleClick(<ContentPagination contentId="YK7NlxAAACMAX2Sz" />)} mixin="hotspotMixin" class="collidable" position="-26.35 4.85 -6"></a-entity>
        {/* <!--Hotspots--> */}

        {/* <!--Close Cameras--> */}
        <a-camera id="contosenovelas_closeCam_01" active="false" class="closeCameras" position="16.64 3.89 -2.75" rotation="-45.00 179.52 0.00"></a-camera>
        <a-camera id="contosenovelas_closeCam_02" active="false" class="closeCameras" position="16.66 3.89 -5.14" rotation="-41.67 358.56 0.00"></a-camera>
        <a-camera id="contosenovelas_closeCam_03" active="false" class="closeCameras" position="19.54 3.88 -2.74" rotation="-45.89 178.08 0.00"></a-camera>
        <a-camera id="contosenovelas_closeCam_04" active="false" class="closeCameras" position="19.54 3.94 -5.19" rotation="-57.86 356.16 0.00"></a-camera>
        {/* <!--Close Cameras--> */}

        {/* <!-- Stair Teleporter--> */}
        {/* <a-entity id="down-stairs-button" position="20.2 4.5 -6" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('memórias')"></a-entity> */}
        {/* <!-- Stair Teleporter--> */}
      </a-entity>
  );
}

export default ContosENovelas;