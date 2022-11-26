import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

function TotalHours() {
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
    } else {
      let endTimeNum = parseInt(store.programs[i]?.end_time.replace(/\D/g, ""));
      let startTimeNum = parseInt(
        store.programs[i]?.start_time.replace(/\D/g, "")
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
      } else {
        let endTimeNum = parseInt(
          store.programs[i]?.thur_end_time.replace(/\D/g, "")
        );
        let startTimeNum = parseInt(
          store.programs[i]?.thur_start_time.replace(/\D/g, "")
        );
        let totalHoursNormal = endTimeNum - startTimeNum;

        totalThurHours.push({
          name: store.programs[i]?.name,
          total_hours: totalHoursNormal,
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
      } else {
        let endTimeNum = parseInt(
          store.programs[i]?.sat_end_time.replace(/\D/g, "")
        );
        let startTimeNum = parseInt(
          store.programs[i]?.sat_start_time.replace(/\D/g, "")
        );
        let totalHoursNormal = endTimeNum - startTimeNum;

        totalSatHours.push({
          name: store.programs[i]?.name,
          total_hours: totalHoursNormal,
          id: store.programs[i]?.id,
        });
      }
    }
  }
  useEffect(() => {
    if (totalHours.length == store.totalHours.length) {
      stop;
    } else if (totalHours.length > 0) {
      actions.addTotalHours(totalHours);
    }
  }, [totalHours]);

  useEffect(() => {
    if (totalThurHours.length == store.totalThurHours.length) {
      stop;
    } else if (totalThurHours.length > 0) {
      actions.addTotalThurHours(totalThurHours);
    }
  }, [totalThurHours]);

  useEffect(() => {
    if (totalSatHours.length == store.totalSatHours.length) {
      stop;
    } else if (totalSatHours.length > 0) {
      actions.addTotalSatHours(totalSatHours);
    }
  }, [totalSatHours]);
  console.log(store, "storey");

  return <div></div>;
}

export default TotalHours;
