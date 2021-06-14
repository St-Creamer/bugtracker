import React from "react";

interface Props {}

export const ModalFooter: React.FC<Props> = (Props) => {
  return (
    <>
        {Props.children}
    </>
  );
};