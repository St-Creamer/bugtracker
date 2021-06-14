import React from "react";

interface Props {}

export const ModalHeader: React.FC<Props> = (Props) => {
  return (
    <>
        {Props.children}
    </>
  );
};