import React from "react";
import { Formik, Form } from "formik";
import TextField from "./textField";
import * as Yup from "yup";
const validate = Yup.object({
  programName: Yup.string().required("This field is requried"),
  programStartTime: Yup.string()
    .matches(
      /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
      "format must be the correct hour followed by AM/PM all caps, no spaces"
    )
    .required("This field is requried"),
  programEndTime: Yup.string()
    .matches(
      /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
      "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
    )
    .required("This field is requried"),
  programDescription: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programBarTxt: Yup.string()
    .max(3, "Must be 3 characters long")
    .required("This field is requried"),
  programThurStartTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programThurEndTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programThurBarTxt: Yup.string().max(3, "Must be 3 characters long"),
  programSatStartTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programSatEndTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programSatBarTxt: Yup.string().max(3, "Must be 3 characters long"),
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
        programThurStartTime: "",
        programThurEndTime: "",
        programThurBarTxt: "",
        programSatStartTime: "",
        programSatEndTime: "",
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
            <input type="checkbox" id="monday" name="monday" />
            <label for="monday">Monday</label>
            <input type="checkbox" id="tuesday" name="tuesday" />
            <label for="tuesday">Tuesday</label>
            <input type="checkbox" id="wednesday" name="wednesday" />
            <label for="wednesday">Wednesday</label>
            <input type="checkbox" id="thursday" name="thursday" />
            <label for="thursday">Thursday</label>
            <input type="checkbox" id="friday" name="friday" />
            <label for="friday">Friday</label>
            <input type="checkbox" id="saturday" name="saturday" />
            <label for="saturday">Saturday</label>
            <input type="checkbox" id="sunday" name="sunday" />
            <label for="sunday">Sunday</label>

            <TextField
              label="program thursday start time"
              name="programThurStartTime"
              type="text"
            />
            <TextField
              label="program thursday end time"
              name="programThurEndTime"
              type="text"
            />
            <TextField
              label="program thursday bar text"
              name="programThurBarTxt"
              type="text"
            />
            <TextField
              label="program saturday start time"
              name="programSatStartTime"
              type="text"
            />
            <TextField
              label="program saturday end time"
              name="programSatEndTime"
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
