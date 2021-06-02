import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';

const Poesias: React.FC = () => {
  const {setContent, setSidebarVisibility} = useSidebar();

  const handleClick = useCallback((component: JSX.Element) => {
    setContent(component);
    setSidebarVisibility(true);
  }, [setContent, setSidebarVisibility]);

  return (
    <a-entity id="Poesias" room_name="poesias">
        {/* <!--NavMesh--> */}
        <a-plane id="Poesias-NavMesh-01" position="-37.130 6.73 -4.16" scale="4.810 14.270 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
        <a-plane id="Poesias-NavMesh-02" position="-29.110 6.730 -4.160"  scale="5.190 11.890 1" navigation_collider class="collidable" rotation="-90 90 0" mixin="navMeshMaterial"></a-plane>

        {/* <!--Imagens dos totens--> */}
        <Covers contentType="poesias" />

        {/* <!--Hotspots--> */}
        <a-entity id="poesias_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YKgtiBEAACIAc1rT" />)} mixin="hotspotMixin" class="collidable" position="-36.3 7.41 0.15"></a-entity>
        <a-entity id="poesias_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YK6ssxAAACYAXtDp" />)} mixin="hotspotMixin" class="collidable" position="-35.8‬ 7.41 1.9"></a-entity>
        <a-entity id="poesias_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YK66nRAAACMAXw_m" />)} mixin="hotspotMixin" class="collidable" position="-38.61 7.41 1.9"></a-entity>
        <a-entity id="poesias_hotspot_04" onClick={() => handleClick(<ContentPagination contentId="YK66xBAAACYAXxCg" />)} mixin="hotspotMixin" class="collidable" position="-38.5 7.41 0.15"></a-entity>

        <a-entity id="poesias_hotspot_05" onClick={() => handleClick(<ContentPagination contentId="YK663hAAACMAXxEX" />)} mixin="hotspotMixin" class="collidable" position="-36.2 7.41 -8.7"></a-entity>
        <a-entity id="poesias_hotspot_06" onClick={() => handleClick(<ContentPagination contentId="YK66-BAAACMAXxGN" />)} mixin="hotspotMixin" class="collidable" position="-35.77 7.41 -10.5"></a-entity>
        <a-entity id="poesias_hotspot_07" onClick={() => handleClick(<ContentPagination contentId="YK67JhAAACMAXxJh" />)} mixin="hotspotMixin" class="collidable" position="-38.56 7.41 -10.5"></a-entity>
        <a-entity id="poesias_hotspot_08" onClick={() => handleClick(<ContentPagination contentId="YK67DhAAACQAXxHz" />)} mixin="hotspotMixin" class="collidable" position="-38.56 7.41 -8.7"></a-entity>

        {/* <!--Close Cameras--> */}
        <a-camera id="poesias_closeCam_01" active="false" class="closeCameras" position="-34.68 8.25 -1.15" rotation="-0.00 180 0.00"></a-camera>
        <a-camera id="poesias_closeCam_02" active="false" class="closeCameras" position="-37.68 8.29 -1.18" rotation="-4.43 180 0.00"></a-camera>
        <a-camera id="poesias_closeCam_03" active="false" class="closeCameras" position="-34.68 8.30 0.45" rotation="-4.21 180 0.00"></a-camera>
        <a-camera id="poesias_closeCam_04" active="false" class="closeCameras" position="-37.63 8.22 0.68" rotation="-5.32 180 0.00"></a-camera>

        <a-camera id="poesias_closeCam_05" active="false" class="closeCameras" position="-34.61 8.18 -7.51" rotation="0.00 0.00 0.00"></a-camera>
        <a-camera id="poesias_closeCam_06" active="false" class="closeCameras" position="-37.61 8.18 -7.50" rotation="0.00 0.00 0.00"></a-camera>
        <a-camera id="poesias_closeCam_07" active="false" class="closeCameras" position="-34.67 8.18 -9.43" rotation="0.00 0.00 0.00"></a-camera>
        <a-camera id="poesias_closeCam_08" active="false" class="closeCameras" position="-37.61 8.18 -9.45" rotation="0.00 0.00 0.00"></a-camera>

        {/* <!-- Stair Teleporter--> */}
        {/* <a-entity id="down-stairs-button" position="-30.5 7.6 -1.9" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('exposições')"></a-entity> */}
      </a-entity>
  );
}

export default Poesias;