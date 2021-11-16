import styled, {css} from 'styled-components';

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
    transition: opacity 0.5s;

    display: none;
    opacity: 0;
    z-index: 15;
    
    ${props => props.isVisible && css`
        display: block;
        opacity: 1;
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
`;

export const CloseContentButton = styled.span`
    font-family: "Volkart_Light";
    color: var(--l2b-light-grey);
    float: right;
    font-size: 40px;
    position: absolute;
    top: 30px;
    right: 23px;
    z-index: 2;

    &:hover, &:focus{
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
`;