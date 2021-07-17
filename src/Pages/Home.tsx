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
import { Modal } from "../ModalSlug/Modal";
import { ModalBody } from "../ModalSlug/ModalBody";
import { ModalFooter } from "../ModalSlug/ModalFooter";
import { ModalHeader } from "../ModalSlug/ModalHeader";
import { BugSection } from "../HomeComponents/BugSectionComponents/BugSection";
import styled from "styled-components";
import { MockProjects } from "../DB/DB";

const ButtonStyle = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 2rem;
`;

export const Home: React.FC = () => {
  //projects should come from the backend, belonging projects are filtered further down but the user can browse them all
  const [projects, setProjects] = useState<IProject[]>(MockProjects);
  const ProjectsValue = useMemo(
    () => ({ projects, setProjects }),
    [projects, setProjects]
  );

  // const ProjectsValue = useContext(ProjectsContext);
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
  //new project modal logic
  const [toggle, setToggle] = useState<boolean>(false);
  const modalHandler = () => {
    setToggle(!toggle);
  };

  return (
    <ProjectsContext.Provider value={ProjectsValue}>
      <Background>
        <CurrentProjectContext.Provider value={CurrentProjectValue}>
          <Frame size={20} color={Theme.color.primary2}>
            <Logo>BugTracker</Logo>
            <NewProject onClick={modalHandler}>New Project +</NewProject>
            <Modal show={toggle} clicked={modalHandler}>
              <ModalHeader>New Project</ModalHeader>
              <ModalBody> New Project Form Here</ModalBody>
              <ModalFooter>
                <ButtonStyle onClick={modalHandler}>Cancel</ButtonStyle>
                <ButtonStyle onClick={modalHandler}>Ok</ButtonStyle>
              </ModalFooter>
            </Modal>
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
          <Frame color={Theme.color.white}>
            <BugSection />
          </Frame>
        </CurrentProjectContext.Provider>
      </Background>
    </ProjectsContext.Provider>
  );
};
