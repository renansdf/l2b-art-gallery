import styled, { css } from 'styled-components';

interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: none;

  position: absolute;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 90;
  align-items: center;
  justify-content: center;
  
  ${props => props.isVisible && css`
    display: flex;
  `}
`;

export const Content = styled.div`
  position: relative;
  background: rgba(255,255,255,.9);
  border-radius: 40px;
  width: 90%;
  max-width: 700px;
  
  display: flex;
  overflow: hidden;
`;

export const Slide = styled.div`
  padding: 40px;
  background: transparent;
`;

export const CloseInstructions = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  border: none;
  cursor: pointer;
`;