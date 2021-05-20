import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  color?: string;
}

export const SpecialLabel: React.FC<Props> = ({ text,color}) => {
  const LabelStyle = styled.div`
    border-radius: 10px;
    height: 1.3rem;
    width: 4rem;
    line-height: 1.1rem;
    text-align: center;
    background-color: ${(Props) => color};
    margin: auto 0px;
  `;

  return <LabelStyle>{text}</LabelStyle>;
};
