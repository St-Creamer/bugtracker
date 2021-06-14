import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../../ModalSlug/Modal";
import { ModalBody } from "../../ModalSlug/ModalBody";
import { ModalFooter } from "../../ModalSlug/ModalFooter";
import { ModalHeader } from "../../ModalSlug/ModalHeader";
import { SpecialButton } from "../SpecialButton";

interface Props{count?:number}

const MembersHeaderStyle = styled.div<Props>`
    height:3.5rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:${Props => Props.theme.color.basic2};
    padding:0;
    font-size: ${(Props) => Props.theme.font.large};
    line-height: 3rem;
  text-align: center;
`
const MembersCount = styled.div`
    width:90%;
`


export const MembersHeader: React.FC<Props> = ({count}) => {
  const [toggle,setToggle] = useState<boolean>(false);
  const modalHandler = ()=>{
    setToggle(!toggle);
    console.log("modal handler called")
  }
  return (
    <MembersHeaderStyle>
        <MembersCount>Members: {count}</MembersCount>
        <SpecialButton modalHandler={modalHandler}/>
        
        <Modal show={toggle} clicked={modalHandler}>
          <ModalHeader> header here</ModalHeader>
          <ModalBody> big ol body</ModalBody>
          <ModalFooter> feet</ModalFooter>
        </Modal>
    </MembersHeaderStyle>
  );
};