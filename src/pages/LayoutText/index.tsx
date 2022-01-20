import React from 'react';

import { Container, SidebarMock, Title, Content } from './styles';

const LayoutText: React.FC = () => {
  return (
    <Container>
      <SidebarMock>
        <Title placeholder='título' />
        <Content placeholder="insira o conteúdo aqui para ver a formatação final" />
      </SidebarMock>
    </Container>
  )
}

export default LayoutText;