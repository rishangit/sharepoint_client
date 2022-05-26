import styled, { css } from "styled-components";
import { columnThread, columnData, columnIcon, tableBg } from "@modules/columns/types";
import { ShadeColor } from "@sys/utils";
import { Table, TableIcon, TableItem, TableThreads } from 'sys-styled';

export const ContentTypesWrapper = styled.div`
    display:flex;
    flex-direction:column;
`
export const ContentTypeWindowContainer = styled.div`
    height: 100%;
    padding-left: 2rem;
    h2{
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        padding-bottom: .5rem;
        ${ ({ theme }) => css`
        border-bottom : 1px solid ${theme.secondary}
        `}
    }
    form{
        padding-left: 2rem;
    }
`;

export const ButtonContainer = styled.div`
        position: absolute;
        bottom: 1rem;
        right: 2rem;
`;

export const AutoCompleteContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    button{
        height: fit-content;
        margin: 1.5rem 0 0 2rem;
    }
    .k-form-field{
        width: 50%;
    }
`;

export const ContentTypeRadioWrapper = styled.div`
    .k-radio-list{
        flex-direction: row;
        margin: .5rem 0;
    } 
    .k-radio-item{
        ${({ theme }) => css`
            border: 2px solid ${ShadeColor(theme.primary, 120)};
            border-radius : ${theme['border-radius']};
            padding: 1rem 1rem;
            margin-right: 1rem;
            &:hover{
                background-color: ${ShadeColor(theme.primary, 160)};
            }
        `}
    }
    .k-radio{
        margin-right: .5rem;
    }  
`;

export { Table, TableIcon, TableItem, TableThreads }
