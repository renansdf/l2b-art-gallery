import React, { useEffect, useRef } from 'react';
import groundmark from '../../../assets/textures/ground_mark.png';

interface IGizmoProps {
    position: string;
}

const NextPositionGizmo: React.FC<IGizmoProps> = ({position}) => {
    const gizmo = useRef<any>(null);

    const GizmoFadeInOut = (fade_duration = 0.7) => {
        gizmo.current.emit('fadein',null, false)
        setTimeout(()=>{
            gizmo.current.emit('fadeout',null, false)
        }, fade_duration * 1000)
    }

    useEffect(() => {
        GizmoFadeInOut();
    }, [position]);

    return (
        <a-entity ref={gizmo} id="nextPositionGizmo" position={position} scale="1 1 1" rotation="90 0 0" material="side: double; color : #ff0000; transparent: true; opacity: 0;" src={groundmark} geometry="primitive : circle; radius : 0.25" animation__fadein="property : components.material.material.opacity; from : 0; to : 1; dur :500; startEvents : fadein;" animation__fadeout="property : components.material.material.opacity; from : 1; to : 0; dur : 500; startEvents : fadeout;"></a-entity>
    );
}

export default NextPositionGizmo;