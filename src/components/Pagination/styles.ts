import styled, { css } from 'styled-components';

import nextArrow from '../../assets/img/content_next_page_arrow.png';
import previousArrow from '../../assets/img/content_previous_page_arrow.png';

interface IPaginationButtonProps{
  isDisabled: boolean;
}

export const PaginationContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--l2b-transparent);
  bottom: 10;
  text-align: right;

  @media only screen and (max-width: 600px) {
    margin-right: 30px;
    width: 90%;
  }
`;

export const Next = styled.button<IPaginationButtonProps>`
  float: right;
  height: 20px;
  width: 40px;
  background: url(${nextArrow});
  background-position: left;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;

  ${props => props.isDisabled && css`
    cursor: not-allowed;
  `}
`;

export const Previous = styled.button<IPaginationButtonProps>`
  float: right;
  height: 20px;
  width: 40px;
  background: url(${previousArrow});
  background-position: right;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;

  ${props => props.isDisabled && css`
    cursor: not-allowed;
  `}
`;

export const PageCounter = styled.div`
  float: right;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
`;