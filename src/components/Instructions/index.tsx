/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useMusic } from '../../hooks/AmbientSound';

import Pagination from '../Pagination';
import mouse from '../../assets/img/mouse.png';
import hotspot from '../../assets/textures/hotspot_icon.png';

import { Container, Content, Slide, CloseInstructions, PaginationContainer } from './styles';

const Instructions: React.FC = () => {
  const [visibility, setVisibility] = useState(true);
  const {setIsMusicPlaying} = useMusic();
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleCloseInstructions = () => {
    setVisibility(!visibility);
    setIsMusicPlaying(true);
  }

  const content = [
    <Slide key="slide1">
      <h1>bem-vindo!</h1>
      <p>A L2B é um espaço virtual dedicado às artes</p>
      <p>além de exibir o acervo próprio convida outros artistas para apresentar suas criações em nossos espaços</p>
    </Slide>,
    <Slide key="slide2">
      <img src={mouse} alt="mouse" />
      <p>Clique no chão para caminhar<br/>Clique e deslize para girar</p>
    </Slide>,
    <Slide key="slide3">
      <img src={hotspot} alt="mouse" />
      <p>Perto de cada obra haverá um icone de olho.<br />Clique no ícone para visualizar a obra de perto e saber mais detalhes.</p>
    </Slide>
  ];

  return (
    <Container isVisible={visibility}>
      <Content>
        {content.map((content, index) => {
          if(index === currentSlider){
            return content;
          }
        })}
        <PaginationContainer>
          <Pagination currentPage={currentSlider} setCurrentPage={setCurrentSlider} totalPages={3} />
        </PaginationContainer>
        <CloseInstructions onClick={handleCloseInstructions} />
      </Content>
    </Container>
  );
}

export default Instructions;