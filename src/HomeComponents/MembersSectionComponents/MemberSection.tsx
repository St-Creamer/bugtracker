import React, { useContext } from "react";
import { IProject } from "../../App";

interface Props {
  CurrentProject: IProject;
}

export const MemberSection: React.FC<Props> = ({ CurrentProject }) => {

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ TODO $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  return (
    <>
      {CurrentProject.users.map((user:{_id:string})=>{
        return <div>{user._id}</div>
      })}
    </>
  );
};
