import styled from 'styled-components';

import desktopMenuArrow from '../../assets/img/desktop_menu_arrow_hover.svg';
import arrowDownRight from '../../assets/img/arrow-down-right.svg';

export const MapTitle = styled.h2`
    display: none;
    font-family: "Volkart-Medium";
    color: var(--l2b-light-grey);
    top: 117px;
    left: 1429px;
    width: 85px;
    height: 39px;
    text-align: left;
    font: Medium 32px/39px Volkart ☞;
    letter-spacing: 0.48px;
    color: var(--l2b-light-grey);
    opacity: 1;
    font-weight: normal;
`;

interface ItemContainerProps{
    teleport_to?: string;
}

export const ItemContainer = styled.div<ItemContainerProps>`
    top: 215px;
    left: 1429px;
    width: 99%;
    min-height: 110px;
    background-color: var(--l2b-transparent);
    border-bottom: 1px solid var(--l2b-light-grey);
    background: url(${arrowDownRight}) 0% 0% no-repeat padding-box;
    background-repeat: no-repeat;
    background-position: right;
    background-size: 40px;
    background-position-y: center;
    float: left;
    cursor: pointer;

    transition: linear 250ms;

    padding: 0;
    color: var(--l2b-grey);

    &:last-child {
        background: none;
        border-bottom: none;
    }

    &:last-child:hover {
        background-image: none;
        border-bottom: none;
    }

    &:hover,
    &:active {
        border-bottom: 1px solid var(--l2b-red);
        background: url(${desktopMenuArrow}) 0% 0% no-repeat padding-box;
        background-repeat: no-repeat;
        background-position: right;
        background-size: 40px;
    }

    aside{
      display: flex;
      margin-top: -30px;

      img{max-width: 40px;}
    }

    @media only screen and (max-width: 600px) {
        border-bottom: 0px;
        width: 100% !important;
        background-size: 25px;
    }
`;

export const ItemTitle = styled.div`
    font-family: "Volkart-Medium";
    font-size: 22px;
    font-weight: 500;
    padding: 50px 50px 0px 0px;
    color: var(--l2b-dark-grey  );
`;

export const ItemDescription = styled.div`
    font-size: 18px;
    font-family: "Volkart-Light";
    font-weight: 600;
    padding: 10px 40px 30px 0px;
    color: var(--l2b-light-grey);
    /*white-space: pre;*/
    line-height: 2;

    p{
      margin: 0;
    }

    @media only screen and (max-width: 600px) {
        font-size: 12px;
        line-height: 1.4em;
        letter-spacing:.5px;
    }
`;

export const ContactEmail = styled.a`
    padding: 0;
    text-decoration: underline!important;
    color: var(--l2b-grey);

    &:hover, &:active{
        color: var(--l2b-red);
    }
  `;

  export const CloseButton = styled.span`
    font-family: "Volkart_Light";
    color: var(--l2b-light-grey);
    background: #fff;
    float: right;
    font-size: 40px;
    position: absolute;
    top: 33px;
    right: 23px;
    z-index: 3;

    &:hover, &:focus{
        color: var(--l2b-black);
        text-decoration: none;
        cursor: pointer;
    }
  `;