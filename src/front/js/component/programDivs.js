import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/programDivs.css";
// const start10am = () => {
//   return (
//     <div className="10am" style={{ fontSize: "13px", width: "10%" }}></div>
//   );
// };
// const start11am = () => {
//   return (
//     <div className="11am" style={{ fontSize: "13px", width: "20%" }}></div>
//   );
// };
// const start12pm = () => {
//   return (
//     <div className="12pm" style={{ fontSize: "13px", width: "30.8%" }}></div>
//   );
// };
// const start1pm = () => {
//   return <div className="1pm" style={{ fontSize: "13px", width: "40%" }}></div>;
// };
// const start2pm = () => {
//   return <div className="2pm" style={{ fontSize: "13px", width: "49%" }}></div>;
// };
// const start3pm = () => {
//   return <div className="3pm" style={{ fontSize: "13px", width: "58%" }}></div>;
// };
// const start4pm = () => {
//   return <div className="4pm" style={{ fontSize: "13px", width: "67%" }}></div>;
// };
// const start5pm = () => {
//   return <div className="5pm" style={{ fontSize: "13px", width: "75%" }}></div>;
// };
// const start6pm = () => {
//   return <div className="6pm" style={{ fontSize: "13px", width: "84%" }}></div>;
// };
// const start7pm = () => {
//   return <div className="7pm" style={{ fontSize: "13px", width: "92%" }}></div>;
// };
function ProgramDivs() {
  let totalHours = [];
  let totalThurHours = [];
  let totalSatHours = [];
  const { store, actions } = useContext(Context);

  let startTimeNum = parseInt(store.programs?.start_time?.replace(/\D/g, ""));
  let endTimeNum = parseInt(store.programs?.end_time?.replace(/\D/g, ""));
  let totalHoursNormal = endTimeNum - startTimeNum;
  let totalAmPmHours = endTimeNum + 12 - startTimeNum;

  for (let i = 0; i < store.programs.length; i++) {
    // normal program total hours
    if (store.programs[i]?.start_time == "12PM") {
      if (store.programs[i]?.end_time.includes("30")) {
        let endTimeNum = parseFloat(
          store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
        );

        totalHours.push({
          name: store.programs[i]?.name,
          total_hours: endTimeNum,
          id: store.programs[i]?.id,
        });
      } else {
        let endTimeNum = parseInt(
          store.programs[i]?.end_time.replace(/\D/g, "")
        );

        totalHours.push({
          name: store.programs[i]?.name,
          total_hours: endTimeNum,
          id: store.programs[i]?.id,
        });
      }
    } else if (
      store.programs[i]?.start_time.includes("AM") &&
      store.programs[i]?.end_time.includes("PM")
    ) {
      if (
        store.programs[i]?.start_time.includes("30") &&
        store.programs[i]?.end_time.includes("30")
      ) {
        if (store.programs[i]?.end_time.includes("12:30")) {
          let startTimeNum = parseFloat(
            store.programs[i]?.start_time
              ?.replace(/\D/g, "")
              .replace("30", ".5")
          );
          let endTimeNum = parseFloat(
            store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalAmPmHours = endTimeNum - startTimeNum;

          totalHours.push({
            name: store.programs[i]?.name,
            total_hours: totalAmPmHours,
            id: store.programs[i]?.id,
          });
        } else {
          let startTimeNum = parseFloat(
            store.programs[i]?.start_time
              ?.replace(/\D/g, "")
              .replace("30", ".5")
          );
          let endTimeNum = parseFloat(
            store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalAmPmHours = endTimeNum + 12 - startTimeNum;

          totalHours.push({
            name: store.programs[i]?.name,
            total_hours: totalAmPmHours,
            id: store.programs[i]?.id,
          });
        }
      } else if (store.programs[i]?.start_time.includes("30")) {
        if (store.programs[i]?.end_time == "12PM") {
          let startTimeNum = parseFloat(
            store.programs[i]?.start_time
              ?.replace(/\D/g, "")
              .replace("30", ".5")
          );
          let endTimeNum = parseInt(
            store.programs[i]?.end_time.replace(/\D/g, "")
          );
          let totalAmPmHours = endTimeNum - startTimeNum;

          totalHours.push({
            name: store.programs[i]?.name,
            total_hours: totalAmPmHours,
            id: store.programs[i]?.id,
          });
        } else {
          let startTimeNum = parseFloat(
            store.programs[i]?.start_time
              ?.replace(/\D/g, "")
              .replace("30", ".5")
          );
          let endTimeNum = parseInt(
            store.programs[i]?.end_time.replace(/\D/g, "")
          );
          let totalAmPmHours = endTimeNum + 12 - startTimeNum;

          totalHours.push({
            name: store.programs[i]?.name,
            total_hours: totalAmPmHours,
            id: store.programs[i]?.id,
          });
        }
      } else if (store.programs[i]?.end_time.includes("30")) {
        if (store.programs[i]?.end_time == "12:30PM") {
          let startTimeNum = parseInt(
            store.programs[i]?.start_time?.replace(/\D/g, "")
          );
          let endTimeNum = parseFloat(
            store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalAmPmHours = endTimeNum - startTimeNum;

          totalHours.push({
            name: store.programs[i]?.name,
            total_hours: totalAmPmHours,
            id: store.programs[i]?.id,
          });
        } else {
          let startTimeNum = parseInt(
            store.programs[i]?.start_time?.replace(/\D/g, "")
          );
          let endTimeNum = parseFloat(
            store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalAmPmHours = endTimeNum + 12 - startTimeNum;

          totalHours.push({
            name: store.programs[i]?.name,
            total_hours: totalAmPmHours,
            id: store.programs[i]?.id,
          });
        }
      } else if (store.programs[i]?.end_time == "12PM") {
        let startTimeNum = parseInt(
          store.programs[i]?.start_time?.replace(/\D/g, "")
        );
        let endTimeNum = parseInt(
          store.programs[i]?.end_time.replace(/\D/g, "")
        );
        let totalAmPmHours = endTimeNum - startTimeNum;

        totalHours.push({
          name: store.programs[i]?.name,
          total_hours: totalAmPmHours,
          id: store.programs[i]?.id,
        });
      } else {
        let startTimeNum = parseInt(
          store.programs[i]?.start_time?.replace(/\D/g, "")
        );
        let endTimeNum = parseInt(
          store.programs[i]?.end_time.replace(/\D/g, "")
        );
        let totalAmPmHours = endTimeNum + 12 - startTimeNum;

        totalHours.push({
          name: store.programs[i]?.name,
          total_hours: totalAmPmHours,
          id: store.programs[i]?.id,
        });
      }
    } else if (
      store.programs[i]?.start_time.includes("30") &&
      store.programs[i]?.end_time.includes("30")
    ) {
      let startTimeNum = parseFloat(
        store.programs[i]?.start_time?.replace(/\D/g, "").replace("30", ".5")
      );
      let endTimeNum = parseFloat(
        store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
      );
      let totalHoursNormal = endTimeNum - startTimeNum;

      totalHours.push({
        name: store.programs[i]?.name,
        total_hours: totalHoursNormal,
        id: store.programs[i]?.id,
      });
    } else if (store.programs[i]?.end_time.includes("30")) {
      let endTimeNum = parseFloat(
        store.programs[i]?.end_time.replace(/\D/g, "").replace("30", ".5")
      );
      let startTimeNum = parseInt(
        store.programs[i]?.start_time?.replace(/\D/g, "")
      );
      let totalHoursNormal = endTimeNum - startTimeNum;

      totalHours.push({
        name: store.programs[i]?.name,
        total_hours: totalHoursNormal,
        id: store.programs[i]?.id,
      });
    } else if (store.programs[i]?.start_time.includes("30")) {
      let endTimeNum = parseInt(store.programs[i]?.end_time.replace(/\D/g, ""));
      let startTimeNum = parseFloat(
        store.programs[i]?.start_time?.replace(/\D/g, "").replace("30", ".5")
      );
      let totalHoursNormal = endTimeNum - startTimeNum;

      totalHours.push({
        name: store.programs[i]?.name,
        total_hours: totalHoursNormal,
        id: store.programs[i]?.id,
      });
    }

    // thursday program total hours:
    if (
      store.programs[i]?.thur_start_time != null &&
      store.programs[i]?.thur_end_time != null
    ) {
      if (store.programs[i]?.thur_start_time == "12PM") {
        if (store.programs[i]?.thur_end_time.includes("30")) {
          let endThurTimeNum = parseFloat(
            store.programs[i]?.thur_end_time
              .replace(/\D/g, "")
              .replace("30", ".5")
          );

          totalThurHours.push({
            name: store.programs[i]?.name,
            total_thur_hours: endThurTimeNum,
            id: store.programs[i]?.id,
          });
        } else {
          let endThurTimeNum = parseInt(
            store.programs[i]?.thur_end_time.replace(/\D/g, "")
          );

          totalThurHours.push({
            name: store.programs[i]?.name,
            total_thur_hours: endThurTimeNum,
            id: store.programs[i]?.id,
          });
        }
      } else if (
        store.programs[i]?.thur_start_time.includes("AM") &&
        store.programs[i]?.thur_end_time.includes("PM")
      ) {
        if (
          store.programs[i]?.thur_start_time.includes("30") &&
          store.programs[i]?.thur_end_time.includes("30")
        ) {
          if (store.programs[i]?.thur_end_time.includes("12:30")) {
            let startThurTimeNum = parseFloat(
              store.programs[i]?.thur_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endThurTimeNum = parseFloat(
              store.programs[i]?.thur_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;

            totalThurHours.push({
              name: store.programs[i]?.name,
              total_thur_hours: totalThurAmPmHours,
              id: store.programs[i]?.id,
            });
          } else {
            let startThurTimeNum = parseFloat(
              store.programs[i]?.thur_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endThurTimeNum = parseFloat(
              store.programs[i]?.thur_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;

            totalThurHours.push({
              name: store.programs[i]?.name,
              total_thur_hours: totalThurAmPmHours,
              id: store.programs[i]?.id,
            });
          }
        } else if (store.programs[i]?.thur_start_time.includes("30")) {
          if (store.programs[i]?.thur_end_time == "12PM") {
            let startThurTimeNum = parseFloat(
              store.programs[i]?.thur_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endThurTimeNum = parseInt(
              store.programs[i]?.thur_end_time.replace(/\D/g, "")
            );
            let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;

            totalThurHours.push({
              name: store.programs[i]?.name,
              total_thur_hours: totalThurAmPmHours,
              id: store.programs[i]?.id,
            });
          } else {
            let startThurTimeNum = parseFloat(
              store.programs[i]?.thur_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endThurTimeNum = parseInt(
              store.programs[i]?.thur_end_time.replace(/\D/g, "")
            );
            let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;

            totalThurHours.push({
              name: store.programs[i]?.name,
              total_thur_hours: totalThurAmPmHours,
              id: store.programs[i]?.id,
            });
          }
        } else if (store.programs[i]?.thur_end_time.includes("30")) {
          if (store.programs[i]?.thur_end_time == "12:30PM") {
            let startThurTimeNum = parseInt(
              store.programs[i]?.thur_start_time?.replace(/\D/g, "")
            );
            let endThurTimeNum = parseFloat(
              store.programs[i]?.thur_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;

            totalThurHours.push({
              name: store.programs[i]?.name,
              total_thur_hours: totalThurAmPmHours,
              id: store.programs[i]?.id,
            });
          } else {
            let startThurTimeNum = parseInt(
              store.programs[i]?.thur_start_time?.replace(/\D/g, "")
            );
            let endThurTimeNum = parseFloat(
              store.programs[i]?.thur_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;

            totalThurHours.push({
              name: store.programs[i]?.name,
              total_thur_hours: totalThurAmPmHours,
              id: store.programs[i]?.id,
            });
          }
        } else if (store.programs[i]?.thur_end_time == "12PM") {
          let startThurTimeNum = parseInt(
            store.programs[i]?.thur_start_time?.replace(/\D/g, "")
          );
          let endThurTimeNum = parseInt(
            store.programs[i]?.thur_end_time.replace(/\D/g, "")
          );
          let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;

          totalThurHours.push({
            name: store.programs[i]?.name,
            total_thur_hours: totalThurAmPmHours,
            id: store.programs[i]?.id,
          });
        } else {
          let startThurTimeNum = parseInt(
            store.programs[i]?.thur_start_time?.replace(/\D/g, "")
          );
          let endThurTimeNum = parseInt(
            store.programs[i]?.thur_end_time.replace(/\D/g, "")
          );
          let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;

          totalThurHours.push({
            name: store.programs[i]?.name,
            total_thur_hours: totalThurAmPmHours,
            id: store.programs[i]?.id,
          });
        }
      } else if (
        store.programs[i]?.thur_start_time.includes("30") &&
        store.programs[i]?.thur_end_time.includes("30")
      ) {
        let startThurTimeNum = parseFloat(
          store.programs[i]?.thur_start_time
            ?.replace(/\D/g, "")
            .replace("30", ".5")
        );
        let endThurTimeNum = parseFloat(
          store.programs[i]?.thur_end_time
            .replace(/\D/g, "")
            .replace("30", ".5")
        );
        let totalThurHoursNormal = endThurTimeNum - startThurTimeNum;

        totalThurHours.push({
          name: store.programs[i]?.name,
          total_thur_hours: totalThurHoursNormal,
          id: store.programs[i]?.id,
        });
      } else if (store.programs[i]?.thur_end_time.includes("30")) {
        let endThurTimeNum = parseFloat(
          store.programs[i]?.thur_end_time
            .replace(/\D/g, "")
            .replace("30", ".5")
        );
        let startThurTimeNum = parseInt(
          store.programs[i]?.thur_start_time?.replace(/\D/g, "")
        );
        let totalThurHoursNormal = endThurTimeNum - startThurTimeNum;

        totalThurHours.push({
          name: store.programs[i]?.name,
          total_thur_hours: totalThurHoursNormal,
          id: store.programs[i]?.id,
        });
      } else if (store.programs[i]?.thur_start_time.includes("30")) {
        let endThurTimeNum = parseInt(
          store.programs[i]?.thur_end_time.replace(/\D/g, "")
        );
        let startThurTimeNum = parseFloat(
          store.programs[i]?.thur_start_time
            ?.replace(/\D/g, "")
            .replace("30", ".5")
        );
        let totalThurHoursNormal = endThurTimeNum - startThurTimeNum;

        totalThurHours.push({
          name: store.programs[i]?.name,
          total_thur_hours: totalThurHoursNormal,
          id: store.programs[i]?.id,
        });
      }
    }
    // Saturday program total hours
    if (
      store.programs[i]?.sat_start_time != null &&
      store.programs[i]?.sat_end_time != null
    ) {
      if (store.programs[i]?.sat_start_time == "12PM") {
        if (store.programs[i]?.sat_end_time.includes("30")) {
          let endSatTimeNum = parseFloat(
            store.programs[i]?.sat_end_time
              .replace(/\D/g, "")
              .replace("30", ".5")
          );

          totalSatHours.push({
            name: store.programs[i]?.name,
            total_sat_hours: endSatTimeNum,
            id: store.programs[i]?.id,
          });
        } else {
          let endSatTimeNum = parseInt(
            store.programs[i]?.sat_end_time.replace(/\D/g, "")
          );

          totalSatHours.push({
            name: store.programs[i]?.name,
            total_sat_hours: endSatTimeNum,
            id: store.programs[i]?.id,
          });
        }
      } else if (
        store.programs[i]?.sat_start_time.includes("AM") &&
        store.programs[i]?.sat_end_time.includes("PM")
      ) {
        if (
          store.programs[i]?.sat_start_time.includes("30") &&
          store.programs[i]?.sat_end_time.includes("30")
        ) {
          if (store.programs[i]?.sat_end_time.includes("12:30")) {
            let startSatTimeNum = parseFloat(
              store.programs[i]?.sat_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endSatTimeNum = parseFloat(
              store.programs[i]?.sat_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;

            totalSatHours.push({
              name: store.programs[i]?.name,
              total_sat_hours: totalSatAmPmHours,
              id: store.programs[i]?.id,
            });
          } else {
            let startSatTimeNum = parseFloat(
              store.programs[i]?.sat_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endSatTimeNum = parseFloat(
              store.programs[i]?.sat_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;

            totalSatHours.push({
              name: store.programs[i]?.name,
              total_sat_hours: totalSatAmPmHours,
              id: store.programs[i]?.id,
            });
          }
        } else if (store.programs[i]?.sat_start_time.includes("30")) {
          if (store.programs[i]?.sat_end_time == "12PM") {
            let startSatTimeNum = parseFloat(
              store.programs[i]?.sat_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endSatTimeNum = parseInt(
              store.programs[i]?.sat_end_time.replace(/\D/g, "")
            );
            let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;

            totalSatHours.push({
              name: store.programs[i]?.name,
              total_sat_hours: totalSatAmPmHours,
              id: store.programs[i]?.id,
            });
          } else {
            let startSatTimeNum = parseFloat(
              store.programs[i]?.sat_start_time
                ?.replace(/\D/g, "")
                .replace("30", ".5")
            );
            let endSatTimeNum = parseInt(
              store.programs[i]?.sat_end_time.replace(/\D/g, "")
            );
            let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;

            totalSatHours.push({
              name: store.programs[i]?.name,
              total_sat_hours: totalSatAmPmHours,
              id: store.programs[i]?.id,
            });
          }
        } else if (store.programs[i]?.sat_end_time.includes("30")) {
          if (store.programs[i]?.sat_end_time == "12:30PM") {
            let startSatTimeNum = parseInt(
              store.programs[i]?.sat_start_time?.replace(/\D/g, "")
            );
            let endSatTimeNum = parseFloat(
              store.programs[i]?.sat_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;

            totalSatHours.push({
              name: store.programs[i]?.name,
              total_sat_hours: totalSatAmPmHours,
              id: store.programs[i]?.id,
            });
          } else {
            let startSatTimeNum = parseInt(
              store.programs[i]?.sat_start_time?.replace(/\D/g, "")
            );
            let endSatTimeNum = parseFloat(
              store.programs[i]?.sat_end_time
                .replace(/\D/g, "")
                .replace("30", ".5")
            );
            let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;

            totalSatHours.push({
              name: store.programs[i]?.name,
              total_sat_hours: totalSatAmPmHours,
              id: store.programs[i]?.id,
            });
          }
        } else if (store.programs[i]?.sat_end_time == "12PM") {
          let startSatTimeNum = parseInt(
            store.programs[i]?.sat_start_time?.replace(/\D/g, "")
          );
          let endSatTimeNum = parseInt(
            store.programs[i]?.sat_end_time.replace(/\D/g, "")
          );
          let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;

          totalSatHours.push({
            name: store.programs[i]?.name,
            total_sat_hours: totalSatAmPmHours,
            id: store.programs[i]?.id,
          });
        } else {
          let startSatTimeNum = parseInt(
            store.programs[i]?.sat_start_time?.replace(/\D/g, "")
          );
          let endSatTimeNum = parseInt(
            store.programs[i]?.sat_end_time.replace(/\D/g, "")
          );
          let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;

          totalSatHours.push({
            name: store.programs[i]?.name,
            total_sat_hours: totalSatAmPmHours,
            id: store.programs[i]?.id,
          });
        }
      } else if (
        store.programs[i]?.sat_start_time.includes("30") &&
        store.programs[i]?.sat_end_time.includes("30")
      ) {
        let startSatTimeNum = parseFloat(
          store.programs[i]?.sat_start_time
            ?.replace(/\D/g, "")
            .replace("30", ".5")
        );
        let endSatTimeNum = parseFloat(
          store.programs[i]?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
        );
        let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;

        totalSatHours.push({
          name: store.programs[i]?.name,
          total_sat_hours: totalSatHoursNormal,
          id: store.programs[i]?.id,
        });
      } else if (store.programs[i]?.sat_end_time.includes("30")) {
        let endSatTimeNum = parseFloat(
          store.programs[i]?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
        );
        let startSatTimeNum = parseInt(
          store.programs[i]?.sat_start_time?.replace(/\D/g, "")
        );
        let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;

        totalSatHours.push({
          name: store.programs[i]?.name,
          total_sat_hours: totalSatHoursNormal,
          id: store.programs[i]?.id,
        });
      } else if (store.programs[i]?.sat_start_time.includes("30")) {
        let endSatTimeNum = parseInt(
          store.programs[i]?.sat_end_time.replace(/\D/g, "")
        );
        let startSatTimeNum = parseFloat(
          store.programs[i]?.sat_start_time
            ?.replace(/\D/g, "")
            .replace("30", ".5")
        );
        let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;

        totalSatHours.push({
          name: store.programs[i]?.name,
          total_sat_hours: totalSatHoursNormal,
          id: store.programs[i]?.id,
        });
      }
    }
  }
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
let curbStyle=""
if(store.programs[1]){
  if(store.programs[1].thursday===true){
    curbStyle={
      top: 54.7+"%", 
      left: 43.3+"%", 
      width: 85+"px", 
      padding: 5+"px",
     }
  }
}
  

  
 
  return (
    <div>
      <ul
        className="nav nav-pills mb-3 nav-justified"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active ms-1"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link me-1"
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
            style={{ top: "50%", left: "24.8%", width: "273px" }}
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
              top: "54.7%",
              left: "43.3%",
              width: "85px" 
             }}
          >
            <div className="curbside">
              {store.programs[1] ? (
                store.programs[1].name
              ) : (
                <>Loading...</>
              )}
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
              width: "85px"
            }}
          >
            <div className="curbside">
              {store.programs[1] ? (
                store.programs[1].name
              ) : (
                <>Loading...</>
              )}
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
              {store.programs[3] ? (
                store.programs[3].name
              ) : (
                <>Loading...</>
              )}
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
            width: "220px"
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
              {store.programs[1] ? (
                store.programs[1].name
              ) : (
                <>Loading...</>
              )}
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
              {store.programs[1] ? (
                store.programs[1].name
              ) : (
                <>Loading...</>
              )}
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
