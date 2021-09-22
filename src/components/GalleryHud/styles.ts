import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 50px;
  left: 30px;
  z-index: 11;
  
  img{
    max-width: 300px;
    max-height: 150px;
    z-index: 2;
    position: relative;
  }
`;

export const Shadow = styled.span`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(rgba(32,32,32,0), rgba(32,32,32,.45), rgba(32,32,32,.7));
  pointer-events: none;
`;