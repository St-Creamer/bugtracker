import React, { useContext } from "react";
import styled from "styled-components";
import { IUser } from "../../App";
import { CurrentProjectContext } from "../../CurrentProjectContext";
import { SpecialLabel } from "../Label";

const MemberStyle = styled.div`
  line-height: 3rem;
  height: 3.5rem;
  width: 100%;
  border-bottom: 1px solid ${(Props) => Props.theme.color.basic2};
  display: flex;
  justify-content: space-around;
`;
const MemberName = styled.div`
  font-size: ${(Props) => Props.theme.font.large};
  width: 40%;
`;

interface Props {
  user: IUser;
}

export const Member: React.FC<Props> = ({ user }) => {
  const CurrentProjectValue = useContext(CurrentProjectContext);
  let color: string = "";
  switch (user.role) {
    case "Member":
      color = "#25A6B8";
      break;
    case "Admin":
      color = "#ACDAE0";
      break;
    default:
      color = "#E7E7E7";
      break;
  }
  //not the prettiest maybe change it in the future
  const currentUserId = document.cookie
    .split(";")
    .filter((i) => i.includes("id"))[0]
    .slice(4);
  return (
    <MemberStyle>
      <MemberName>{user.name}</MemberName>
      {CurrentProjectValue.current.author == currentUserId
        ? <SpecialLabel text={"Author"} bgColor="black" textColor="white" />
        : <SpecialLabel text={user.role} bgColor={color}  textColor="black"/>}
    </MemberStyle>
  );
};
