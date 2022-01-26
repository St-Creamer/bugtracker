import styled from "styled-components";

export const NewProject = styled.button`
    border: none;
    background-color:${props => props.theme.color.primary3};
    min-height:50px;
    height:3.5rem;
    font-size: ${props => props.theme.font.large};
    cursor: pointer;
    transition:.5s ease all;
    &:hover{
    filter: brightness(.8) 
    }
`