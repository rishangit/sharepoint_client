import styled, { css } from "styled-components";
import { columnThread, columnData, columnIcon } from "@modules/columns/types";
import { ShadeColor } from "@sys/utils";
import { Table, TableIcon, TableItem, TableThreads } from 'app-styled';


export const GroupsWrapper = styled.div`
    display:flex;
    flex-direction:column;
`
export const GroupsTableWrapper = styled.div`
    height: calc(100vh - 230px);
    position: relative;
    overflow: auto;
    ${({ theme }) => css`

    `}
`
export { Table, TableIcon, TableItem, TableThreads}