import styled from "styled-components";

export const Logo = styled.div`
    height:7rem;
    background-color: ${props => props.theme.color.primary1};
    color:${props => props.theme.color.white};
    width:100%;
    text-align:center;
    line-height:7rem;
    font-family:${props => props.theme.font.family} , sans-serif;
    font-size:${props => props.theme.font.big};
    font-weight:bold;
    :hover{
        cursor: pointer;
    }
`