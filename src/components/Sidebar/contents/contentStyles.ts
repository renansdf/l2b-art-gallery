import styled from 'styled-components';

export const LoadedContentContainer = styled.div`
    font-family: "Volkart_Light";
`;

export const PagesContainer = styled.div`
    @media only screen and (max-width: 600px) {
        padding-bottom: 0;
        margin: 0;
    }
`;

export const ContentPage = styled.div`
    font-family: "Volkart_Light";
    color: var(--l2b-dark-grey);
    text-align: left;
    width: 426px;
    font-size: 18px;
    margin: 0;
    padding: 0;
    white-space: pre-line;
`;