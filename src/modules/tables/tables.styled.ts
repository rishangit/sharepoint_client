import styled, { css } from "styled-components";
import { columnThread, columnData, columnIcon, tableBg } from "@modules/columns/types";
import { ShadeColor } from "@sys/utils";

export const ContentTypesWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

export const ContentTypeTable: any  = styled.div<tableBg>`
    margin: 1em;
    background-color: white;
    ${({theme , secondary })=> secondary && css`
        // background-color : ${ShadeColor(theme.secondary, 10)}
        overflow: scroll;
    `};
    border-radius : .4em;
    padding : 1.5em;
    height: 15rem;
`

export const ContentTypeTableItem = styled.div`
    font-size: small;
    display : grid;
    grid-template-columns : repeat(12, 1fr);
        ${ ({ theme }) => css`
            border-bottom : 1px solid ${ShadeColor(theme.primary, 160)}
    `}
`

export const ContentTypeTableThreads: any = styled.div`
    grid-column: ${({ span }: columnThread) => (span ? `span ${span} / auto` : 'span 6 / auto')};
    align-items : center;
    display : flex;
    padding : .5em;
`

export const ContentTypeIcon : any = styled.div<columnIcon>`
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
        ${({theme})=> css`
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
