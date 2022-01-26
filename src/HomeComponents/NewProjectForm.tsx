import { Field, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { array, string } from "yup/lib/locale";

interface Props {}
const NewProjectFormStyle = styled.div`
  border: 1px solid black;
  width: 50vw;
`;

export const NewProjectForm: React.FC<Props> = () => {
  //yup schema
  const Schema = Yup.object().shape({
    name: Yup.string()
      .defined("This field is required")
      .min(5, "Project name must be over 5 characters and unique"),
    status: Yup.string()
      .oneOf(["todo", "done", "doing"])
      .required("Please select status"),
  });

  interface IFormValues {
    name: string;
    status: string;
  }

  const Submit = async (values: IFormValues) => {
    return 1;
  };
  return (
    <Formik
      initialValues={{
        name: "New Project",
        status: "todo",
      }}
      onSubmit={Submit}
      validateOnChange={true}
      validationSchema={Schema}
    >
      {({ errors, touched }) => (
        <NewProjectFormStyle>
          <div>
            <label htmlFor="email">Project Name</label>
            <Field name="name" id="name" type="text" required />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <Field as="select" name="status" id="status" required>
              <option value="" defaultValue={""}>Select Status</option>
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </Field>
            {errors.status && touched.status ? (
              <span>{errors.status}</span>
            ) : null}
          </div>
        </NewProjectFormStyle>
      )}
    </Formik>
  );
};
