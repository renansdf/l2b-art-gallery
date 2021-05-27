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
`;

export const GalleryImage = styled.img`
  max-width: 80%;
  max-height: 80vh;
`;