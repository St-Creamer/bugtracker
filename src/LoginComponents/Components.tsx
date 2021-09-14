import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyleProps {
    direction?: string;
  }

export const Box = styled.div<StyleProps>`
display: flex;
flex-direction:${props=>(props.direction)};
`;
export const Label = styled.label`
margin: auto;
`;

export const Input = styled(Field)`
border: 1px solid ${(props) => props.theme.color.primary2};
width: 80%;
height: 25px;
margin: auto;
`;

export const Container = styled(Form)`
border: 2px solid ${(props) => props.theme.color.primary2};
min-height: 50vh;
width: 40vw;
margin: 10vh auto;
display: flex;
flex-direction: column;
justify-content: space-around;
padding:20px 0px 20px 0px;
`;

export const Button2 = styled.button`
border: 1px solid ${(props) => props.theme.color.primary2};
font-size: ${(props) => props.theme.font.medium};
height: 30px;
width: 200px;
padding: 2px 20px 0 20px;
color: ${(props) => props.theme.color.primary2};
transition: 0.5s ease;
margin: auto;
text-decoration: none;
text-align: center;
background-color: white;
cursor: pointer;
:hover {
  color: white;
  background: ${(props) => props.theme.color.primary2};
}
`;

export const Error = styled.div`
color: red;
width: fit-content;
margin: auto;
`;

export const Button = styled(Link)`
border: 1px solid ${props => props.theme.color.primary2};
font-size: ${props => props.theme.font.medium};
height: 30px;
width: 200px;
padding: 2px 20px 0 20px;
color: ${props => props.theme.color.primary2};
transition: 0.5s ease;
margin:auto;
text-decoration:none;
text-align:center;
background-color:white;
cursor: pointer;
:hover {
  color: white;
  background: ${props => props.theme.color.primary2};
}
`;