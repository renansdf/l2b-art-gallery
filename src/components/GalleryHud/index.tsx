import React, { useEffect, useState } from 'react';
import { useClosedCamera } from '../../hooks/ClosedCamera';

import {Container} from './styles'

const GalleryHud: React.FC = () => {
  const [location, setLocation] = useState<string>('inicio');
  const {cameraCoordinates} = useClosedCamera();

  useEffect(() => {
    if(cameraCoordinates.x > 5.4){
      if(cameraCoordinates.y > 2){
        setLocation('Observatório');
      } else {
        setLocation('Exposições');
      }
    }

    if(cameraCoordinates.x < 5.4 && cameraCoordinates.x > -5.4){
      setLocation('Boas Vindas');
    }

    if(cameraCoordinates.x < -5.4){
      if(cameraCoordinates.y > 2 && cameraCoordinates.y < 5){
        setLocation('Contos & Novelas');
      } else if(cameraCoordinates.y > 5){
        setLocation('Poesias');
      } else if(cameraCoordinates.x < -22){
        setLocation('Ensaios');
      } else {
        setLocation('Infantis');
      }
    }
  }, [cameraCoordinates]);

  return (
    <Container>
      <h1>aqui será o mapa do {location}</h1>
    </Container>
  )
}

export default GalleryHud;