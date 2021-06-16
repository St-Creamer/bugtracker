import React from "react";
import styled from "styled-components";

interface Props {}

const ModalHeaderStyle = styled.div`
  border-bottom: 1px solid ${Props => Props.theme.color.basic2};
  padding:10px;
  text-align:center;
  font-size:${Props => Props.theme.font.large};
  text-transform:capitalize;
`

export const ModalHeader: React.FC<Props> = (Props) => {
  return (
    <ModalHeaderStyle>
        {Props.children}
    </ModalHeaderStyle>
  );
};