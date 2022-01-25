import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  bgColor?: string;
  textColor?: string
}
const LabelStyle = styled.div<Props>`
border-radius: 1.5rem;
height: 1.5rem;
width: 5rem;
line-height: 1.4rem;
text-align: center;
background-color: ${Props => Props.bgColor};
margin: auto 0px;
font-size:${Props=> Props.theme.font.medium};
color:${Props=>Props.textColor};
`;

export const SpecialLabel: React.FC<Props> = ({ text,bgColor,textColor}) => {

  return <LabelStyle bgColor={bgColor} textColor={textColor}>{text}</LabelStyle>;
};
