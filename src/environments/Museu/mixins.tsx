import React from 'react';
import hotspotIcon from '../../assets/textures/hotspot_icon.png';

export const hotspotMixin: React.FC = () => <a-mixin id="hotspotMixin" billboard material="shader: flat; side: double; transparent: true; alphaTest : 0.1;" src={hotspotIcon} scale="0.3 0.3 1" geometry="primitive : plane"></a-mixin>

export const navMeshMaterial: React.FC = () => <a-mixin id="navMeshMaterial" material="shader: flat; side: double; transparent: true; opacity : .5; color : white" visible="false"></a-mixin>

export const occluderMaterial: React.FC = () => <a-mixin id="occluderMaterial" material="shader: flat; side: double; transparent: true; opacity : .5; color : blue" visible="false"></a-mixin>