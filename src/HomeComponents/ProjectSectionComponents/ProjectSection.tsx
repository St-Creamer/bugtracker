import React from "react";
import styled from "styled-components";
import { SpecialButton } from "../SpecialButton";
import { SpecialLabel } from "./Label";

interface Props {
  CurrentProject: any;
}

const ProjectPropertiesStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ProjectNameSection = styled.div`
  height: 3.5rem;
  background-color: ${(Props) => Props.theme.color.basic2};
  line-height: 3rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const ProjectName = styled.div`
  width: 95%;
  font-size: ${(Props) => Props.theme.font.large};
`;

const Status = styled.span`
  font-size: ${(Props) => Props.theme.font.large};
  margin: auto 0px;
`;

const ProjectStatus = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(Props) => Props.theme.color.basic2};
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
`;

const ProjectDate = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(Props) => Props.theme.color.basic2};
  height: 3.5rem;
  padding-left: 10%;
  padding-right: 10%;
  line-height: 3.3rem;
`;

const Date = styled.div`
  font-size: ${(Props) => Props.theme.font.large};
  margin: auto;
  height: 100%;
`;

export const ProjectSection: React.FC<Props> = ({ CurrentProject }) => {
  const text: string = CurrentProject.status;
  let color: string = "";
  const status = CurrentProject.status;
  switch (status) {
    case "todo":
      color = "#25A6B8";
      break;
    case "doing":
      color = "#ACDAE0";
      break;
    case "done":
      color = "#E7E7E7";
      break;
    default:
      color = "#E7E7E7";
      break;
  }
  return (
    <ProjectPropertiesStyle>
      <ProjectNameSection>
        <ProjectName>{CurrentProject.name}</ProjectName>
        <SpecialButton />
      </ProjectNameSection>
      <ProjectStatus>
        <Status>Project Status:</Status>
        <SpecialLabel text={text} color={color} />
      </ProjectStatus>
      <ProjectDate>
        <Date>Date Started: {CurrentProject.dateStarted}</Date>
      </ProjectDate>
    </ProjectPropertiesStyle>
  );
};
