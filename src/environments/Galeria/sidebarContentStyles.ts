import styled from 'styled-components';

export const Container = styled.div``;

export const LoadedContentContainer = styled.div`
    font-family: "Volkart_Light";
    text-align: center;

    @media only screen and (max-width: 600px) {
        padding-left: inherit;
    }
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

    b{
        font-family: "Volkart_Bold";
        line-height: 35px;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        word-wrap: break-word;
    }
`;

export const DefaultParagraph = styled.p`
    padding: 0;
    top: 0;
`;

export const WelcomeRoomLink = styled.b`
    cursor: pointer;

    &:hover, &:active{
        color: var(--l2b-dark-red);
    }
`;

export const WelcomeArtistPage = styled.div`
    white-space: normal;
`;

export const WelcomeArtistItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 40px;

    b{
        padding-right: 20px;
    }
`;

export const ContentTitle = styled.h1``;

export const PaginationFooter = styled.div``;
export const PaginationArrow = styled.button``;
export const PaginationCounter = styled.div``;
