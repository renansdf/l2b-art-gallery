import React from 'react';
import skybox from '../../assets/textures/skybox.png';
import museuglb from '../../assets/models/museu_2020_newBook.glb';
import groundmark from '../../assets/textures/ground_mark.png';

const Museu: React.FC = () => {
  return (
    <a-scene id="aframeScene" renderer="colorManagement : true; sortObjects: true" vr-mode-ui="enabled: false" loading-screen="enabled : false">

      <a-sky src={skybox} animation="property : rotation; from : 0 0 0; to : 0 360 0; dur : 1000000; loop : true;" />

      <a-camera position="0 1.6 30" multitouch-look-controls wasd-controls="enabled: false" cursor="rayOrigin : mouse" raycaster="objects : .collidable; far : 10;" rotation="0 0 0" active="true" />

      <a-entity gltf-model={museuglb} scale=".35 .35 .35" position="-42.5 0 0" />

      <a-entity id="nextPositionGizmo" position="0 0 -5" scale="1 1 1" rotation="90 0 0" material="side: double; color : #ff0000; transparent: true; opacity: 0;" src={groundmark} geometry="primitive : circle; radius : 0.25" animation__fadein="property : components.material.material.opacity; from : 0; to : 1; dur :500; startEvents : fadein;" animation__fadeout="property : components.material.material.opacity; from : 1; to : 0; dur : 500; startEvents : fadeout;"></a-entity>
    </a-scene>
  );
}

export default Museu;