import styled, { css } from "styled-components";
import { ShadeColor } from "@sys/utils";

export const ManageWindowContainer = styled.div`
    height: 100%;
    padding-left: 2rem;
    h2{
        margin-bottom: 1rem;
        padding-bottom: .5rem;
        ${ ({ theme }) => css`
        border-bottom : 1px solid ${theme.secondary}
        `}
    }
    form{
        padding-left: 2rem;
    }
    select{
        z-index: 1003 !important;
    }
`;

export const ColumnTypeRadioWrapper = styled.div`
    .k-radio-list{
        flex-direction: row;
        margin: .5rem 0;
    } 
    .k-radio-item{
        ${({ theme }) => css`
            border: 2px solid ${theme.secondary};
            border-radius : ${theme['border-radius']};
            padding: 1rem 1rem;
            margin-right: 1rem;
            &:hover{
                background-color: ${theme.secondary};
            }
        `}
    }
    .k-radio{
        margin-right: .5rem;
    }  
`;

export const ColumnGruopTypeTitle = styled.h4`
    margin-top: 1.5rem;
    padding-bottom: .5rem;
    ${ ({ theme }) => css`
    border-bottom : 1px solid ${theme.secondary}
    `}
`;

export const ButtonContainer = styled.div`
        position: absolute;
        bottom: 1rem;
        right: 2rem;
`;