import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  66%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 700px;
  height: 90%; 
  max-height: 350px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 40px;

  opacity: 1;

  animation: 3s ${fadeIn} ease-out 1;

  h1{
    margin: 0 auto 10px;
    font-size: 22px;
    color: #333333;
  }

  p{
    width: 100%;
    margin: 0 auto;
    letter-spacing: 1px;
    color: #333333;
    font-size: 14px;
    line-height: 1.4em;
  }

  p + p{
    margin-top: 10px;
  }

  img{
    display: block;
    margin: 0 auto 10px;
    max-width: 70px;
  }
`;

export const CloseInstructions = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &::before{
    content: 'x';
    color: #000;
  }
`;