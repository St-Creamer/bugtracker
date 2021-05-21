import React from "react";
import styled from "styled-components";
import { SpecialButton } from "../SpecialButton";

interface Props{count?:number}

const MembersHeaderStyle = styled.div<Props>`
    height:3.5rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:${Props => Props.theme.color.basic2};
    padding:0;
    font-size: ${(Props) => Props.theme.font.large};
    line-height: 3rem;
  text-align: center;
`
const MembersCount = styled.div`
    width:90%;
`


export const MembersHeader: React.FC<Props> = ({count}) => {
  return (
    <MembersHeaderStyle>
        <MembersCount>Members: {count}</MembersCount>
        <SpecialButton/>
    </MembersHeaderStyle>
  );
};