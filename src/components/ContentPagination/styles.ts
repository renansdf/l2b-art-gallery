import styled from 'styled-components';

export const Container = styled.div`
  h1{
    margin-bottom: 5px;
  }

  h3{
    margin: 0px;
    color: grey;
  }
  
  h3 + h3{
    margin-top: 5px;
  }
  
  h3 + div{
    margin-top: 15px;
  }
  
  p{
    display: table;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 15px;
  }

  a{
    color: #AF2420;
    text-decoration: underline;
  }

  article{
    position: absolute;
    right: 70px;
    bottom: 40px;
  }
`;
