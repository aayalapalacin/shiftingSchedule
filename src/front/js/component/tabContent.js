import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

function TabContent() {
  const { store, actions } = useContext(Context);
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
      <div
        className="position-absolute"
        style={{ top: "42%", left: "35.7%", width: "16.8%" }}
      >
        <div className="onsite">
          {store.programs[0] ? store.programs[0].prog_bar_txt : <>Loading...</>}
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
          {store.programs[2] ? store.programs[2].prog_bar_txt : <>Loading...</>}
        </div>
      </div>
      <div
        className="position-absolute"
        style={{ top: "66.8%", left: "17.4%", width: "35.4%" }}
      >
        <div className="additional">
          {store.programs[4] ? store.programs[4].prog_bar_txt : <>Loading...</>}
        </div>
      </div>
      <div
        className="position-absolute"
        style={{ top: "73.3%", left: "35.7%", width: "17%" }}
      >
        <div className="fresh">
          {store.programs[5] ? store.programs[5].prog_bar_txt : <>Loading...</>}
        </div>
      </div>
    </div>
  );
}

export default TabContent;
