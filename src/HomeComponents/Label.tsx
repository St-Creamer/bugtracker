import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  color?: string;
}

export const SpecialLabel: React.FC<Props> = ({ text,color}) => {
  const LabelStyle = styled.div`
    border-radius: 1.5rem;
    height: 1.5rem;
    width: 5rem;
    line-height: 1.4rem;
    text-align: center;
    background-color: ${(Props) => color};
    margin: auto 0px;
    font-size:${Props=> Props.theme.font.medium};
  `;

  return <LabelStyle>{text}</LabelStyle>;
};
