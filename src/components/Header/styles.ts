import styled from 'styled-components';

export const Container = styled.div`
    font-family: "Volkart-Medium";
    width: 100%;
    overflow: hidden;
    background-color: var(--l2b-transparent);
    position: fixed !important;
    top: 0;
    padding: 25px;
    pointer-events: none;
    z-index: 2;
`;

export const HeaderDesktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const HeaderMobile = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: flex-start;
  }
  
  h2{
    margin-top: 3px;
  }

  span{
    display: flex;
  }

  aside{
    display: flex;
    align-items: flex-start;

    span{
      margin-top: 0px;
    }
  }
`;

export const Logo = styled.img`
  width: 155px;
  margin-top: 5px;

  @media only screen and (max-width: 600px) {
    width: 85px;
    margin-top: 0px;
  }
`;

export const MenuButton = styled.span`
    display: block;
    color: var(--l2b-white-full);
    text-align: center;
    font-weight: normal;
    cursor:pointer; 
    margin: 18px;
    font-size: 24px;
    pointer-events: all;
`;

export const RoomName = styled.h2`
    color: var(--l2b-white-full);
    text-align: center;
    font-weight: normal;
    display: block;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
      margin: 10px 0 0;
      text-align: left;
    }
`;

export const ToggleMusic = styled.aside`
  img{  
    margin-bottom: -3px;
    cursor: pointer;
    width: 32px;
    margin-left: 30px;
  }
  pointer-events: all;

  @media only screen and (max-width: 600px) {
    img{
      max-width: 17px;
      margin-left: 10px;
    }
  }
`;