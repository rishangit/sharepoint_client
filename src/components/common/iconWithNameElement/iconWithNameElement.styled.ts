import styled, { css } from "styled-components";
import { ShadeColor } from "@sys/utils";
import { columnThread, columnData, columnIcon } from "@modules/columns/types";

export { TableThreads } from 'app-styled';

export const ColumnIcon: any = styled.div<columnIcon>`
    padding : .1em .6em .1em .6em;
    margin : .5em;
    width: fit-content;
        ${({ theme, setBorder }) => setBorder && css`
            background-color : ${ShadeColor(theme.primary, 180)};
            border : 1px solid ${theme.primary};
            color : ${theme.primary};
            border-radius : ${theme['border-radius']};
    `}
`