import React from "react";
import styled from "styled-components";

interface Props {}

const ModalFooterStyle = styled.div`
  border-top:  1px solid ${Props => Props.theme.color.basic2};
  padding:20px 50px 20px 50px;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
`

export const ModalFooter: React.FC<Props> = (Props) => {
  return (
    <ModalFooterStyle>
        {Props.children}
    </ModalFooterStyle>
  );
};