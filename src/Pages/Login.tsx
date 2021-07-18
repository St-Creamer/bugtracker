import { FormikConfig, useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../LoginComponents/Button";
import { Field } from "../LoginComponents/Field";

const Label = styled.label`
  margin: auto;
`;
const Container = styled.form`
  border: 2px solid ${(props) => props.theme.color.primary2};
  height: 400px;
  width: 600px;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color.primary2};
  width: 80%;
  height: 25px;
  margin: auto;
`;

export const Login: React.FC = () => {
  interface IFormValues{
    email: string,
      password: string,
  }
  const history = useHistory();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values:IFormValues) => {
      console.log(values);
      fetch("http://localhost:4000/auth/login",{
        method:"POST",
        credentials:"include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
        body:JSON.stringify(values)
      })
      .then(res=>res.json())
      .then(res=>{
        if(res.success){
          if(document.cookie.includes("AuthCookie")) history.push("/home")
        }else{
          console.log(res)
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },
  });
  return (
    <Container onSubmit={formik.handleSubmit}>
      <Field direction={"column"}>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
      </Field>
      <Field direction={"column"}>
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
      </Field>
      <Field direction={"row"}>
        <button type="submit" >Login</button>
        <Button to="">Signup</Button>
      </Field>
    </Container>
  );
};
