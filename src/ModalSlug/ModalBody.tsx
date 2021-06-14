import React from "react";

interface Props {}

export const ModalBody: React.FC<Props> = (Props) => {
  return (
    <>
        {Props.children}
    </>
  );
};