import React, { useCallback } from 'react';
import { useTeleport } from '../../../hooks/Teleport';

import { useClosedCamera } from '../../../hooks/ClosedCamera';
import { useSidebar } from '../../../hooks/Sidebar';
import ObservatorySkyImg from '../../../assets/img/ceu-observatorio-2.jpeg';
import ContentPagination from '../../../components/ContentPagination';

const Observatorio: React.FC = () => {
    const {setContent, setSidebarVisibility} = useSidebar();
    const {teleportCamera} = useTeleport();
    const {cameraCloseIn} = useClosedCamera();
  
    const handleClick = useCallback((component: JSX.Element, cameraCloseCoords: any, hotspot: string) => {
      cameraCloseIn(cameraCloseCoords, hotspot);
      setContent(component);
      setSidebarVisibility(true);
    }, [setContent, setSidebarVisibility, cameraCloseIn]);

    return (
        <a-entity id="Observatorio" room_name="observatório">
            {/* <!--NavMesh--> */}
            <a-plane id="Observatorio-NavMesh-01" position="18.33 3.810 -3.98" scale="7.2 2.8 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="Observatorio-NavMesh-02" position="9.97 3.810 -4.18" scale="9 5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

            {/* Sky img */}
            <a-entity 
                id="obs-sky"
                geometry="primitive: circle; radius: 2.030;"
                material={"shader: flat; src:"+ObservatorySkyImg}
                position="19.910 5.993 -4.149"
                rotation="29.970 -90.000 0.000"
            ></a-entity>

            {/* <!--Hotspots--> */}
            <a-entity id="observatorio_hotspot_01" hotspot_collider data-art-ref="YWoVlhEAACQAky7U" onClick={() => handleClick(<ContentPagination contentId="YWoVlhEAACQAky7U" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_01')} mixin="hotspotMixin" class="collidable" position="19.053 6.796 -5.097"></a-entity>
            <a-entity id="observatorio_hotspot_02" hotspot_collider data-art-ref="YWoV4REAACUAkzAo" onClick={() => handleClick(<ContentPagination contentId="YWoV4REAACUAkzAo" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_02')} mixin="hotspotMixin" class="collidable" position="19.047 7.211 -3.768"></a-entity>
            <a-entity id="observatorio_hotspot_03" hotspot_collider data-art-ref="YWoV_hEAACMAkzCs" onClick={() => handleClick(<ContentPagination contentId="YWoV_hEAACMAkzCs" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_03')} mixin="hotspotMixin" class="collidable" position="19.221 6.710 -3.311"></a-entity>
            <a-entity id="observatorio_hotspot_04" hotspot_collider data-art-ref="YWoWIxEAACQAkzFQ" onClick={() => handleClick(<ContentPagination contentId="YWoWIxEAACQAkzFQ" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_04')} mixin="hotspotMixin" class="collidable" position="20.065 5.298 -5.539"></a-entity>
            <a-entity id="observatorio_hotspot_05" hotspot_collider data-art-ref="YWoWQhEAACYAkzHi" onClick={() => handleClick(<ContentPagination contentId="YWoWQhEAACYAkzHi" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_05')} mixin="hotspotMixin" class="collidable" position="19.620 6.068 -5.478"></a-entity>
            <a-entity id="observatorio_hotspot_06" hotspot_collider data-art-ref="YWoWXREAACYAkzJa" onClick={() => handleClick(<ContentPagination contentId="YWoWXREAACYAkzJa" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_06')} mixin="hotspotMixin" class="collidable" position="19.869 5.723 -3.277"></a-entity>
            <a-entity id="observatorio_hotspot_07" hotspot_collider data-art-ref="YYWmZxAAACMAhbCx" onClick={() => handleClick(<ContentPagination contentId="YYWmZxAAACMAhbCx" />, {position:{x:17.840, y: 5.5, z:-3.9},rotation:{x:-.35, y:1.65, z:0}}, 'observatorio_hotspot_07')} mixin="hotspotMixin" class="collidable" position="20.326 4.716 -4.023"></a-entity>
            <a-entity id="observatorio_downStairs" onClick={() => teleportCamera('exposicoesStairs')} mixin="downStairs" class="collidable" position="16.540 4.810 -5.460" scale="0.35 0.35 1" ></a-entity>
        </a-entity>
    )
}

export default Observatorio;