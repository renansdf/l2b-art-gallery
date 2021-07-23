import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import { useTeleport } from '../../../hooks/Teleport';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import orientations from '../../../helpers/orientations';
import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';

const Poesias: React.FC = () => {
  const {setContent, setSidebarVisibility} = useSidebar();
  const {teleportCamera} = useTeleport();
  const {cameraCloseIn} = useClosedCamera();

  const handleClick = useCallback((component: JSX.Element, CameraCloseCoords: any) => {
    cameraCloseIn(CameraCloseCoords);
    setContent(component);
    setSidebarVisibility(true);
  }, [setContent, setSidebarVisibility, cameraCloseIn]);

  return (
    <a-entity id="Poesias" room_name="poesias">
        {/* <!--NavMesh--> */}
        <a-plane id="Poesias-NavMesh-01" position="-37.130 7.010 -4.16" scale="4.810 14.270 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
        <a-plane id="Poesias-NavMesh-02" position="-29.110 7.010 -4.160"  scale="5.190 11.890 1" navigation_collider class="collidable" rotation="-90 90 0" mixin="navMeshMaterial"></a-plane>

        {/* <!--Imagens dos totens--> */}
        <Covers contentType="poesias" />

        {/* <!--Hotspots--> */}
        <a-entity id="poesias_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YKgtiBEAACIAc1rT" />, {position:{x:-36.6, y: 8.45, z:-0.65},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-36.3 7.41 0.15"></a-entity>
        <a-entity id="poesias_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YK6ssxAAACYAXtDp" />, {position:{x:-36.3, y: 8.45, z:1.1},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-35.8‬ 7.41 1.9"></a-entity>
        <a-entity id="poesias_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YK66nRAAACMAXw_m" />, {position:{x:-39.2, y: 8.45, z:1.1},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-38.61 7.41 1.9"></a-entity>
        <a-entity id="poesias_hotspot_04" onClick={() => handleClick(<ContentPagination contentId="YK66xBAAACYAXxCg" />, {position:{x:-39.2, y: 8.45, z:-0.65},rotation:orientations.costas})} mixin="hotspotMixin" class="collidable" position="-38.5 7.41 0.15"></a-entity>

        <a-entity id="poesias_hotspot_05" onClick={() => handleClick(<ContentPagination contentId="YK663hAAACMAXxEX" />, {position:{x:-35.7, y: 8.45, z:-7.65},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-36.2 7.41 -8.7"></a-entity>
        <a-entity id="poesias_hotspot_06" onClick={() => handleClick(<ContentPagination contentId="YK66-BAAACMAXxGN" />, {position:{x:-35.3, y: 8.45, z:-9.5},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-35.77 7.41 -10.5"></a-entity>
        <a-entity id="poesias_hotspot_07" onClick={() => handleClick(<ContentPagination contentId="YK67JhAAACMAXxJh" />, {position:{x:-38, y: 8.45, z:-9.5},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-38.56 7.41 -10.5"></a-entity>
        <a-entity id="poesias_hotspot_08" onClick={() => handleClick(<ContentPagination contentId="YK67DhAAACQAXxHz" />, {position:{x:-38, y: 8.45, z:-7.65},rotation:orientations.frente})} mixin="hotspotMixin" class="collidable" position="-38.56 7.41 -8.7"></a-entity>
        <a-entity id="poesias_downStairs" onClick={() => teleportCamera('contosENovelasStairs')} mixin="downStairs" class="collidable" position="-31.870 7.800 -2.620" scale="0.35 0.35 1" ></a-entity>
      </a-entity>
  );
}

export default Poesias;