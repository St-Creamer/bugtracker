import styled from "styled-components";

interface Props{
    size?: number;
    color?:string;
}

export const Frame = styled.div<Props>`
    height:100%;
    width:${Props => Props.size? Props.size+"%" : "70%"};
    background-color:${Props=>Props.color};
    display:flex;
    flex-direction:column
`