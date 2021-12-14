import React from 'react';
import Client from '../../../helpers/api';
import orientations from '../../../helpers/orientations';

import { useTeleport } from '../../../hooks/Teleport';
import { useOverlay } from '../../../hooks/Overlay';
import { useSidebar } from '../../../hooks/Sidebar';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import Covers from '../../../components/Covers';
import ContentGallery from '../../../components/ContentGallery';
import ContentPagination from '../../../components/ContentPagination';
import ObservatorioPopup from '../../../components/ObservatorioPopup';
import { usePopup } from '../../../hooks/Popup';

interface IResponse{
  data: {
    tipo_de_conteudo: boolean;
  }
}

const Exposicoes: React.FC = () => {
  const {teleportCamera} = useTeleport();
  const {setSidebarVisibility, setContent} = useSidebar();
  const {setOverlayVisibility, setContent: setOverlayContent} = useOverlay();
  const {setPopupVisibility, setContent: setPopupContent} = usePopup();
  const {cameraCloseIn} = useClosedCamera();

  const handleClick = async (id: string, cameraCloseCoords: any, hotspot: string) => {
    const response: IResponse = await Client.getByID(id, {});

    if(response.data.tipo_de_conteudo === false){
      setSidebarVisibility(true);
      setContent(<ContentPagination contentId={id} />);
    } else {
      setOverlayVisibility(true);
      setOverlayContent(<ContentGallery contentId={id} />);
    }

    cameraCloseIn(cameraCloseCoords, hotspot);
  }

  const observatorioTeleport = async () => {
    teleportCamera('observatorio');
    setSidebarVisibility(false);
    setPopupVisibility(true);
    setPopupContent(<ObservatorioPopup closePopup={() => setPopupVisibility(false)} />)
  }
  
  return (
    <a-entity id="Exposicoes" room_name="exposições">
    {/* <!--NavMesh--> */}
    <a-plane id="Exposicoes-NavMesh" position="13.32 0.59 -4.21" scale="14 4 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

    {/* <!--NavMesh Occluders--> */}
    <a-box id="Exposicoes Wall_1" position="7.521 1.95 -2.620" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Wall_2" position="7.521 1.95 -5.710" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>

    {/* <!--Imagens dos totens--> */}
    <Covers contentType="exposicoes" />

    {/* <!--Hotspots--> */}
    <a-entity id="exposicoes_hotspot_01" hotspot_collider data-art-ref="YK8CYxAAACUAYFDH" onClick={() => handleClick('YK8CYxAAACUAYFDH', {position:{x:9.7, y: 1.6, z:-5.330},rotation:orientations.direita}, 'exposicoes_hotspot_01')} mixin="hotspotMixin" class="collidable" position="11.410 1.140 -5.310"></a-entity>
    <a-entity id="exposicoes_hotspot_02" hotspot_collider data-art-ref="YK8LaRAAACMAYHkL" onClick={() => handleClick('YK8LaRAAACMAYHkL', {position:{x:9.7, y: 1.6, z:-2.990},rotation:orientations.direita}, 'exposicoes_hotspot_02')} mixin="hotspotMixin" class="collidable" position="11.410 1.140 -3.000"></a-entity>
    <a-entity id="exposicoes_upStairs" onClick={() => observatorioTeleport()} mixin="upStairs" class="collidable" position="15 1.560 -6.000" scale="0.35 0.35 1" ></a-entity>
  </a-entity>
  );
}

export default Exposicoes;