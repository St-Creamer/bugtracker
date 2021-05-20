import React from "react";
import styled from "styled-components";
import { Button } from "./LoginComponents/Button";
import { Container } from "./LoginComponents/Container";
import { Field } from "./LoginComponents/Field";
import { Input } from "./LoginComponents/Input";

const Label = styled.label`
  margin: auto;
`;

export const Login: React.FC = () => {
  return (
    <Container>
      <Field direction={"column"}>
        <Label>Nickname</Label>
        <Input/>
      </Field>
      <Field direction={"column"}>
        <Label>Password</Label>
        <Input/>
      </Field>
      <Field direction={"row"}>
        <Button to="/Home">Login</Button>
        <Button to="">Signup</Button>
      </Field>
    </Container>
  );
};
