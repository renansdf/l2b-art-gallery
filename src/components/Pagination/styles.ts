import styled, { css } from 'styled-components';

import nextArrow from '../../assets/img/content_next_page_arrow.png';
import previousArrow from '../../assets/img/content_previous_page_arrow.png';

interface IPaginationButtonProps{
  isDisabled: boolean;
}

interface IPaginationContainer{
  inLastPage: boolean;
}

export const PaginationContainer = styled.article<IPaginationContainer>`
  width: 100%;
  height: auto;
  background-color: var(--l2b-transparent);
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${props => props.inLastPage && css`
    div:last-child{
      margin-right: 50px;
    }
  `}

  @media only screen and (max-width: 600px) {
    margin-right: 30px;
    width: 90%;
  }
`;

export const Next = styled.button<IPaginationButtonProps>`
  height: 20px;
  width: 40px;
  background: url(${nextArrow});
  background-position: left;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

export const Previous = styled.button<IPaginationButtonProps>`
  height: 20px;
  width: 40px;
  background: url(${previousArrow});
  background-position: right;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

export const PageCounter = styled.div`
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
`;