import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #000;
    margin: 0;
`;

export const GalleryRoom = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
    max-width: 300px;
    margin: 40px;
    position: relative;

    h3{
        color: #fff;
        font-size: 30px;
        font-family: sans-serif;
        font-weight: lighter;
        letter-spacing: 1px;
    }

    img{
        max-width: 100%;
    }

    &:hover div{
        opacity: 1;
    }
`;

export const RoomLinks = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    opacity: 0;
    transition: all .4s;

    a{
        width: 100%;
        text-align: center;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-family: sans-serif;
        transition: background-color .3s;
        border: none;
        outline: none;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: #202020;
        }
    }
`;