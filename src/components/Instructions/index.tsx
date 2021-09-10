import React, { useState } from 'react';
import { useMusic } from '../../hooks/AmbientSound';
import { Container, Content, Slide, CloseInstructions } from './styles';

const Instructions: React.FC = () => {
  const [visibility, setVisibility] = useState(true);
  const {setIsMusicPlaying} = useMusic();

  const handleCloseInstructions = () => {
    setVisibility(!visibility);
    setIsMusicPlaying(true);
  }

  return (
    <Container isVisible={visibility}>
      <Content>
        <Slide>
          <h1>Bem vindo a galeria!</h1>
          <p>Para olhar ao redor, segure o botão de clique e arraste em qualquer direção</p>
        </Slide>
        <Slide>
          <p>Para andar pela galeria, clique uma vez no chão a sua frente. Atenção! Você só conseguirá clicar em lugares perto de você.</p>
        </Slide>
        <Slide>
          <p>Perto de cada obra haverá um icone de olho. Clique no ícone para visualizar a obra de perto e saber mais detalhes.</p>
        </Slide>
        
        <CloseInstructions onClick={handleCloseInstructions} />
      </Content>
    </Container>
  );
}

export default Instructions;