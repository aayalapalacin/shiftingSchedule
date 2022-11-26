import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

function ProgramStyles() {
  const { store, actions } = useContext(Context);
  const [programStylesObj, setProgramStylesObj] = useState([]);
  const programStylesSetup = [];

  let widthHourArray = [];
  for (let i = 0; i < 9; i++) {
    widthHourArray.push(4.8 + 6 * i);
  }
  let widthHalfHourArray = [];
  for (let i = 0; i < 9; i++) {
    widthHalfHourArray.push(6.8 + 6 * i);
  }
  useEffect(() => {
    store.programs.forEach((item) => {
      if (programStylesObj.length == store.programs.length) {
        stop();
      } else {
        // set top style
        let topStyle = 0;
        if (item.id == 1) {
          topStyle = "42%";
        } else if (item.id == 2) {
          topStyle = "48%";
        } else if (item.id == 3) {
          topStyle = "54.2%";
        } else if (item.id == 4) {
          topStyle = "60.3%";
        } else if (item.id == 5) {
          topStyle = "66.8%";
        } else if (item.id == 6) {
          topStyle = "73%";
        }

        let totalHoursMatch = store.totalHours.filter(
          (total) => total.name == item.name
        );
        console.log("total", totalHoursMatch, item.name);
        // if (!item.start_time.includes("30")) {
        //   console.log(widthHourArray, "width array");
        //   console.log(totalHoursMatch[0], "index");
        //   console.log(
        //     widthHourArray[totalHoursMatch[0]?.total_hours - 1],
        //     item.name,
        //     "width style"
        //   );
        // }

        const programObj = { name: item.name, top: topStyle };
        programStylesSetup.push(programObj);
      }
    });
  }, [store.totalHours]);

  useEffect(() => {
    if (
      store.programs.length > 0 &&
      programStylesSetup.length == store.programs.length
    ) {
      setProgramStylesObj(programStylesSetup);
    }
  }, [programStylesSetup]);
  console.log(programStylesObj, "program styles");
  return <div>ProgramStyles</div>;
}

export default ProgramStyles;
