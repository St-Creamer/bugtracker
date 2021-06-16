import React from "react";
import styled from "styled-components";
import { Backdrop } from "./Backdrop";

interface Props {
  show: boolean;
  clicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = (Props) => {
  const ModalStyle = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    min-width: 30vw;
    border: 1px solid #ccc;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    border-radius: 5px;
    opacity: ${Props.show ? "1" : "0"};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  return (
    <>
      {Props.show ? (
        <>
          <Backdrop clicked={Props.clicked} show={Props.show} />
          <ModalStyle>{Props.children}</ModalStyle>{" "}
        </>
      ) : null}
    </>
  );
};
