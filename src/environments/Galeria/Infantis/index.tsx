import React, { useCallback } from 'react';
import { useOverlay } from '../../../hooks/Overlay';
import { useTeleport } from '../../../hooks/Teleport';

import ContentGallery from '../../../components/ContentGallery';
import Covers from '../../../components/Covers';

const Infantis: React.FC = () => {
  const {setContent, setOverlayVisibility} = useOverlay();
  const {teleportCamera} = useTeleport();

  const handleClick = useCallback((component: JSX.Element) => {
    setContent(component);
    setOverlayVisibility(true);
  }, [setContent, setOverlayVisibility]);

  return (
    <a-entity id="Infantis" room_name="infantis">
      {/* <!--NavMesh --> */}
      <a-plane id="Infantis_Ensaios_Connection" position="-23.55 0.59 -4.12" scale="6 1.7 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
      <a-plane id="Infantis-NavMesh" position="-13.44 0.59 -4" scale="14 1.660 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

      {/* <!--NavMesh Occluders--> */}
      <a-box id="Infantis Wall_1" position="-7.490 1.96 -2.610" scale="0.08 2.75 1.73" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="Infantis Wall_2" position="-7.490 1.96 -5.680" scale="0.08 2.75 1.73" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="Infantis Wall_3" position="-21.230 1.96 -2.330" scale="0.31 2.823 2.204" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="Infantis Wall_4" position="-21.230 1.96 -5.967" scale="0.31 2.823 2.189" class="collidable" mixin="occluderMaterial"></a-box>

      {/* <!--Imagens dos totens--> */}
      <Covers contentType="infantis" />

      {/* <!--HotSpots--> */}
      <a-entity id="infantis_hotspot_01" onClick={() => handleClick(<ContentGallery contentId="YK7jQhAAACMAX8bf" />)} mixin="hotspotMixin" class="collidable" position="-10.520 1.1 -5.33"></a-entity>
      <a-entity id="infantis_hotspot_02" onClick={() => handleClick(<ContentGallery contentId="YK75phAAACUAYCos" />)} mixin="hotspotMixin" class="collidable" position="-13.620 1.1 -2.67"></a-entity>
      <a-entity id="infantis_hotspot_03" onClick={() => handleClick(<ContentGallery contentId="YK75vRAAACMAYCqR" />)} mixin="hotspotMixin" class="collidable" position="-16.410 1.1 -5.2"></a-entity>
      <a-entity id="infantis_hotspot_04" onClick={() => handleClick(<ContentGallery contentId="YK751BAAACMAYCsB" />)} mixin="hotspotMixin" class="collidable" position="-10.130 1.1 -2.67"></a-entity>
      <a-entity id="infantis_upStairs" onClick={() => teleportCamera('contosENovelas')} mixin="upStairs" class="collidable" position="-19.530 1.500 -3.250" scale="0.35 0.35 1" ></a-entity>

      {/* <!--CloseCameras--> */}
      <a-camera id="infantis_closeCam_01" active="false" class="closeCameras" position="-9.43 0.98 -5.20" rotation="-43.45 0 0.00"></a-camera>
      <a-camera id="infantis_closeCam_02" active="false" class="closeCameras" position="-11.87 0.99 -2.71" rotation="-64.29 168.96 0.00"></a-camera>
      <a-camera id="infantis_closeCam_03" active="false" class="closeCameras" position="-14.08 0.99 -5.07" rotation="-64.65 0 0.00"></a-camera>
      <a-camera id="infantis_closeCam_04" active="false" class="closeCameras" position="-8.68 0.99 -2.75" rotation="-65 169 0"></a-camera>
    </a-entity>
  )
}

export default Infantis;