import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import { useTeleport } from '../../../hooks/Teleport';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';

const ContosENovelas: React.FC = () => {
  const {setContent, setSidebarVisibility} = useSidebar();
  const {teleportCamera} = useTeleport();
  const {cameraCloseIn, getNormalizedRotationTo} = useClosedCamera();

  const handleClick = useCallback((component: JSX.Element, cameraCloseCoords: any, hotspot: string) => {
    cameraCloseIn(cameraCloseCoords, hotspot);
    setContent(component);
    setSidebarVisibility(true);
  }, [setContent, setSidebarVisibility, cameraCloseIn]);

  return (
    <a-entity id="ContosENovelas" room_name="contos & novelas">
      {/* <!--NavMesh--> */}
      <a-plane id="ContosENovelas-NavMesh" position="-20.870 3.810 -4.170" scale="32.520 4.430 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

      {/* <!--NavMesh Occluders--> */}
      <a-box id="ContosENovelas Support_1" position="-27.227 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Support_2" position="-27.227 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Support_3" position="-29.470 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Support_4" position="-29.470 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>

      <a-box id="ContosENovelas Wall_1" position="-23.590 5 -5.650" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Wall_2" position="-23.590 5 -2.620" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>

      {/* <!--Imagens dos totens--> */}
      <Covers contentType="contos_e_novelas" />

      {/* <!--Hotspots--> */}
      <a-entity id="ContoENovelas_hotspot_01" hotspot_collider data-art-ref="YK7F4xAAACUAX0KH" onClick={() => handleClick(<ContentPagination contentId="YK7F4xAAACUAX0KH" />, {position:{x:-26.35, y: 5, z:-3},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_01')} mixin="hotspotMixin" class="collidable" position="-26.940 4.440 -2.780"></a-entity>
      <a-entity id="ContoENovelas_hotspot_02" hotspot_collider data-art-ref="YK7NYBAAACQAX2On" onClick={() => handleClick(<ContentPagination contentId="YK7NYBAAACQAX2On" />, {position:{x:-28.65, y: 5, z:-3},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_02')} mixin="hotspotMixin" class="collidable" position="-29.180 4.440 -2.730"></a-entity>
      <a-entity id="ContoENovelas_hotspot_03" hotspot_collider data-art-ref="YK7NexAAACUAX2Qp" onClick={() => handleClick(<ContentPagination contentId="YK7NexAAACUAX2Qp" />, {position:{x:-28.65, y: 5, z:-5.8},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_03')} mixin="hotspotMixin" class="collidable" position="-29.180 4.440 -5.610"></a-entity>
      <a-entity id="ContoENovelas_hotspot_04" hotspot_collider data-art-ref="YK7NlxAAACMAX2Sz" onClick={() => handleClick(<ContentPagination contentId="YK7NlxAAACMAX2Sz" />, {position:{x:-26.35, y: 5, z:-5.8},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_04')} mixin="hotspotMixin" class="collidable" position="-26.940 4.440 -5.610"></a-entity>
      <a-entity id="ContoENovelas_upStairs" onClick={() => teleportCamera('poesias')} mixin="upStairs" class="collidable" position="-34.630 4.850 -3.380" scale="0.35 0.35 1" ></a-entity>
      <a-entity id="ContoENovelas_downStairs" onClick={() => teleportCamera('infantisStairs')} mixin="downStairs" class="collidable" position="-19.600 4.850 -3.330" scale="0.35 0.35 1" ></a-entity>
      <a-entity id="ContoENovelas_downStairs_ensaios" onClick={() => teleportCamera('ensaiosStairs')} mixin="downStairs" class="collidable" position="-34.630 4.850 -5.629" scale="0.35 0.35 1" ></a-entity>
    </a-entity>
  );
}

export default ContosENovelas;