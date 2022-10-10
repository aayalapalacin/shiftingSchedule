import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
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
function ProgramDivs(props) {
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
  console.log("totalHours", totalHours);
  console.log("totalThurHours", totalThurHours);
  console.log("totalSatHours", totalSatHours);

  return (
    <div>
      {store.programs.map((item, index) => {
        return (
          <div key={index}>
            <div>{item?.name}</div>
          </div>
        );
      })}
    </div>
  );
}

ProgramDivs.propTypes = {
  data: PropTypes.object,
};

export default ProgramDivs;
