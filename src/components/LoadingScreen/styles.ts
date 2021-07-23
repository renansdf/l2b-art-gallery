import styled, { css } from 'styled-components';

interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: none;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index:89;

  p{
    animation-name: flash;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes flash{
    from{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  ${(props) => props.isVisible && css`
    display: flex;
  `}
`;