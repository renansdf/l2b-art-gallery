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
  background: #fff;
  width: 90%;
  max-width: 700px;
  height: 90%; 
  max-height: 350px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media only screen and (max-width: 600px){
    max-height: 100%;
    height: fit-content;
  }
`;

export const Slide = styled.div`
  padding: 40px;
  background: transparent;
  text-align: center;
  width: 100%;

  h1{
    margin: 0 auto 10px;
    color: #333333;
  }

  p{
    max-width: 470px;
    width: 90%;
    margin: 0 auto;
    letter-spacing: 1px;
    color: #333333;
    font-size: 17px;
    line-height: 1.5em;
  }

  p + p{
    margin-top: 10px;
  }

  img{
    display: block;
    margin: 0 auto 10px;
    max-width: 70px;
  }

  @media only screen and (max-width: 600px){
    padding: 50px 20px;

    h1{
      font-size: 17px;
    }
    p{
      font-size: 13px;
    }

    img{
      max-width: 50px;
    }

  }
`;

export const CloseInstructions = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  background: none;
  
  font-family: "Volkart_Light";
  color: var(--l2b-light-grey);
  font-size: 40px;

  &:hover, &:focus{
    color: var(--l2b-black);
    text-decoration: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px){
    top: 3px;
    right: 7px;
  }
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 14px; 
  right: 0px;
`;