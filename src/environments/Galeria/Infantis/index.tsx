import React, { useCallback } from 'react';
import { useOverlay } from '../../../hooks/Overlay';
import { useTeleport } from '../../../hooks/Teleport';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import ContentGallery from '../../../components/ContentGallery';
import Covers from '../../../components/Covers';

const Infantis: React.FC = () => {
  const {setContent, setOverlayVisibility} = useOverlay();
  const {teleportCamera} = useTeleport();
  const {cameraCloseIn, getNormalizedRotationTo} = useClosedCamera();

  const handleClick = useCallback((component: JSX.Element, object3D: any, hotspot: string) => {
    cameraCloseIn(object3D, hotspot);
    setContent(component);
    setOverlayVisibility(true);
  }, [setContent, setOverlayVisibility, cameraCloseIn]);

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
      <a-entity id="infantis_hotspot_01" hotspot_collider data-art-ref="YK7jQhAAACMAX8bf" onClick={() => handleClick(<ContentGallery contentId="YK7jQhAAACMAX8bf" />, {position:{x:-10.472, y: 1.340, z:-5.200},rotation:{x: 1.5, y: getNormalizedRotationTo('n'), z: 0}}, 'infantis_hotspot_01')} mixin="hotspotMixin" class="collidable" position="-10.520 1.1 -5.33"></a-entity>
      <a-entity id="infantis_hotspot_02" hotspot_collider data-art-ref="YK75phAAACUAYCos" onClick={() => handleClick(<ContentGallery contentId="YK75phAAACUAYCos" />, {position:{x:-13.638, y: 1.340, z:-2.810},rotation:{x: 1.5, y: getNormalizedRotationTo('s'), z: 0}}, 'infantis_hotspot_02')} mixin="hotspotMixin" class="collidable" position="-13.620 1.1 -2.67"></a-entity>
      <a-entity id="infantis_hotspot_03" hotspot_collider data-art-ref="YK75vRAAACMAYCqR" onClick={() => handleClick(<ContentGallery contentId="YK75vRAAACMAYCqR" />, {position:{x:-16.337, y: 1.340, z:-5.353},rotation:{x: 1.5, y: getNormalizedRotationTo('n'), z: 0}}, 'infantis_hotspot_03')} mixin="hotspotMixin" class="collidable" position="-16.410 1.1 -5.2"></a-entity>
      <a-entity id="infantis_hotspot_04" hotspot_collider data-art-ref="YK751BAAACMAYCsB" onClick={() => handleClick(<ContentGallery contentId="YK751BAAACMAYCsB" />, {position:{x:-10.081, y: 1.340, z:-2.685},rotation:{x: 1.5, y: getNormalizedRotationTo('s'), z: 0}}, 'infantis_hotspot_04')} mixin="hotspotMixin" class="collidable" position="-10.130 1.1 -2.67"></a-entity>
      <a-entity id="infantis_upStairs" onClick={() => teleportCamera('contosENovelas')} mixin="upStairs" class="collidable" position="-19.530 1.500 -3.250" scale="0.35 0.35 1" ></a-entity>
    </a-entity>
  )
}

export default Infantis;