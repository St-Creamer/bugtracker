import styled from "styled-components";

interface Props {
  active: boolean;
  id?: any;
}

export const Project = styled.div<Props>`
  height: 3.5rem;
  margin-left: ${(Props) => (Props.active ? "10px" : "0px")};
  border-bottom: 1px solid
    ${(Props) => (Props.active ? "none" : Props.theme.color.primary1)};
  padding-left: 2vh;
  background-color: ${(Props) =>
    Props.active ? Props.theme.color.basic1 : Props.theme.color.primary2};
  cursor: pointer;
  width: 100%;
  line-height: 3.5rem;
  font-size: ${(Props) => Props.theme.font.large};
  transition: 0.5s ease all;
  border-top-left-radius: ${(Props) => (Props.active ? "5px" : "0px")};
  border-bottom-left-radius: ${(Props) => (Props.active ? "5px" : "0px")};
  &:hover{
    filter: brightness(.8) 
    }
`;
