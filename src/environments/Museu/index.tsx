import React from 'react';

import Camera from '../../components/Camera';
import skybox from '../../assets/textures/skybox.png';
import museuglb from '../../assets/models/museu_2020_newBook.glb';

import BoasVindas from './BoasVindas';
import ContosENovelas from './ContosENovelas';
import Ensaios from './Ensaios';
import Exposicoes from './Exposicoes';
import Infantis from './Infantis';
import Memorias from './Memorias';
import Poesias from './Poesias';

const Museu: React.FC = () => {
  return (
    <a-scene id="aframeScene" renderer="colorManagement : true; sortObjects: true" vr-mode-ui="enabled: false" loading-screen="enabled : false">
      <a-sky src={skybox} animation="property : rotation; from : 0 0 0; to : 0 360 0; dur : 1000000; loop : true;" />
      <a-entity gltf-model={museuglb} scale=".35 .35 .35" position="-42.5 0 0" />
      <Camera />

      <BoasVindas />
      <ContosENovelas />
      <Ensaios />
      <Exposicoes />
      <Infantis />
      <Memorias />
      <Poesias />
    </a-scene>
  );
}

export default Museu;