import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Formik, Form, Field } from "formik";
import TextField from "../component/textField";
import * as Yup from "yup";
import "../../styles/input.css";

const validate = Yup.object({
  programName: Yup.string()
    .required("This field is requried")
    .max(50, "Cannot exceed 50 characters"),
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
    .max(200, "Cannot exceed 200 characters")
    .required("This field is requried"),
  programBarTxt: Yup.string()
    .max(50, "Cannot exceed 50 characters")
    .required("This field is requried"),
  programThurStartTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programThurEndTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programThurBarTxt: Yup.string().max(50, "Cannot exceed 50 characters"),
  programSatStartTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programSatEndTime: Yup.string().matches(
    /^(?<!\S)1[0-2][AP][\M]$(?!\S)|(?<!\S)[1-9][AP][\M]$(?!\S)/,
    "format must be the correct hour followed by AM/PM all caps, no spaces: 12PM, 8AM, etc"
  ),
  programSatBarTxt: Yup.string().max(50, "Cannot exceed 50 characters"),
});

function Input() {
  const { store, actions } = useContext(Context);
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
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="mx-4">
          {console.log("test", formik.values)}
          <div className="row mb-2">
            <div className="col-8">
              <h1 className="my-4  font-weight-bold display-5 ">
                Program Entry
              </h1>
            </div>
            <div className="col-4">
              <img
                className="ascIMg float-end me-4"
                src="http://amherstsurvival.org/wp-content/uploads/2019/10/WEB-LOGO.png"
                alt="ASC logo"
              />
            </div>
          </div>
          <Form>
            <div className="row">
              <div className="col border border-2  p-3 ">
                <div className="row">
                  <TextField
                    label="program name"
                    name="programName"
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
                </div>
                <div className=" strtEndTimeWeekday row">
                  <div className="col">
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
                  </div>
                  <div className="col d-flex pt-2">
                    <div className=" mon-thurBox pe-5">
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="monday"
                            name="monday"
                          />
                          Monday
                        </label>
                      </div>
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="tuesday"
                            name="tuesday"
                          />
                          Tuesday
                        </label>
                      </div>
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="wednesday"
                            name="wednesday"
                          />
                          Wednesday
                        </label>
                      </div>
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="thursday"
                            name="thursday"
                          />
                          Thursday
                        </label>
                      </div>
                    </div>
                    <div className="fri-sunBox">
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="friday"
                            name="friday"
                          />
                          Friday
                        </label>
                      </div>
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="saturday"
                            name="saturday"
                          />
                          Saturday
                        </label>
                      </div>
                      <div className="pb-1 fs-5">
                        <label>
                          <Field
                            className="me-2"
                            type="checkbox"
                            id="sunday"
                            name="sunday"
                          />
                          Sunday
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 submitReset">
                  <div className="col-6 ">
                    <button className=" btn btn-info px-3 me-3 " type="submit">
                      Submit
                    </button>
                    <button className=" btn btn-secondary px-3 " type="reset">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="col ps-2 ">
                <div className="row border border-2  p-3 ms-1 mb-2 ">
                  <div className="col ">
                    <TextField
                      label="program thursday bar text"
                      name="programThurBarTxt"
                      type="text"
                    />
                  </div>
                  <div className="row ">
                    <div className="col-6">
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
                    </div>
                  </div>
                </div>

                <div className="row border border-2 p-3 ms-1 ">
                  <div className="row">
                    <div className="col">
                      <TextField
                        label="program saturday bar text"
                        name="programSatBarTxt"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Input;
