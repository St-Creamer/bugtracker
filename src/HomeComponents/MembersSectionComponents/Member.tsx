import React from "react";
import styled from "styled-components";
import { IUser } from "../../App";
import { SpecialLabel } from "../Label";

const MemberStyle = styled.div`
    line-height: 3rem;
    height:3.5rem;
    width:100%;
    border-bottom:1px solid ${Props => Props.theme.color.basic2};
    display:flex;
    justify-content:space-around;
`
const MemberName = styled.div`
    font-size:${Props=>Props.theme.font.large};
    width:40%;
`

interface Props {user:IUser}

export const Member: React.FC<Props> = ({user}) => {
    let color: string = "";
    switch (user.role) {
      case "member":
        color = "#25A6B8";
        break;
      case "admin":
        color = "#ACDAE0";
        break;
      default:
        color = "#E7E7E7";
        break;
    }
  return (
    <MemberStyle>
        <MemberName>{user.name}</MemberName>
        <SpecialLabel text={user.role} color={color}/>
    </MemberStyle>
  );
};