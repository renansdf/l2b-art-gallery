import styled, { css } from 'styled-components';

const ArrowDefault = css`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  height: auto;
  padding: 16px;
  margin-top: -50px;
  color: var(--l2b-white-full);
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 3px 3px 3px 3px;
  z-index: 20;
  background-color: var(--l2b-black);
  clip-path: circle();
  line-height: 100%;
`;

export const ArrowNext = styled.div`
  ${ArrowDefault}

  right: 0;
`;

export const ArrowPrevious = styled.div`
  ${ArrowDefault}

  left: 0;
`;