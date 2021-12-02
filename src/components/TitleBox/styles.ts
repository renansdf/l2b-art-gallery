import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  font-size: 40px;
  font-weight: bold;
  color: #777;
  padding: 20px 35px;
  box-shadow: 0px 0px 20px -7px #888;

  position: fixed;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  z-index: 14;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`