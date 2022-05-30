import styled, { css } from "styled-components";
import { columnThread, columnData, columnIcon, tableBg, TableThreadsProps } from "@modules/columns/types";
import { ShadeColor } from "@sys/utils";

export const Table: any  = styled.div<tableBg>`
    margin: 1em;
    background-color: white;
    ${({theme , secondary })=> secondary && css`
        // background-color : ${ShadeColor(theme.secondary, 10)}
        overflow: scroll;
        height: 15rem;
    `};
    border-radius : .4em;
    padding : 1.5em;
`

export const TableItem = styled.div`
    font-size: small;
    display : grid;
    grid-template-columns : repeat(12, 1fr);
        ${ ({ theme }) => css`
            border-bottom : 1px solid ${theme.secondary}
    `}
`

export const TableThreads: any = styled.div<TableThreadsProps>`
    grid-column: ${({ span }: columnThread) => (span ? `span ${span} / auto` : 'span 6 / auto')};
    align-items : center;
    display : flex;
    padding : .5em;
    ${({theme, bgColor})=> bgColor && css`
        background-color: ${theme.secondary};
        border-radius : .4em;
        border: 1px solid white;
    `}
`
export const TableIcon : any = styled.div<columnIcon>`
    padding : .1em .6em .1em .6em;
    margin : .5em;
    width: fit-content;
        ${({ theme , setBorder }) => setBorder && css`
            background-color : ${ShadeColor(theme.primary, 180)};
            border : 1px solid ${theme.primary};
            color : ${theme.primary};
            border-radius : ${theme['border-radius']};
    `}
`;