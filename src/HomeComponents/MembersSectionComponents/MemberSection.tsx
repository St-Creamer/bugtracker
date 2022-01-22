import React, { useContext } from "react";
import { IUser } from "../../App";
import { CurrentProjectContext } from "../../CurrentProjectContext";
import { members } from "../../DB/DB";
import { Member } from "./Member";
import { MembersHeader } from "./MembersHeader";

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
        return <Member key={user._id} user={user}/>;
      })}
    </>
  );
};
