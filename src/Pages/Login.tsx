import { Formik } from "formik";
import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Button2,
  Container,
  Error,
  Input,
  Label,
} from "../LoginComponents/Components";
import { Box } from "../LoginComponents/Components";
import { Modal } from "../ModalSlug/Modal";
import { ModalBody } from "../ModalSlug/ModalBody";
import { ModalFooter } from "../ModalSlug/ModalFooter";
import { ModalHeader } from "../ModalSlug/ModalHeader";
import * as Yup from "yup";

const ModalButton = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 2rem;
`;

export const Login: React.FC = () => {
  //yup schema
  const Schema = Yup.object().shape({
    password: Yup.string()
      .defined("This field is required")
      .min(8, "Password must be at least 8 characters"),
    email: Yup.string().email().defined("This field is required"),
  });

  //modal stuff
  const [toggle, setToggle] = useState<boolean>(false);
  const modalHandler = () => {
    setToggle(!toggle);
  };

  interface IFormValues {
    email: string;
    password: string;
  }
  const history = useHistory();

  const Submit = async (values: IFormValues) => {
    console.log(values);
    const result = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        if (String(err).includes("NetworkError")) setToggle(!toggle);
      });

    if (result.success) {
      if (document.cookie.includes("AuthCookie")) history.push("/home");
    } else {
      console.log(result);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={Submit}
      validateOnChange={true}
      validationSchema={Schema}
    >
      {({ errors, touched }) => (
        <Container>
          <Box direction={"column"}>
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" type="email" required />
            {errors.email && touched.email ? (
              <Error>{errors.email}</Error>
            ) : null}
          </Box>
          <Box direction={"column"}>
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" required />
            {errors.password && touched.password ? (
              <Error>{errors.password}</Error>
            ) : null}
          </Box>
          <Box direction={"row"}>
            <Button2 type="submit">Login</Button2>
            <Modal show={toggle} clicked={modalHandler}>
              <ModalHeader>Alert</ModalHeader>
              <ModalBody> Server Offline</ModalBody>
              <ModalFooter>
                <ModalButton onClick={modalHandler}>Ok</ModalButton>
              </ModalFooter>
            </Modal>
            <Button to="/Signup">Signup</Button>
          </Box>
        </Container>
      )}
    </Formik>
  );
};
