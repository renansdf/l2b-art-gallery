import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #000;
    margin: 0;
`;

export const SidebarMock = styled.div`
  width: 562px;
  padding: 90px 70px 70px 70px;
  height: 90vh;
  background: white;
`;

export const Title = styled.textarea`
  width: 100%;
  font-size: 32px;
  font-family: 'Volkart-Bold';
  font-weight: normal;

  border: none;
  outline: none;
  margin: 0;
  padding: 0;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 90%;
  line-height: 2.14em;
  font-size: 16px;

  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`;