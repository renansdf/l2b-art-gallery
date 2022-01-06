import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    color: #fff;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GalleryImage = styled.img`
  max-width: 80%;
  max-height: 80vh;

  @media only screen and (max-width: 600px) {
    /* display: none; */
  }
`;

export const GalleryMobile = styled.div`
  display: none;
  width: 80%;
  background: #fff;
  padding: 10px 15px 5px;

  *{
    color: #000!important;
    margin: 0px 0px 5px 0px!important;
    font-size: 12px;
    line-height: 1em!important;
  }

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;