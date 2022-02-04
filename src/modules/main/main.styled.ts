import styled, { css } from "styled-components";

const MainWrapper = styled.div`
  width: calc(100% - 350px);
  background-color: green;
  height: 100vh;
  position: fixed;
  left:350px;
  box-sizing:border-box;
  ${({theme}) => css`
     {
      background-color:${theme.secondary};
      padding:${theme['padding-lg']} ${theme['padding-xl']};
    }
  `}
`;

export { MainWrapper };