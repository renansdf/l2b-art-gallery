import styled from 'styled-components';

export const Shadow = styled.span`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(rgba(32,32,32,.7), rgba(32,32,32,.45), rgba(32,32,32,0));
  pointer-events: none;
`;