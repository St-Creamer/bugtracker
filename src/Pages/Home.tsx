import React, { useContext, useMemo, useState } from "react";
import { Background } from "../HomeComponents/Background";
import { Frame } from "../HomeComponents/Frame";
import { Logo } from "../HomeComponents/ProjectSectionComponents/Logo";
import { NewProject } from "../HomeComponents/ProjectSectionComponents/NewProject";
import { Project } from "../HomeComponents/ProjectSectionComponents/Project";
import { ProjectSection } from "../HomeComponents/ProjectSectionComponents/ProjectSection";
import { ProjectsContainer } from "../HomeComponents/ProjectSectionComponents/ProjectsContainer";
import { Theme } from "../Theme";
import { MemberSection } from "../HomeComponents/MembersSectionComponents/MemberSection";
import { IProject } from "../App";
import { ProjectsContext } from "../ProjectsContext";
import { CurrentProjectContext } from "../CurrentProjectContext";

export const Home: React.FC = () => {
  const ProjectsValue = useContext(ProjectsContext);
  //setting CurrentProjectContext
  const [current, setCurrent] = useState<IProject>(ProjectsValue.projects[0]);
  const CurrentProjectValue = useMemo(
    () => ({ current, setCurrent }),
    [current, setCurrent]
  );
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
      <CurrentProjectContext.Provider value={CurrentProjectValue}>
        <Frame size={20} color={Theme.color.primary2}>
          <Logo>BugTracker</Logo>
          <NewProject>New Project +</NewProject>
          {/* this part serves as tabs */}
          <ProjectsContainer>
            {ProjectsValue.projects.map((item: IProject, i) => (
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
        <Frame size={30} color={Theme.color.basic1}>
          {/* this part serves as tab content */}
          <ProjectSection />
          <MemberSection />
        </Frame>
        <Frame color={Theme.color.white}></Frame>
      </CurrentProjectContext.Provider>
    </Background>
  );
};
