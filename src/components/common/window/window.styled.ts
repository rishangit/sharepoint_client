import styled, { css } from "styled-components";
import { ShadeColor } from "@sys/utils";

const PopupShade = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10001;
        ${ ({ theme }) => css`
            background-color: ${ShadeColor(theme.primary, 180)}
        `}
`;

export { PopupShade };