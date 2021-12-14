import styled from 'styled-components';

export const Container = styled.div`
  p{
    display: table;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 15px;
  }

  > div:last-child{
    position: absolute;
    right: 70px;
    bottom: 70px;
  }
`;