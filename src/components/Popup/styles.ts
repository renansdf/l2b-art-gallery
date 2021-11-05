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
    background: transparent;
    overflow: hidden;
    transition: opacity 0.5s;

    display: none;
    opacity: 0;

    align-items: center;
    justify-content: center;
    
    ${props => props.isVisible && css`
        display: flex;
        opacity: 1;
    `}
`;
