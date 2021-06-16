import React from "react";
import styled from "styled-components";

interface Props {}

const SearchBarContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0;
  background-color: ${(Props) => Props.theme.color.basic1};
  display: flex;
`;
const SearchBar = styled.input`
  border: 1px solid ${(Props) => Props.theme.color.basic2};
  background-color: ${(Props) => Props.theme.color.basic2};
  height: 70%;
  width: 90%;
  margin: auto;
  border-radius:5px;
`;

export const BugSearchBar: React.FC<Props> = () => {
  return (
    <SearchBarContainer>
      <SearchBar />
    </SearchBarContainer>
  );
};
