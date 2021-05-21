import React, { useContext } from "react";
import { CurrentProjectContext } from "../../CurrentProjectContext";
import { Member } from "./Member";
import { MembersHeader } from "./MembersHeader";

interface Props {}

export const MemberSection: React.FC<Props> = () => {
  const CurrentProjectValue = useContext(CurrentProjectContext);

  return (
    <>
      <MembersHeader count={CurrentProjectValue.current.users.length} />
      {CurrentProjectValue.current.users.map((user: { _id: string }) => {
        return <Member>{user._id}</Member>;
      })}
    </>
  );
};
