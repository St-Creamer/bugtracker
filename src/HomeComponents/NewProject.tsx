import styled from "styled-components";

export const NewProject = styled.button`
    border: none;
    background-color:${props => props.theme.color.primary3};
    height:3.5rem;
    font-size: ${props => props.theme.font.large};
    cursor: pointer;
`