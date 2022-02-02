import styled, { css } from "styled-components";

const NaviWrapper = styled.div`
  width: 200px;
  background-color: green;
  height: 100vh;
  position: fixed;
  top: 80px;
  ${({theme}) => css`
     {
      background-color:${theme.primary};
    }
  `}
`;

export { NaviWrapper };
