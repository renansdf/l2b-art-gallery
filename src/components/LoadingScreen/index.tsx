import React from 'react';
import {Container} from './styles';

interface ILoadingProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<ILoadingProps> = ({isVisible}) => {
  return (
    <Container isVisible={isVisible}>
      <p>...</p>
    </Container>
  )
}

export default LoadingScreen;