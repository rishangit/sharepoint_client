import { FC } from "react";
import styled, { css } from "styled-components";

export const MainTitle = styled.h2`
  font-weight: 400;
  margin-block-start: 0.125rem;
  margin-block-end: 0.125rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  ${({ theme }) => css`
    color: ${theme["headings-text"]};
  `}
`;
