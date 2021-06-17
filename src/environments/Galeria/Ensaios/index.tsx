import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import { useTeleport } from '../../../hooks/Teleport';

import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';

const Ensaios: React.FC = () => {
  const {setContent, setSidebarVisibility} = useSidebar();
  const {teleportCamera} = useTeleport();

  const handleClick = useCallback((component: JSX.Element) => {
    setContent(component);
    setSidebarVisibility(true);
  }, [setContent, setSidebarVisibility]);

  return (
    <a-entity id="Ensaios" room_name="ensaios">
    {/* <!--NavMesh--> */}
    <a-plane id="Ensaios-NavMesh" position="-32.880 0.59 -4.12" scale="14 3.63 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

    {/* <!--NavMesh Occluders--> */}
    <a-box id="Ensaios Wall_1" position="-26.534 1.95 -2.620" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Ensaios Wall_2" position="-26.534 1.95 -5.720" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>

    {/* <!--Imagens dos totens--> */}
    <Covers contentType="ensaios" />

    {/* <!--Hotspots--> */}
    <a-entity id="ensaios_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YK7cOxAAACMAX6YT" />)} mixin="hotspotMixin" class="collidable" position="-28.8 1.6 -2.5"></a-entity>
    <a-entity id="ensaios_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YK7cTBAAACQAX6Zi" />)} mixin="hotspotMixin" class="collidable" position="-31.55 1.6 -2.5"></a-entity>
    <a-entity id="ensaios_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YK7cYBAAACUAX6bF" />)} mixin="hotspotMixin" class="collidable" position="-34.25 1.6 -2.5"></a-entity> 
    <a-entity id="ensaios_hotspot_04" onClick={() => handleClick(<ContentPagination contentId="YK7ccRAAACMAX6cU" />)} mixin="hotspotMixin" class="collidable" position="-34.35 1.6 -5.8"></a-entity>
    <a-entity id="ensaios_hotspot_05" onClick={() => handleClick(<ContentPagination contentId="YK7cgxAAACQAX6do" />)} mixin="hotspotMixin" class="collidable" position="-31.65 1.6 -5.8"></a-entity>
    <a-entity id="ensaios_hotspot_06" onClick={() => handleClick(<ContentPagination contentId="YK7ckhAAACYAX6ez" />)} mixin="hotspotMixin" class="collidable" position="-28.8 1.6 -5.8"></a-entity>
    <a-entity id="ContoENovelas_upStairs" onClick={() => teleportCamera('contosENovelasStairs')} mixin="upStairs" class="collidable" position="-37.390 1.600 -4.880" scale="0.35 0.35 1" ></a-entity>

    {/* <!--Close Cameras--> */}
    <a-camera id="ensaios_closeCam_01" active="false" class="closeCameras" position="-29.56 1.45 -4.78" rotation="0.00 0.00 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_02" active="false" class="closeCameras" position="-32.03 1.45 -4.78" rotation="-1.77 359.04 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_03" active="false" class="closeCameras" position="-34.61 1.45 -4.88" rotation="0.00 0.00 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_04" active="false" class="closeCameras" position="-29.66 1.44 -3.46" rotation="0.89 179.52 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_05" active="false" class="closeCameras" position="-32.10 1.43 -3.43" rotation="-0.89 178.65 0.00"></a-camera>
    <a-camera id="ensaios_closeCam_06" active="false" class="closeCameras" position="-34.56 1.42 -3.38" rotation="-2.88 180.00 0.00"></a-camera>
  </a-entity>
  );
}

export default Ensaios;