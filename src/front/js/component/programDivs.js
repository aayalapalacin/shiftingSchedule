import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/programDivs.css";

function ProgramDivs() {
  const { store, actions } = useContext(Context);

  // mapping to implement once we have conditional rendering functioning
  // {store.programs.map((item, index) => {
  //   return (
  //     <div key={index}>

  //     </div>
  //   );
  // })}

  /**
 * Funtion to map from nav pill by day
 * const ProgramProgBarText = (day) => {
    let dayOfTheWeek = day.day;
    console.log(dayOfTheWeek);
    let programToRender = store.programs?.map((program, index) => {
      if (
        program[dayOfTheWeek] &&
        program.prog_bar_sat_txt &&
        program.prog_bar_thur_txt
      ) {
        return (
          <>
            <div key={index}>
              <div>Text:{program.prog_bar_txt}</div>
              <div>sat:{program.prog_bar_sat_txt}</div>
              <div>thurs:{program.prog_bar_thur_txt}</div>
            </div>
          </>
        );
      } else if (
        program[dayOfTheWeek] &&
        program.prog_bar_sat_txt &&
        !program.prog_bar_thur_txt
      ) {
        return (
          <>
            <div key={index}>
              <div>Text:{program.prog_bar_txt}</div>
              <div>sat:{program.prog_bar_sat_txt}</div>
            </div>
          </>
        );
      } else if (
        program[dayOfTheWeek] &&
        !program.prog_bar_sat_txt &&
        program.prog_bar_thur_txt
      ) {
        return (
          <>
            <div key={index}>
              <div>Text:{program.prog_bar_txt}</div>
              <div>thurs:{program.prog_bar_thur_txt}</div>
            </div>
          </>
        );
      } else if (
        program[dayOfTheWeek] &&
        !program.prog_bar_sat_txt &&
        !program.prog_bar_thur_txt
      ) {
        return (
          <>
            <div key={index}>
              <div>Text:{program.prog_bar_txt}</div>
            </div>
          </>
        );
      } else {
        return <div key={index}></div>;
      }
    });
    return programToRender;
  };
*/
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
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-monday"
          role="tabpanel"
          aria-labelledby="pills-monday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute"
            style={{ top: "42%", left: "35.7%", width: "16.8%" }}
          >
            <div className="onsite">
              {store.programs[0] ? (
                store.programs[0].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
            {/*           <ProgramProgBarText day="monday" /> */}
            {/*             test monday */}
          </div>
          <div
            className="position-absolute"
            style={{
              top: "48%",
              left: "53.6%",
              width: "5%",
            }}
          >
            <div className="curbside">
              {store.programs[1] ? store.programs[1].name : <>Loading...</>}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "54.7%", left: "35.7%", width: "17%" }}
          >
            <div className="community">
              {store.programs[2] ? (
                store.programs[2].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "66.8%", left: "17.4%", width: "35.4%" }}
          >
            <div className="additional">
              {store.programs[4] ? (
                store.programs[4].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "73.3%", left: "35.7%", width: "17%" }}
          >
            <div className="fresh">
              {store.programs[5] ? (
                store.programs[5].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-tuesday"
          role="tabpanel"
          aria-labelledby="pills-tuesday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute"
            style={{ top: "50%", left: "24.8%", width: "273px" }}
          >
            <div className="onsite">
              {store.programs[0] ? (
                store.programs[0].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
            {/*           <ProgramProgBarText day="tuesday" /> */}
            {/*             test tuesday */}
          </div>
          <div
            className="position-absolute"
            style={{
              top: "54.7%",
              left: "43.3%",
              width: "85px",
            }}
          >
            <div className="curbside">
              {store.programs[1] ? store.programs[1].name : <>Loading...</>}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "59.7%", left: "24.8%", width: "273px" }}
          >
            <div className="community">
              {store.programs[2] ? (
                store.programs[2].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "69.4%", left: "3.4%", width: "600px" }}
          >
            <div className="additional">
              {store.programs[4] ? (
                store.programs[4].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "74.2%", left: "24.8%", width: "273px" }}
          >
            <div className="fresh">
              {store.programs[5] ? (
                store.programs[5].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-wednesday"
          role="tabpanel"
          aria-labelledby="pills-wednesday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute program-wednesday"
            style={{ top: "64.5%", left: "31.3%", width: "85.2px" }}
          >
            <div className="mobile">
              {store.programs[3] ? store.programs[3].name : <>Loading...</>}
            </div>
            {/*           <ProgramProgBarText day="wednesday" /> */}
            {/*             test wednesday */}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-thursday"
          role="tabpanel"
          aria-labelledby="pills-thursday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute"
            style={{ top: "50%", left: "24.8%", width: "639px" }}
          >
            <div className="onsite">
              {store.programs[0] ? (
                store.programs[0].prog_bar_thur_txt
              ) : (
                <>Loading...</>
              )}
            </div>
            {/*             <ProgramProgBarText day="thursday" /> */}
            {/*             test thursday */}
          </div>
          <div
            className="position-absolute"
            style={{
              top: "54.7%",
              left: "55%",
              width: "220px",
            }}
          >
            <div className="curbsideThurAndSat">
              {store.programs[1] ? (
                store.programs[1].prog_bar_thur_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-friday"
          role="tabpanel"
          aria-labelledby="pills-friday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute"
            style={{ top: "50%", left: "24.8%", width: "273px" }}
          >
            <div className="onsite">
              {store.programs[0] ? (
                store.programs[0].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
            {/*             <ProgramProgBarText day="friday" /> */}
            {/*             test friday */}
          </div>
          <div
            className="position-absolute"
            style={{ top: "54.7%", left: "43.3%", width: "85px" }}
          >
            <div className="curbside">
              {store.programs[1] ? store.programs[1].name : <>Loading...</>}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "59.7%", left: "24.8%", width: "273px" }}
          >
            <div className="community">
              {store.programs[2] ? (
                store.programs[2].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "69.4%", left: "3.4%", width: "600px" }}
          >
            <div className="additional">
              {store.programs[4] ? (
                store.programs[4].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ top: "74.2%", left: "24.8%", width: "273px" }}
          >
            <div className="fresh">
              {store.programs[5] ? (
                store.programs[5].prog_bar_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-saturday"
          role="tabpanel"
          aria-labelledby="pills-saturday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute"
            style={{ top: "50%", left: "24.8%", width: "639px" }}
          >
            <div className="onsite">
              {store.programs[0] ? (
                store.programs[0].prog_bar_sat_txt
              ) : (
                <>Loading...</>
              )}
            </div>
            {/*             <ProgramProgBarText day="saturday"/> */}
            {/*             test saturday */}
          </div>
          <div
            className="position-absolute"
            style={{ top: "54.7%", left: "55%", width: "220px" }}
          >
            <div className="curbsideThurAndSat">
              {store.programs[1] ? (
                store.programs[1].prog_bar_sat_txt
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-sunday"
          role="tabpanel"
          aria-labelledby="pills-sunday-tab"
          tabIndex="0"
        >
          <div
            className="position-absolute"
            style={{ top: "54.7%", left: "43.3%", width: "85px" }}
          >
            <div className="curbside">
              {store.programs[1] ? store.programs[1].name : <>Loading...</>}
            </div>
            {/*             <ProgramProgBarText day="sunday" /> */}
            {/*             test sunday */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDivs;
