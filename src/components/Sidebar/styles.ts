import styled, {css} from 'styled-components';

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 100%;
    width: 0px;
    position: fixed;
    z-index: 12;
    top: 0;
    right: 0;
    background: var(--l2b-white-full) 0% 0% no-repeat padding-box;
    overflow-x: hidden;
    transition: 0.5s;

    ${props => props.isVisible && css`
        width: 562px;
    `}

    a{
        padding: 8px 8px 8px 0px;
        text-decoration: none;
        color: #AF2420;
        display: block;

        &:hover{
            color: var(--l2b-dark-red);
        }
    }

    &::-webkit-scrollbar-track {
        background-color: var(--l2b-white);
    }

    &::-webkit-scrollbar {
        width: 6px;
        background: var(--l2b-white);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--l2b-light-grey);
    }

    @media only screen and (max-width: 600px) {
        ${props => props.isVisible && css`
            width: 100%;
        `}
    }
`;

export const Content = styled.div`
    padding: 90px 70px 70px 70px;
    bottom: 10px;
    overflow: hidden;
    min-height: 100%;
    position: relative;

    iframe{
        width: 100%;
        height: auto;
        min-height: 210px;
    }

    @media only screen and (max-width: 600px) {
        padding: 50px 30px 10px;
    }
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
        color: var(--l2b-black);
        text-decoration: none;
        cursor: pointer;
    }
`;