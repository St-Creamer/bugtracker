import styled from "styled-components";

interface StyleProps {
    direction?: string;
  }

export const Field = styled.div<StyleProps>`
display: flex;
flex-direction:${props=>(props.direction)};
`;