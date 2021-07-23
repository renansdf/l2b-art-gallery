import React, { useEffect, useRef, useState } from 'react';

import Camera from '../../components/Camera';
import skybox from '../../assets/textures/skybox.png';
import galeriaGLB from '../../assets/models/galeria_neue.glb';
import hotspotIcon from '../../assets/textures/hotspot_icon.png';
import upStairs from '../../assets/textures/up_stairs_icon.png';
import downStairs from '../../assets/textures/down_stairs_icon.png'

import BoasVindas from './BoasVindas';
import ContosENovelas from './ContosENovelas';
import Ensaios from './Ensaios';
import Exposicoes from './Exposicoes';
import Infantis from './Infantis';
import Observatorio from './Observatorio';
import Poesias from './Poesias';

import LoadingScreen from '../../components/LoadingScreen';
import Instructions from '../../components/Instructions';

interface IAssetRef {
  fileLoader: {
    manager: any;
  }
}

const Galeria: React.FC = () => {
  const galeriaRef = useRef(null);
  const assetsRef = useRef<IAssetRef>(null);
  const [loadingVisibility, setLoadingVisibility] = useState(true);

  useEffect(() => {
    if(assetsRef.current){
      const loader = assetsRef.current.fileLoader.manager;
      loader.onLoad = () => {
        setLoadingVisibility(false);
      }
    }
  }, []);

  return (
    <a-scene id="aframeScene" renderer="colorManagement : true; sortObjects: true" vr-mode-ui="enabled: false" loading-screen="enabled : false">
      <Instructions />
      <LoadingScreen isVisible={loadingVisibility} />
      <a-sky src={skybox} animation="property : rotation; from : 0 0 0; to : 0 360 0; dur : 1000000; loop : true;" />
      <a-entity ref={galeriaRef} gltf-model={galeriaGLB} scale=".75 .75 .75" position="-49.09 0 -4.16" rotation="0 -90 0" />
      <Camera />

      <a-light position="0.9 6 -0.25" type="directional" />
      <a-light position="0 0 0" type="ambient" />

      <a-assets ref={assetsRef}>
        <img id="plus" src={hotspotIcon} alt="hotspot Icon" />
        <img id="up-stairs" src={upStairs} alt="upstairs icon" />
        <img id="down-stairs" src={downStairs} alt="downstairs icon" />
        <a-mixin id="hotspotMixin" billboard material="shader: flat; side: double; transparent: true; src : #plus; alphaTest : 0.1; opacity: 1" scale="0.3 0.3 1" geometry="primitive : plane"></a-mixin>
        <a-mixin id="upStairs" billboard material="shader: flat; side: double; transparent: true; opacity: 1; src : #up-stairs" geometry="primitive : plane"></a-mixin>
        <a-mixin id="downStairs" billboard material="shader: flat; side: double; transparent: true; opacity: 1; src : #down-stairs" geometry="primitive : plane"></a-mixin>
        <a-mixin id="navMeshMaterial" material="shader: flat; side: double; transparent: true; opacity : .5; color : white" visible="false"></a-mixin>
        <a-mixin id="occluderMaterial" material="shader: flat; side: double; transparent: true; opacity : .5; color : blue" visible="false"></a-mixin>
      </a-assets>

      <BoasVindas />
      <ContosENovelas />
      <Ensaios />
      <Exposicoes />
      <Infantis />
      <Observatorio />
      <Poesias />
    </a-scene>
  );
}

export default Galeria;