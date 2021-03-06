import styled, { css } from "styled-components";
import { ShadeColor } from "@sys/utils";

interface NaviWrapperProps {
  seleced: any;
  theme: any;
}

const NaviWrapper = styled.div`
  width: 350px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

const NavigationItem : any = styled.div<NaviWrapperProps>`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${({ theme }) => css`
     {
      border-bottom: 1px solid ${theme.secondary};
      padding: ${theme["padding-sm"]} ${theme["padding-lg"]};
      color: ${theme["headings-text"]};
    }
  `}

  ${({ seleced, theme }) =>
    seleced &&
    css`
      background-color: ${theme.primary};
      color: white !important;
    `}}
`;

const ItemContainer = styled.div`
  width: 100%;
  ${({ theme }) => css`
    padding: ${theme["padding-sm"]} ${theme["padding-lg"]};
    &:hover {
      background-color: ${ShadeColor(theme.primary, 160)};
      color: ${theme.primary};
    }
  `}
`;

export { NaviWrapper, NavigationItem, ItemContainer };
