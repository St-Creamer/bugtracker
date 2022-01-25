import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SpecialButton } from "../SpecialButton";
import { SpecialLabel } from "../Label";
import { CurrentProjectContext } from "../../CurrentProjectContext";
import { Modal } from "../../ModalSlug/Modal";
import { ModalBody } from "../../ModalSlug/ModalBody";
import { ModalFooter } from "../../ModalSlug/ModalFooter";
import { ModalHeader } from "../../ModalSlug/ModalHeader";

interface Props {}

const ProjectPropertiesStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ProjectHeader = styled.div`
  height: 3.5rem;
  background-color: ${(Props) => Props.theme.color.basic2};
  line-height: 3rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const ProjectName = styled.div`
  width: 90%;
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

const ButtonStyle = styled.button`
  width: 100px;
  height: 30px;
  margin-left:2rem;
`;


export const ProjectSection: React.FC<Props> = () => {
  const CurrentProjectValue = useContext(CurrentProjectContext);
  //label config
  const text: string = CurrentProjectValue.current.status;
  let color: string = "";
  switch (CurrentProjectValue.current.status) {
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
  //modal state
  const [toggle,setToggle] = useState<boolean>(false);
  const modalHandler = () => {
    setToggle(!toggle);
    console.log("modal handler called");
  };
  return (
    <ProjectPropertiesStyle>
      <ProjectHeader>
        <ProjectName>{CurrentProjectValue.current.name}</ProjectName>
        <SpecialButton modalHandler={modalHandler}/>
        <Modal show={toggle} clicked={modalHandler}>
        <ModalHeader>Manage Projects</ModalHeader>
        <ModalBody> project management here</ModalBody>
        <ModalFooter>
          <ButtonStyle onClick={modalHandler}>Cancel</ButtonStyle>
          
        </ModalFooter>
      </Modal>
      </ProjectHeader>
      <ProjectStatus>
        <Status>Project Status:</Status>
        <SpecialLabel text={text} bgColor={color} />
      </ProjectStatus>
      <ProjectDate>
        <Date>Date Started: {CurrentProjectValue.current.dateStarted}</Date>
      </ProjectDate>
    </ProjectPropertiesStyle>
  );
};
