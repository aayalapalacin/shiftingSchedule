import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/programDivs.css";
import TabContent from "./tabContent";

function ProgramDivs() {
  const { store, actions } = useContext(Context);

  let curbStyle = "";
  if (store.programs[1]) {
    if (store.programs[1].thursday === true) {
      curbStyle = {
        top: 54.7 + "%",
        left: 43.3 + "%",
        width: 85 + "px",
        padding: 5 + "px",
      };
    }
  }

  return (
    <div>
      <ul
        className="nav nav-pills  nav-justified"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active dayFont border border-info "
            id="pills-monday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-monday"
            type="button"
            role="tab"
            aria-controls="pills-monday"
            aria-selected="true"
          >
            Monday
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link dayFont border border-info"
            id="pills-tuesday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tuesday"
            type="button"
            role="tab"
            aria-controls="pills-tuesday"
            aria-selected="false"
          >
            Tuesday
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link dayFont border border-info"
            id="pills-wednesday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-wednesday"
            type="button"
            role="tab"
            aria-controls="pills-wednesday"
            aria-selected="false"
          >
            Wednesday
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link dayFont border border-info"
            id="pills-thursday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-thursday"
            type="button"
            role="tab"
            aria-controls="pills-thursday"
            aria-selected="false"
          >
            Thursday
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link dayFont border border-info"
            id="pills-friday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-friday"
            type="button"
            role="tab"
            aria-controls="pills-friday"
            aria-selected="false"
          >
            Friday
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link dayFont border border-info"
            id="pills-saturday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-saturday"
            type="button"
            role="tab"
            aria-controls="pills-saturday"
            aria-selected="false"
          >
            Saturday
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link dayFont border border-info  "
            id="pills-sunday-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-sunday"
            type="button"
            role="tab"
            aria-controls="pills-sunday"
            aria-selected="false"
          >
            Sunday
          </button>
        </li>
      </ul>
      <TabContent />
    </div>
  );
}

export default ProgramDivs;
