import styled, {css} from 'styled-components';

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
    @keyframes fade {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,1);
    overflow: hidden;
    opacity: 0;

    display: none;

    ${props => props.isVisible && css`
        display: block;
        animation: 4s ease-in-out 1 fade;
    `}
`;

