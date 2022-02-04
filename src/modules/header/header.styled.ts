import styled, { css } from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  ${({ theme }) => css`
    padding: ${theme["padding-sm"]} 0;
  `}
`;

const ActionContainer = styled.div`
margin-left:auto;
`

export { HeaderWrapper, ActionContainer };
