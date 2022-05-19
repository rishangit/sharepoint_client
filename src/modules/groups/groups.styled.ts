import styled, { css } from "styled-components";
import { columnThread, columnData, columnIcon } from "@modules/columns/types";
import { ShadeColor } from "@sys/utils";

export const GroupsWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

export const GroupTable = styled.div`
    margin: 1em;
    background-color : white;
    border-radius : .4em;
    padding : 1.5em;
`

export const GroupTableItem = styled.div`
    font-size: small;
    display : grid;
    grid-template-columns : repeat(12, 1fr);
        ${ ({ theme }) => css`
            border-bottom : 1px solid ${theme.secondary}
    `}
`

export const GroupTableThreads: any = styled.div`
    grid-column: ${({ span }: columnThread) => (span ? `span ${span} / auto` : 'span 6 / auto')};
    align-items : center;
    display : flex;
    padding : .5em;
`

export const GroupIcon : any = styled.div<columnIcon>`
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