import React from 'react';
import Client from '../../../helpers/api';

import { useOverlay } from '../../../hooks/Overlay';
import { useSidebar } from '../../../hooks/Sidebar';

import Covers from '../../../components/Covers';
import ContentGallery from '../../../components/ContentGallery';
import ContentPagination from '../../../components/ContentPagination';

interface IResponse{
  data: {
    tipo_de_conteudo: boolean;
  }
}

const Exposicoes: React.FC = () => {
  const {setSidebarVisibility, setContent} = useSidebar();
  const {setOverlayVisibility, setContent: setOverlayContent} = useOverlay();


  const loadContent = async (id: string) => {
    const response: IResponse = await Client.getByID(id, {});

    if(response.data.tipo_de_conteudo === false){
      setSidebarVisibility(true);
      setContent(<ContentPagination contentId={id} />);
    } else {
      setOverlayVisibility(true);
      setOverlayContent(<ContentGallery contentId={id} />);
    }
  }

  return (
    <a-entity id="Exposicoes" room_name="exposições">
    {/* <!--NavMesh--> */}
    <a-plane id="Exposicoes-NavMesh" position="13.32 0.6 -4.21" scale="14 4 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

    {/* <!--NavMesh Occluders--> */}
    <a-box id="Exposicoes Wall_1" position="7.521 1.95 -2.620" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Wall_2" position="7.521 1.95 -5.710" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>

    {/* <!--Imagens dos totens--> */}
    <Covers contentType="exposicoes" />

    {/* <!--Hotspots--> */}
    <a-entity id="exposicoes_hotspot_01" onClick={() => loadContent('YK8CYxAAACUAYFDH')} mixin="hotspotMixin" class="collidable" position="11.020 1.560 -6.000"></a-entity>
    <a-entity id="exposicoes_hotspot_02" onClick={() => loadContent('YK8LaRAAACMAYHkL')} mixin="hotspotMixin" class="collidable" position="11.020 1.560 -2.230"></a-entity>

    {/* <!--Close Cameras--> */}
    <a-camera id="exposicoes_closeCam_01" active="false" class="closeCameras" position="-24.18 4.79 -2.51" rotation="-1.77 90.24 0.00"></a-camera>
    <a-camera id="exposicoes_closeCam_02" active="false" class="closeCameras" position="-24.27 4.85 -5.64" rotation="-5.76 90.72 0.00"></a-camera>

    <a-camera id="exposicoes_closeCam_03" active="false" class="closeCameras" position="-26.69 4.91 -2.51" rotation="-7.32 89.76 0.00"></a-camera>
    <a-camera id="exposicoes_closeCam_04" active="false" class="closeCameras" position="-26.73 4.82 -5.65" rotation="-6.21 90.72 0.00"></a-camera>

    <a-camera id="exposicoes_closeCam_05" active="false" class="closeCameras" position="-29.16 4.92 -2.48" rotation="-10.20 89.28 0.00"></a-camera>
    <a-camera id="exposicoes_closeCam_06" active="false" class="closeCameras" position="-29.09 4.90 -5.67" rotation="-4.66 90.72 0.00"></a-camera>

    {/* <!-- Stair Teleporter--> */}
    {/* <a-entity id="down-stairs-button" position="-19 4.5 -3.1" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('infantis')"></a-entity>
    <a-entity id="down-stairs-button" position="-33 4.5 -3.2" scale="0.35 0.35 1" billboard class="collidable" material="shader: flat; side: double; transparent: true; opacity: 1; src : #up-stairs" geometry="primitive : plane" onClick="FadeAndTeleport('poesias')"></a-entity> */}
    {/* <!-- Stair Teleporter--> */}
  </a-entity>
  );
}

export default Exposicoes;