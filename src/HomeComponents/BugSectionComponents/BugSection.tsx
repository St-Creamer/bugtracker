import React, { useState } from "react";
import styled from "styled-components";
import { BugSearchBar } from "./BugSearchBar";
import { NewBug } from "./NewBug";
import { Modal } from "../../ModalSlug/Modal";
import { ModalBody } from "../../ModalSlug/ModalBody";
import { ModalFooter } from "../../ModalSlug/ModalFooter";
import { ModalHeader } from "../../ModalSlug/ModalHeader";

interface Props {}

const BugHeader = styled.div`
  border-bottom: 1px solid ${(Props) => Props.theme.color.basic2};
  height: 3.5rem;
  width: 100%;
  display: flex;
`;
const ButtonStyle = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 2rem;
`;
export const BugSection: React.FC<Props> = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const modalHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <BugHeader>
        <NewBug onClick={modalHandler}>New Bug +</NewBug>
        <Modal show={toggle} clicked={modalHandler}>
          <ModalHeader>Create a new bug</ModalHeader>
          <ModalBody> New Bug Form Here</ModalBody>
          <ModalFooter>
            <ButtonStyle onClick={modalHandler}>Cancel</ButtonStyle>
            <ButtonStyle onClick={modalHandler}>Ok</ButtonStyle>
          </ModalFooter>
        </Modal>
        <BugSearchBar />
      </BugHeader>
    </>
  );
};
