import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { Modal } from "../ModalSlug/Modal";
import { ModalHeader } from "../ModalSlug/ModalHeader";
import { ModalBody } from "../ModalSlug/ModalBody";
import { ModalFooter } from "../ModalSlug/ModalFooter";
import { Button } from "../LoginComponents/Components";
import { useHistory } from "react-router";
import { Box, Button2, Container, Error, Input, Label } from "../LoginComponents/Components";
import * as Yup from "yup";

interface Props {}

const ModalButton = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 2rem;
`;

export const Signup: React.FC<Props> = () => {
  //yup schema
  const Schema = Yup.object().shape({
    password: Yup.string()
      .defined("This field is required")
      .min(8, "Password must be at least 8 characters"),
    password2: Yup.string().when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
    email: Yup.string().email().defined("This field is required"),
    email2: Yup.string().when("email", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("email")],
        "Both emails need to be the same"
      ),
    }),
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

  const submit = (values: IFormValues) => {
    console.log(values);
    fetch("http://localhost:4000/auth/signup", {
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
        if (res.success) {
          if (document.cookie.includes("AuthCookie")) history.push("/home");
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        if (String(err).includes("NetworkError")) setToggle(!toggle);
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        email2: "",
        password: "",
        password2: "",
      }}
      validateOnChange={true}
      validationSchema={Schema}
      onSubmit={submit}
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
            <Label htmlFor="email2">Confirm Email</Label>
            <Input name="email2" id="email2" type="email" required />
            {errors.email2 && touched.email2 ? (
              <Error>{errors.email2}</Error>
            ) : null}
          </Box>
          <Box direction={"column"}>
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" required />
            {errors.password && touched.password ? (
              <Error>{errors.password}</Error>
            ) : null}
          </Box>
          <Box direction={"column"}>
            <Label htmlFor="password2">Confirm Password</Label>
            <Input name="password2" id="password2" type="password" required />
            {errors.password2 && touched.password2 ? (
              <Error>{errors.password2}</Error>
            ) : null}
          </Box>
          <Box direction={"row"}>
            <Button2 type="submit">Signup</Button2>
            <Modal show={toggle} clicked={modalHandler}>
              <ModalHeader>Alert</ModalHeader>
              <ModalBody> Server Offline</ModalBody>
              <ModalFooter>
                <ModalButton onClick={modalHandler}>Ok</ModalButton>
              </ModalFooter>
            </Modal>
            {/* leads to another page perhaps */}
            <Button to="/">Back to Login</Button>
          </Box>
        </Container>
      )}
    </Formik>
  );
};
