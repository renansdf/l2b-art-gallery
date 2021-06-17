import React from 'react';
import { useTeleport } from '../../../hooks/Teleport';

const Observatorio: React.FC = () => {
    const {teleportCamera} = useTeleport();

    return (
        <a-entity id="Observatorio" room_name="observatório">
            {/* <!--NavMesh--> */}
            <a-plane id="Observatorio-NavMesh-01" position="18.33 3.810 -3.98" scale="7.2 2.8 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="Observatorio-NavMesh-02" position="9.97 3.810 -4.18" scale="9 5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

            {/* <!--Hotspots--> */}
            {/* <a-entity id="observatorio_hotspot_01" mixin="hotspotMixin" class="collidable" position="16.67 4 -2.65"></a-entity> */}
            <a-entity id="observatorio_downStairs" onClick={() => teleportCamera('exposicoesStairs')} mixin="downStairs" class="collidable" position="16.540 4.810 -5.460" scale="0.35 0.35 1" ></a-entity>

            {/* <!--Close Cameras--> */}
            <a-camera id="observatorio_closeCam_01" active="false" class="closeCameras" position="10.76 1.20 -5.95" rotation="-36.58 359.52 0.00"></a-camera>
            <a-camera id="observatorio_closeCam_02" active="false" class="closeCameras" position="10.75 1.22 -2.47" rotation="-40.34 180.00 0.00"></a-camera>
        </a-entity>
    )
}

export default Observatorio;