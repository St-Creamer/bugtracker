import React, { useContext } from "react";
import { IUser } from "../../App";
import { CurrentProjectContext } from "../../CurrentProjectContext";
import { Member } from "./Member";
import { MembersHeader } from "./MembersHeader";
import { v4 as uuidv4 } from "uuid"

interface Props {}

export const MemberSection: React.FC<Props> = () => {
  //get current project
  const CurrentProjectValue = useContext(CurrentProjectContext);
  //get current users
  const CurrentUsers = (CurrentProjectValue.current.users as IUser[])
  return (
    <>
      <MembersHeader count={CurrentProjectValue.current.users.length} />
      {CurrentUsers.map((user:IUser) => {
        return <Member key={uuidv4()} user={user}/>;
      })}
    </>
  );
};
