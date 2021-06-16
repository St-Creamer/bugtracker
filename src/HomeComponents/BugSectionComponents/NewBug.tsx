import styled from "styled-components";

export const NewBug = styled.button`
    border:none;
    height:100%;
    width:20%;
    background:${props => props.theme.color.primary2};
    cursor:pointer;
    font-size:${props => props.theme.font.large};
    font-style:italic;
`