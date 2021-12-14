import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';

const BoasVindas: React.FC = () => {
    const {setContent, setSidebarVisibility} = useSidebar();
    const { cameraCloseIn, getNormalizedRotationTo } = useClosedCamera();

    const handleClick = useCallback((component: JSX.Element, obj3D: any, hotspot: string) => {
        setContent(component);
        setSidebarVisibility(true);
        cameraCloseIn(obj3D, hotspot);
    }, [setContent, setSidebarVisibility, cameraCloseIn]);

    return (
        <a-entity id="BoasVindas" room_name="bem vindo">
            {/* <!--NavMesh --> */}
            <a-plane id="Corredor_BoasVindas" position="0.020 0.59 9.200" scale="1.390 25.960 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas-NavMesh" position="0.020 0.59 -4.160" scale="8.990 1.410 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas_Memorias_Connection" position="5.15 0.59 -4.16" scale="2.4 1.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas_Infantis_Connection" position="-5.25 0.59 -4.21" scale="2.4 1.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

            {/* <!--NavMesh Occluders--> */}
            <a-box id="BoasVindas_Occluder" position="0.06 0.85 -5.18" scale="1.916 0.502 0.638" class="collidable" mixin="occluderMaterial"></a-box>

            {/* <!--Imagens dos totens--> */}
            <Covers contentType="boas_vindas" />

            {/* <!--HotSpots--> */}
            <a-entity hotspot_collider id="boasvindas_hotspot_01" data-art-ref='YK7_XBAAACYAYEN3' onClick={() => handleClick(<ContentPagination contentId="YK7_XBAAACYAYEN3" />, {position:{x:-.7, y: 5.800, z:-4.063},rotation:{x:0, y: getNormalizedRotationTo('w'), z:0}}, "boasvindas_hotspot_01")} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="-3.3 3 -4.1"></a-entity> 
            <a-entity hotspot_collider id="boasvindas_hotspot_02" data-art-ref='YK7_dhAAACQAYEP0' onClick={() => handleClick(<ContentPagination contentId="YK7_dhAAACQAYEP0" />, {position:{x:0, y: 5.800, z:-4.3},rotation:{x:0, y: getNormalizedRotationTo('n'), z:0}}, "boasvindas_hotspot_02")} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="0.05 3 -6.83"></a-entity>
            <a-entity hotspot_collider id="boasvindas_hotspot_03" data-art-ref='YK7_mhAAACQAYESU' onClick={() => handleClick(<ContentPagination contentId="YK7_mhAAACQAYESU" />, {position:{x:.9, y: 5.800, z:-4.063},rotation:{x:0, y: getNormalizedRotationTo('e'), z:0}}, "boasvindas_hotspot_03")} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="3.3 3 -4.1"></a-entity>
        </a-entity>
    );
}

export default BoasVindas