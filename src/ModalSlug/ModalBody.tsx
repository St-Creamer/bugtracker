import React from "react";
import styled from "styled-components";

interface Props {}

const ModalBodyStyle = styled.div`
  font-size:${Props => Props.theme.font.large};
  text-align: left;
  padding: 10px 30px 10px 30px;
`;

export const ModalBody: React.FC<Props> = (Props) => {
  return <ModalBodyStyle>{Props.children}</ModalBodyStyle>;
};
