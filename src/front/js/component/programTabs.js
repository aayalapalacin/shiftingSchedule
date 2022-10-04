import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/programTabs.css";
import Modal from "../component/modal.js";

function ProgramTabs(props) {
  const { store, actions } = useContext(Context);
  const [tempData, setTempData] = useState([]);

  const getData = (index, name, description) => {
    let tempData = [index, name, description];
    setTempData((item) => [1, ...tempData]);
  };

  const list = store.programs?.map((program, index) => {
    let color = "";
    if (program.name.includes("Onsite")) {
      color = { backgroundColor: "#" + 4287 + "f" + 5 };
    } else if (program.name.includes("Curbside")) {
      color = { backgroundColor: "#eb" + 4034 };
    } else if (program.name.includes("Meals")) {
      color = { backgroundColor: "#" + 6 + "c" + 757 + "d" };
    } else if (program.name.includes("Mobile")) {
      color = { backgroundColor: "#" + 48 + "B" + 1 + "BA" };
    } else if (program.name.includes("Additional")) {
      color = { backgroundColor: "#fbb" + 442 };
    } else if (program.name.includes("Fresh")) {
      color = { backgroundColor: "#" + 4287 + "f" + 5 };
    }

    let marginClick = "";
    if (program.name.startsWith("Fresh")) {
      marginClick = {
        position: "relative",
        bottom: 2 + "px",
      };
    } else {
      marginClick = "mt-1";
    }

    return (
      <div
        onClick={() => {
          getData(program.index, program.name, program.description);
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        key={index}
        className="d-inline-flex col-3 justify-content-around me-1">
        <div className="tab-container mt-2 me-5 mb-3 pb-5" style={color}>
          <div className="row">
            <h5 className="mt-3 pe-3 ps-3" >{program.name}</h5>
          </div>
          <div className="row">
            <span className={marginClick}>
              <p>Click for more info</p>
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {list}
      <Modal index={tempData[1]} name={tempData[2]} description={tempData[3]} />
    </div>
  );
}


ProgramTabs.propTypes = {
  data: propTypes.object,
};

export default ProgramTabs;
