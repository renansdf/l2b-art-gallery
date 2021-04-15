import styled from 'styled-components';

export const Container = styled.div`
    font-family: "Volkart_Medium";
    width: 100%;
    overflow: hidden;
    background-color: var(--l2b-transparent);
    position: fixed !important;
    top: 0;
    padding: 25px;
`;

export const HeaderDesktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const HeaderMobile = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        display: flex;
    }
`;

export const Text = styled.h2`
    color: var(--l2b-white-full);
    text-align: center;
    font-weight: normal;
    display: none;
`;

export const Logo = styled.img`
    width: 155px;
    margin-top: 1.3em;
`;

export const MenuButton = styled.span`
    display: block;
    color: var(--l2b-white-full);
    text-align: center;
    font-weight: normal;
    cursor:pointer; 
    margin: 18px;
    font-size: 24px;
`;

export const RoomName = styled.h2`
    color: var(--l2b-white-full);
    text-align: center;
    font-weight: normal;
    display: block;
`;