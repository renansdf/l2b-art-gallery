import React, { useEffect, useState } from 'react';
import { useClosedCamera } from '../../hooks/ClosedCamera';

import mapBemVindos from '../../assets/img/mapBemVindos.png';
import mapContosENovelas from '../../assets/img/mapContosENovelas.png';
import mapEnsaios from '../../assets/img/mapEnsaios.png';
import mapExposicoes from '../../assets/img/mapExposicoes.png';
import mapInfantil from '../../assets/img/mapInfantil.png';
import mapPoesias from '../../assets/img/mapPoesias.png';
import mapObservatorio from '../../assets/img/mapObservatorio.png';

import {Container} from './styles'

const GalleryHud: React.FC = () => {
  const [location, setLocation] = useState<string>('imgsrc');
  const {cameraCoordinates} = useClosedCamera();

  useEffect(() => {
    if(cameraCoordinates.x > 5.4){
      if(cameraCoordinates.y > 2){
        setLocation(mapObservatorio);
      } else {
        setLocation(mapExposicoes);
      }
    }

    if(cameraCoordinates.x < 5.4 && cameraCoordinates.x > -5.4){
      setLocation(mapBemVindos);
    }

    if(cameraCoordinates.x < -5.4){
      if(cameraCoordinates.y > 2 && cameraCoordinates.y < 5){
        setLocation(mapContosENovelas);
      } else if(cameraCoordinates.y > 5){
        setLocation(mapPoesias);
      } else if(cameraCoordinates.x < -22){
        setLocation(mapEnsaios);
      } else {
        setLocation(mapInfantil);
      }
    }
  }, [cameraCoordinates]);

  return (
    <Container>
      <img src={location} alt={location} />
    </Container>
  )
}

export default GalleryHud;