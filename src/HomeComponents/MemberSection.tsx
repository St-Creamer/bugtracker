import React, { useContext } from "react";
import { UserContext } from "../userContext";

interface Props {
  CurrentProject: any;
}

export const MemberSection: React.FC<Props> = ({ CurrentProject }) => {
  const UserValue = useContext(UserContext);
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ TODO $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  let users = CurrentProject;

  return <>{UserValue.me.name}</>;
};
