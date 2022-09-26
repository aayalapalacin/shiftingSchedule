import React from "react";
import { Formik, Form } from "formik";
import TextField from "./textField";
import * as Yup from "yup";
const validate = Yup.object({
  programName: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programStartTime: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programEndTime: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programDescription: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programBarTxt: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programThurBarTxt: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programSatBarTxt: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
});

function Input() {
  return (
    <Formik
      initialValues={{
        programName: "",
        programStartTime: "",
        programEndTime: "",
        programDescription: "",
        programBarTxt: "",
        programThurBarTxt: "",
        programSatBarTxt: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="mx-4">
          <h1 className="my-4  font-weight-bold display-4">Sign Up</h1>
          {console.log(formik.values)}
          <Form>
            <TextField label="program name" name="programName" type="text" />
            <TextField
              label="program start time"
              name="programStartTime"
              type="text"
            />
            <TextField
              label="program end time"
              name="programEndTime"
              type="text"
            />
            <TextField
              label="program description"
              name="programDescription"
              type="text"
            />
            <TextField
              label="program bar text"
              name="programBarTxt"
              type="text"
            />
            <TextField
              label="program thursday bar text"
              name="programThurBarTxt"
              type="text"
            />
            <TextField
              label="program saturday bar text"
              name="programSatBarTxt"
              type="text"
            />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Input;
