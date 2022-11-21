import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

function TabContent() {
  const { store, actions } = useContext(Context);
  const mondayPrograms = store.programs.filter((item) => item.monday == true);
  const tuesdayPrograms = store.programs.filter((item) => item.tuesday == true);
  const wednesdayPrograms = store.programs.filter(
    (item) => item.wednesday == true
  );
  const thursdayPrograms = store.programs.filter(
    (item) => item.thursday == true
  );
  const fridayPrograms = store.programs.filter((item) => item.friday == true);
  const saturdayPrograms = store.programs.filter(
    (item) => item.saturday == true
  );
  const sundayPrograms = store.programs.filter((item) => item.sunday == true);
  // top styles:
  // id1 = 42%
  // id2 = 48%
  // id3 = 54.2%
  // id4 = 60.3%
  // id5 = 66.8%
  // id6 = 73%
  // ON THE HOUR STYLES:
  //   width styles:
  // 1 hr = 4.8% (+ 6/hr)
  // .5hr = +4%

  // left styles:
  // 9AM: 17.9% (+6/hr)

  // ON THE HALFHOUR STYLES:
  //  width at 1/2 hour:
  // 1hr = 6.8% (+6/hr)
  // .5hr = +2%

  // lefT STYLES:
  // 9:30AM= 19.9% (+6%)

  return (
    <div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-monday"
          role="tabpanel"
          aria-labelledby="pills-monday-tab"
          tabIndex="0"
        >
          <div>
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
              style={{ top: "54.2%", left: "35.7%", width: "17%" }}
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

export default TabContent;
