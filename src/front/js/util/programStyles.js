import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

function ProgramStyles() {
  const { store, actions } = useContext(Context);
  const [programStylesObj, setProgramStylesObj] = useState([]);
  const programStylesSetup = [];
  let leftStyle = "";

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
        let widthStyle = 0;
        if (!item.start_time.includes("30")) {
          widthStyle =
            widthHourArray[totalHoursMatch[0]?.total_hours - 1].toString() +
            "%";
          let startTimeObj = [
            { time: "9AM", style: "17.9%" },
            { time: "10AM", style: "23.9%" },
            { time: "11AM", style: "29.9%" },
            { time: "12PM", style: "35.9%" },
            { time: "1PM", style: "41.9%" },
            { time: "2PM", style: "47.9%" },
            { time: "3PM", style: "53.9%" },
            { time: "4PM", style: "59.9%" },
            { time: "5PM", style: "65.9%" },
            { time: "6PM", style: "71.9%" },
            { time: "7PM", style: "77.9%" },
          ];
          startTimeObj.forEach((startTimeItem) => {
            if (startTimeItem.time == item.start_time) {
              leftStyle = startTimeItem.style;
            }
          });
          if (item.start_time == startTimeObj.start_time) {
          }
        }

        const programObj = {
          name: item.name,
          top: topStyle,
          width: widthStyle,
          left: leftStyle,
        };
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
