import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import { useTeleport } from '../../../hooks/Teleport';

import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';
import { useClosedCamera } from '../../../hooks/ClosedCamera';
import orientations from '../../../helpers/orientations';

const Ensaios: React.FC = () => {
  const {setContent, setSidebarVisibility} = useSidebar();
  const {teleportCamera} = useTeleport();
  const {cameraCloseIn} = useClosedCamera();

  const handleClick = useCallback((component: JSX.Element, cameraCloseCoords: any) => {
    cameraCloseIn(cameraCloseCoords);
    setContent(component);
    setSidebarVisibility(true);
  }, [setContent, setSidebarVisibility, cameraCloseIn]);

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
      <a-entity id="ensaios_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YK7cOxAAACMAX6YT" />, {position:{x:-27.926, y: 1.6, z:-3.4},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-28.8 1.6 -2.5"></a-entity>
      <a-entity id="ensaios_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YK7cTBAAACQAX6Zi" />, {position:{x:-30.756, y: 1.6, z:-3.4},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-31.55 1.6 -2.5"></a-entity>
      <a-entity id="ensaios_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YK7cYBAAACUAX6bF" />, {position:{x:-33.446, y: 1.6, z:-3.4},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-34.25 1.6 -2.5"></a-entity> 
      <a-entity id="ensaios_hotspot_04" onClick={() => handleClick(<ContentPagination contentId="YK7ccRAAACMAX6cU" />, {position:{x:-33.446, y: 1.6, z:-4.9},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-34.35 1.6 -5.8"></a-entity>
      <a-entity id="ensaios_hotspot_05" onClick={() => handleClick(<ContentPagination contentId="YK7cgxAAACQAX6do" />, {position:{x:-30.756, y: 1.6, z:-4.9},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-31.65 1.6 -5.8"></a-entity>
      <a-entity id="ensaios_hotspot_06" onClick={() => handleClick(<ContentPagination contentId="YK7ckhAAACYAX6ez" />, {position:{x:-27.926, y: 1.6, z:-4.9},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-28.8 1.6 -5.8"></a-entity>
      <a-entity id="ContoENovelas_upStairs" onClick={() => teleportCamera('contosENovelasStairs')} mixin="upStairs" class="collidable" position="-37.390 1.600 -4.880" scale="0.35 0.35 1" ></a-entity>
    </a-entity>
  );
}

export default Ensaios;