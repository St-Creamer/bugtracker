import React, { useContext } from "react";
import { IUser } from "../../App";
import { CurrentProjectContext } from "../../CurrentProjectContext";
import { members } from "../../DB/DB";
import { Member } from "./Member";
import { MembersHeader } from "./MembersHeader";

interface Props {}

export const MemberSection: React.FC<Props> = () => {
  const CurrentProjectValue = useContext(CurrentProjectContext);
  //this should be replaced with db call to retrieve list of members in current project
  const CurrentIdArray = CurrentProjectValue.current.users.map((userId:{_id:string})=>{
    return userId._id
  })
  const CurrentMembers:IUser[]= members.filter((member:IUser)=>{
    return CurrentIdArray.includes(member._id)
  })

  return (
    <>
      <MembersHeader count={CurrentProjectValue.current.users.length} />
      {CurrentMembers.map((user:IUser) => {
        return <Member user={user}/>;
      })}
    </>
  );
};
