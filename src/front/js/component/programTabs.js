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

  console.log(store.programs);
  const list = store.programs.map((program, index) => {
    let color = "";
    if (index == 0) {
      color = { backgroundColor: "#" + 4287 + "f" + 5 };
    } else if (index == 1) {
      color = { backgroundColor: "#eb" + 4034 };
    } else if (index == 2) {
      color = { backgroundColor: "#" + 6 + "c" + 757 + "d" };
    } else if (index == 3) {
      color = { backgroundColor: "#" + 48 + "B" + 1 + "BA" };
    } else if (index == 4) {
      color = { backgroundColor: "#fbb" + 442 };
    } else if (index == 5) {
      color = { backgroundColor: "#" + 4287 + "f" + 5 };
    }

    let marginClick = "";
    if (program.name.startsWith("Fresh")) {
      marginClick = {
        position: "relative",
        bottom: 2 + "px",
      };
    } else {
      marginClick = "mt-4";
    }

    return (
      <div
        onClick={() => {
          getData(program.index, program.name, program.description);
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        key={index}
        className="d-inline-flex col-3 justify-content-around me-1 mb-3 mt-2"
      >
        <div className="tab-container pt-3" style={color}>
          <div className="row">
            <h5 className="mt-1">{program.name}</h5>
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

export default ProgramTabs;

ProgramTabs.propTypes = {
  index: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
};
