import React from "react";
import styled from "styled-components";

const Dot = styled.div`
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  cursor: pointer;
  margin: auto;
  background-color: ${(Props) => Props.theme.color.primary1};
`;

const SpecialButtonStyle = styled.div`
  height: 2.5rem;
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  margin: auto;
`;

export const SpecialButton: React.FC = () => {
  return (
    <SpecialButtonStyle>
      <Dot />
      <Dot />
      <Dot />
    </SpecialButtonStyle>
  );
};
