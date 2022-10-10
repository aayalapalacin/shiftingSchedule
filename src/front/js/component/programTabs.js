import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/programTabs.css";
import Modal from "../component/modal.js";

function ProgramTabs() {
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
    } else if (program.name.includes("Additional")) {
      color = { backgroundColor: "#F" + 2770 + "C" };
    } else if (program.name.includes("Mobile")) {
      color = { backgroundColor: "#" + 48 + "B" + 1 + "BA" };
    } else if (program.name.includes("Fresh")) {
      color = { backgroundColor: "#fbb" + 442 };
    } else if (program.name.includes("Meals")) {
      color = { backgroundColor: "#" + 1 + "E" + 53 + "FA" };
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
        style={color}
        className="tab-container mt-2 me-5 mb-2 d-inline-flex justify-space-around"
      >
        <div
          onClick={() => {
            getData(program.index, program.name, program.description);
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          key={index}
        >
          <div className="row mt-2">
            <span className="name">{program.name}</span>
          </div>
          <div className="row">
            <span className={marginClick}>Click for more info</span>
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
