import styled, { css } from "styled-components";
import { ShadeColor } from "@sys/utils";
import { columnThread, columnData, columnIcon } from "@modules/columns/types";

export const ColumnsWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

// SelectType Components
export const ColumnCategory = styled.div`
    display : grid;
    grid-template-columns : repeat(12, 1fr);
    column-gap : 1.5em;
    row-gap : .5em;
    font-size: small;
    margin : 1em 1em 1em 1em;
`

export const ColumnTitle = styled.div`
    margin : 1em;
    padding-bottom : .5em;
    ${ ({ theme }) => css`
    border-bottom : 1px solid ${theme.secondary}
    `}
`

export const ColumnItem = styled.div`
    display : flex;
    grid-column: span 6 / auto;
    border-radius : .4em;
    height: 5em;
    align-items: center;
    cursor : pointer;
        ${({ theme }) => css`
            border : 1px solid ${theme.secondary};
        :hover {
            background-color: ${ShadeColor(theme.primary, 160)};
        }
    `}
`

export const ColumnData: any = styled.div<columnData>`
    display : flex;
    margin : 0;
    padding .5em;
        ${({ flexDirection }) => css`
            flex-direction : ${flexDirection};
    `}
`

export const ColumnIcon = styled.div<columnIcon>`
    padding : .1em .6em .1em .6em;
    margin : .5em;
    width: fit-content;
        ${({ theme , setBorder }) => setBorder && css`
            background-color : ${ShadeColor(theme.primary, 180)};
            border : 1px solid ${theme.primary};
            color : ${theme.primary};
            border-radius : ${theme['border-radius']};
    `}
`

// Table Category View Components
export const ColumnTable = styled.div`
    margin: 1em;
    background-color : white;
    border-radius : .4em;
    padding : 1.5em;
`

export const ColumnTableItem = styled.div`
    font-size: small;
    display : grid;
    grid-template-columns : repeat(12, 1fr);
        ${ ({ theme }) => css`
            border-bottom : 1px solid ${theme.secondary}
    `}
`

export const ColumnTableThreads: any = styled.div`
    grid-column: ${({ span }: columnThread) => (span ? `span ${span} / auto` : 'span 6 / auto')};
    align-items : center;
    display : flex;
    padding : .5em;
`