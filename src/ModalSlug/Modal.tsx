import React from "react";
import styled from "styled-components";
import { Backdrop } from "./Backdrop";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

interface Props {
  show: boolean;
  clicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = (Props) => {
  const ModalStyle = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    border-radius: 5px;
    opacity: ${Props.show ? "1" : "0"};
    transform: ${Props.show ? "translate(0,0)" : "translate(100vh,100vw)"};
    display:flex;
  `;
  return (
    <>
      <Backdrop clicked={Props.clicked} show={Props.show} />
      <ModalStyle>
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
        {Props.children}
      </ModalStyle>
    </>
  );
};
