import React, { useContext, useState } from "react";
import { MockProjects } from "./DB/DB";
import { Background } from "./HomeComponents/Background";
import { Frame } from "./HomeComponents/Frame";
import { Logo } from "./HomeComponents/ProjectSectionComponents/Logo";
import { NewProject } from "./HomeComponents/ProjectSectionComponents/NewProject";
import { Project } from "./HomeComponents/ProjectSectionComponents/Project";
import { ProjectSection } from "./HomeComponents/ProjectSectionComponents/ProjectSection";
import { ProjectsContainer } from "./HomeComponents/ProjectSectionComponents/ProjectsContainer";
import { Theme } from "./Theme";
import { MemberSection } from "./HomeComponents/MembersSectionComponents/MemberSection";
import { IProject } from "./App";
import { ProjectsContext } from "./ProjectsContext";

interface Props {}

export const Home: React.FC = () => {
  const ProjectsValue = useContext(ProjectsContext);
  const [current, setCurrent] = useState<IProject>(ProjectsValue.projects[0]);
  // Tab logic
  const [active, setActive] = useState<number>(0);
  const handleClick = (e?: any) => {
    const index: number | null = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <Background>
      <Frame size={15} color={Theme.color.primary2}>
        <Logo>BugTracker</Logo>
        <NewProject>New Project +</NewProject>
        {/* this part serves as tabs */}
        <ProjectsContainer>
          {MockProjects.map((item, i) => (
            <Project
              key={`${item._id}`}
              onClick={(e) => {
                handleClick(e);
                setCurrent(item);
              }}
              active={active === i}
              id={i}
            >
              {item.name}
            </Project>
          ))}
        </ProjectsContainer>
      </Frame>
      <Frame size={25} color={Theme.color.basic1}>
        {/* this part serves as tab content */}
        <ProjectSection CurrentProject={current}/>
        <MemberSection CurrentProject={current}/>
      </Frame>
      <Frame color={Theme.color.white}></Frame>
    </Background>
  );
};
