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
`;

export const ButtonContainer = styled.div`
        position: absolute;
        bottom: 1rem;
        right: 2rem;
`;