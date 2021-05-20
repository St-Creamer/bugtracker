import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
border: 1px solid ${props => props.theme.color.primary2};
height: 30px;
width: 200px;
padding: 2px 20px 0 20px;
color: ${props => props.theme.color.primary2};
transition: 0.5s ease;
margin:auto;
text-decoration:none;
text-align:center;
:hover {
  color: white;
  background: ${props => props.theme.color.primary2};
}
`;