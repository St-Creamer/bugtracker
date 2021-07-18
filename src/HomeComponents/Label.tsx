import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  color?: string;
}
const LabelStyle = styled.div`
border-radius: 1.5rem;
height: 1.5rem;
width: 5rem;
line-height: 1.4rem;
text-align: center;
background-color: ${Props => Props.color};
margin: auto 0px;
font-size:${Props=> Props.theme.font.medium};
`;

export const SpecialLabel: React.FC<Props> = ({ text,color}) => {

  return <LabelStyle color={color}>{text}</LabelStyle>;
};
