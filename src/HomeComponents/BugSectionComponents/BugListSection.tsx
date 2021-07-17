import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentProjectContext } from "../../CurrentProjectContext";

interface Props {}

const BugListSectionStyle = styled.div`
    border: 1px solid black;
    height:100%;
    width:100%;
`
const ListHeader = styled.div`
    border-bottom: 1px solid ${Props => Props.theme.color.basic2};
    height:3.5rem;
    width:100%;
`

export const BugListSection: React.FC<Props> = () => {
    //this should be replaced by current project bugs
    const CurrentProjectValue = useContext(CurrentProjectContext);
    const HeaderColumns = Object.entries(CurrentProjectValue.current).map(prop =>{return prop[0]})
    console.log(CurrentProjectValue.current)
  return (
    <BugListSectionStyle>
        <ListHeader>

        </ListHeader>
    </BugListSectionStyle>
  );
};