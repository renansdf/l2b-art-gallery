import React, { useCallback } from 'react';
import { useTeleport } from '../../../hooks/Teleport';

import { useClosedCamera } from '../../../hooks/ClosedCamera';
import { useSidebar } from '../../../hooks/Sidebar';
import ObservatorySkyImg from '../../../assets/img/ceu-observatorio.jpeg';
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
            <a-entity id="observatorio_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YWoVlhEAACQAky7U" />, {position:{x:18.840, y: 5.9, z:-3.9},rotation:{x:-.5, y:1.65, z:0}}, 'observatorio_hotspot_01')} mixin="hotspotMixin" class="collidable" position="19.053 6.796 -5.097"></a-entity>
            <a-entity id="observatorio_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YWoV4REAACUAkzAo" />, {position:{x:18.840, y: 5.9, z:-3.9},rotation:{x:-.5, y:1.65, z:0}}, 'observatorio_hotspot_02')} mixin="hotspotMixin" class="collidable" position="19.047 7.211 -4.149"></a-entity>
            <a-entity id="observatorio_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YWoV_hEAACMAkzCs" />, {position:{x:18.840, y: 5.9, z:-3.9},rotation:{x:-.5, y:1.65, z:0}}, 'observatorio_hotspot_03')} mixin="hotspotMixin" class="collidable" position="19.221 6.710 -3.311"></a-entity>
            <a-entity id="observatorio_hotspot_04" onClick={() => handleClick(<ContentPagination contentId="YWoWIxEAACQAkzFQ" />, {position:{x:18.840, y: 5.9, z:-3.9},rotation:{x:-.5, y:1.65, z:0}}, 'observatorio_hotspot_04')} mixin="hotspotMixin" class="collidable" position="19.667 5.721 -5.153"></a-entity>
            <a-entity id="observatorio_hotspot_05" onClick={() => handleClick(<ContentPagination contentId="YWoWQhEAACYAkzHi" />, {position:{x:18.840, y: 5.9, z:-3.9},rotation:{x:-.5, y:1.65, z:0}}, 'observatorio_hotspot_05')} mixin="hotspotMixin" class="collidable" position="19.540 5.270 -4.443"></a-entity>
            <a-entity id="observatorio_hotspot_06" onClick={() => handleClick(<ContentPagination contentId="YWoWXREAACYAkzJa" />, {position:{x:18.840, y: 5.9, z:-3.9},rotation:{x:-.5, y:1.65, z:0}}, 'observatorio_hotspot_06')} mixin="hotspotMixin" class="collidable" position="19.869 5.600 -2.935"></a-entity>
            <a-entity id="observatorio_downStairs" onClick={() => teleportCamera('exposicoesStairs')} mixin="downStairs" class="collidable" position="16.540 4.810 -5.460" scale="0.35 0.35 1" ></a-entity>
        </a-entity>
    )
}

export default Observatorio;