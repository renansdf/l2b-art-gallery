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
  max-width: 620px;
  height: 90%; 
  max-height: 480px;
  
  padding: 40px;
  opacity: 1;
  animation: 3s ${fadeIn} ease-out 1;
`;

export const CloseInstructions = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  background: none;
  color: var(--l2b-light-grey);

  &:hover, &:focus{
    color: var(--l2b-black);
  }
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 14px; 
  right: 0px;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h1{
    width: 100%;
    text-align: left;
    margin: 0 auto 10px;
    font-size: 22px;
    color: #333333;
  }

  p{
    width: 100%;
    margin: 0 auto;
    letter-spacing: 1px;
    color: #6d6d6d;
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