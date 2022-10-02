import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
  const [totalHours, setTotalHours] = useState([]);
  const [totalThurHours, setTotalThurHours] = useState([]);
  const [totalSatHours, setTotalSatHours] = useState([]);
  let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
  let endTimeNum = parseInt(props.data?.end_time?.replace(/\D/g, ""));
  let totalHoursNormal = endTimeNum - startTimeNum;
  let totalAmPmHours = endTimeNum + 12 - startTimeNum;

  // normal program total hours
  if (props.data?.start_time == "12PM") {
    if (props.data?.end_time.includes("30")) {
      let endTimeNum = parseFloat(
        props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
      );

      useEffect(() => {
        setTotalHours({
          name: props.data?.name,
          total_hours: endTimeNum,
          id: props.data?.id,
        });
      }, []);
    } else {
      let endTimeNum = parseInt(props.data?.end_time.replace(/\D/g, ""));

      useEffect(() => {
        setTotalHours({
          name: props.data?.name,
          total_hours: endTimeNum,
          id: props.data?.id,
        });
      }, []);
    }
  } else if (
    props.data?.start_time.includes("AM") &&
    props.data?.end_time.includes("PM")
  ) {
    if (
      props.data?.start_time.includes("30") &&
      props.data?.end_time.includes("30")
    ) {
      if (props.data?.end_time.includes("12:30")) {
        let startTimeNum = parseFloat(
          props.data?.start_time?.replace(/\D/g, "").replace("30", ".5")
        );
        let endTimeNum = parseFloat(
          props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
        );
        let totalAmPmHours = endTimeNum - startTimeNum;
        useEffect(() => {
          setTotalHours({
            name: props.data?.name,
            total_hours: totalAmPmHours,
            id: props.data?.id,
          });
        }, []);
      } else {
        let startTimeNum = parseFloat(
          props.data?.start_time?.replace(/\D/g, "").replace("30", ".5")
        );
        let endTimeNum = parseFloat(
          props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
        );
        let totalAmPmHours = endTimeNum + 12 - startTimeNum;
        useEffect(() => {
          setTotalHours({
            name: props.data?.name,
            total_hours: totalAmPmHours,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (props.data?.start_time.includes("30")) {
      if (props.data?.end_time == "12PM") {
        let startTimeNum = parseFloat(
          props.data?.start_time?.replace(/\D/g, "").replace("30", ".5")
        );
        let endTimeNum = parseInt(props.data?.end_time.replace(/\D/g, ""));
        let totalAmPmHours = endTimeNum - startTimeNum;
        useEffect(() => {
          setTotalHours({
            name: props.data?.name,
            total_hours: totalAmPmHours,
            id: props.data?.id,
          });
        }, []);
      } else {
        let startTimeNum = parseFloat(
          props.data?.start_time?.replace(/\D/g, "").replace("30", ".5")
        );
        let endTimeNum = parseInt(props.data?.end_time.replace(/\D/g, ""));
        let totalAmPmHours = endTimeNum + 12 - startTimeNum;
        useEffect(() => {
          setTotalHours({
            name: props.data?.name,
            total_hours: totalAmPmHours,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (props.data?.end_time.includes("30")) {
      if (props.data?.end_time == "12:30PM") {
        let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
        let endTimeNum = parseFloat(
          props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
        );
        let totalAmPmHours = endTimeNum - startTimeNum;
        useEffect(() => {
          setTotalHours({
            name: props.data?.name,
            total_hours: totalAmPmHours,
            id: props.data?.id,
          });
        }, []);
      } else {
        let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
        let endTimeNum = parseFloat(
          props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
        );
        let totalAmPmHours = endTimeNum + 12 - startTimeNum;
        useEffect(() => {
          setTotalHours({
            name: props.data?.name,
            total_hours: totalAmPmHours,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (props.data?.end_time == "12PM") {
      let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
      let endTimeNum = parseInt(props.data?.end_time.replace(/\D/g, ""));
      let totalAmPmHours = endTimeNum - startTimeNum;
      useEffect(() => {
        setTotalHours({
          name: props.data?.name,
          total_hours: totalAmPmHours,
          id: props.data?.id,
        });
      }, []);
    } else {
      let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
      let endTimeNum = parseInt(props.data?.end_time.replace(/\D/g, ""));
      let totalAmPmHours = endTimeNum + 12 - startTimeNum;
      useEffect(() => {
        setTotalHours({
          name: props.data?.name,
          total_hours: totalAmPmHours,
          id: props.data?.id,
        });
      }, []);
    }
  } else if (
    props.data?.start_time.includes("30") &&
    props.data?.end_time.includes("30")
  ) {
    let startTimeNum = parseFloat(
      props.data?.start_time?.replace(/\D/g, "").replace("30", ".5")
    );
    let endTimeNum = parseFloat(
      props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
    );
    let totalHoursNormal = endTimeNum - startTimeNum;
    useEffect(() => {
      setTotalHours({
        name: props.data?.name,
        total_hours: totalHoursNormal,
        id: props.data?.id,
      });
    }, []);
  } else if (props.data?.end_time.includes("30")) {
    let endTimeNum = parseFloat(
      props.data?.end_time.replace(/\D/g, "").replace("30", ".5")
    );
    let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
    let totalHoursNormal = endTimeNum - startTimeNum;
    useEffect(() => {
      setTotalHours({
        name: props.data?.name,
        total_hours: totalHoursNormal,
        id: props.data?.id,
      });
    }, []);
  } else if (props.data?.start_time.includes("30")) {
    let endTimeNum = parseInt(props.data?.end_time.replace(/\D/g, ""));
    let startTimeNum = parseFloat(
      props.data?.start_time?.replace(/\D/g, "").replace("30", ".5")
    );
    let totalHoursNormal = endTimeNum - startTimeNum;
    useEffect(() => {
      setTotalHours({
        name: props.data?.name,
        total_hours: totalHoursNormal,
        id: props.data?.id,
      });
    }, []);
  }

  // thursday program total hours:
  if (
    props.data?.thur_start_time != null &&
    props.data?.thur_end_time != null
  ) {
    if (props.data?.thur_start_time == "12PM") {
      if (props.data?.thur_end_time.includes("30")) {
        let endThurTimeNum = parseFloat(
          props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
        );

        useEffect(() => {
          setTotalThurHours({
            name: props.data?.name,
            total_thur_hours: endThurTimeNum,
            id: props.data?.id,
          });
        }, []);
      } else {
        let endThurTimeNum = parseInt(
          props.data?.thur_end_time.replace(/\D/g, "")
        );

        useEffect(() => {
          setTotalThurHours({
            name: props.data?.name,
            total_thur_hours: endThurTimeNum,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (
      props.data?.thur_start_time.includes("AM") &&
      props.data?.thur_end_time.includes("PM")
    ) {
      if (
        props.data?.thur_start_time.includes("30") &&
        props.data?.thur_end_time.includes("30")
      ) {
        if (props.data?.thur_end_time.includes("12:30")) {
          let startThurTimeNum = parseFloat(
            props.data?.thur_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endThurTimeNum = parseFloat(
            props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;
          useEffect(() => {
            setTotalThurHours({
              name: props.data?.name,
              total_thur_hours: totalThurAmPmHours,
              id: props.data?.id,
            });
          }, []);
        } else {
          let startThurTimeNum = parseFloat(
            props.data?.thur_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endThurTimeNum = parseFloat(
            props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;
          useEffect(() => {
            setTotalThurHours({
              name: props.data?.name,
              total_thur_hours: totalThurAmPmHours,
              id: props.data?.id,
            });
          }, []);
        }
      } else if (props.data?.thur_start_time.includes("30")) {
        if (props.data?.thur_end_time == "12PM") {
          let startThurTimeNum = parseFloat(
            props.data?.thur_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endThurTimeNum = parseInt(
            props.data?.thur_end_time.replace(/\D/g, "")
          );
          let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;
          useEffect(() => {
            setTotalThurHours({
              name: props.data?.name,
              total_thur_hours: totalThurAmPmHours,
              id: props.data?.id,
            });
          }, []);
        } else {
          let startThurTimeNum = parseFloat(
            props.data?.thur_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endThurTimeNum = parseInt(
            props.data?.thur_end_time.replace(/\D/g, "")
          );
          let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;
          useEffect(() => {
            setTotalThurHours({
              name: props.data?.name,
              total_thur_hours: totalThurAmPmHours,
              id: props.data?.id,
            });
          }, []);
        }
      } else if (props.data?.thur_end_time.includes("30")) {
        if (props.data?.thur_end_time == "12:30PM") {
          let startThurTimeNum = parseInt(
            props.data?.thur_start_time?.replace(/\D/g, "")
          );
          let endThurTimeNum = parseFloat(
            props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;
          useEffect(() => {
            setTotalThurHours({
              name: props.data?.name,
              total_thur_hours: totalThurAmPmHours,
              id: props.data?.id,
            });
          }, []);
        } else {
          let startThurTimeNum = parseInt(
            props.data?.thur_start_time?.replace(/\D/g, "")
          );
          let endThurTimeNum = parseFloat(
            props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;
          useEffect(() => {
            setTotalThurHours({
              name: props.data?.name,
              total_thur_hours: totalThurAmPmHours,
              id: props.data?.id,
            });
          }, []);
        }
      } else if (props.data?.thur_end_time == "12PM") {
        let startThurTimeNum = parseInt(
          props.data?.thur_start_time?.replace(/\D/g, "")
        );
        let endThurTimeNum = parseInt(
          props.data?.thur_end_time.replace(/\D/g, "")
        );
        let totalThurAmPmHours = endThurTimeNum - startThurTimeNum;
        useEffect(() => {
          setTotalThurHours({
            name: props.data?.name,
            total_thur_hours: totalThurAmPmHours,
            id: props.data?.id,
          });
        }, []);
      } else {
        let startThurTimeNum = parseInt(
          props.data?.thur_start_time?.replace(/\D/g, "")
        );
        let endThurTimeNum = parseInt(
          props.data?.thur_end_time.replace(/\D/g, "")
        );
        let totalThurAmPmHours = endThurTimeNum + 12 - startThurTimeNum;
        useEffect(() => {
          setTotalThurHours({
            name: props.data?.name,
            total_thur_hours: totalThurAmPmHours,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (
      props.data?.thur_start_time.includes("30") &&
      props.data?.thur_end_time.includes("30")
    ) {
      let startThurTimeNum = parseFloat(
        props.data?.thur_start_time?.replace(/\D/g, "").replace("30", ".5")
      );
      let endThurTimeNum = parseFloat(
        props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
      );
      let totalThurHoursNormal = endThurTimeNum - startThurTimeNum;
      useEffect(() => {
        setTotalThurHours({
          name: props.data?.name,
          total_thur_hours: totalThurHoursNormal,
          id: props.data?.id,
        });
      }, []);
    } else if (props.data?.thur_end_time.includes("30")) {
      let endThurTimeNum = parseFloat(
        props.data?.thur_end_time.replace(/\D/g, "").replace("30", ".5")
      );
      let startThurTimeNum = parseInt(
        props.data?.thur_start_time?.replace(/\D/g, "")
      );
      let totalThurHoursNormal = endThurTimeNum - startThurTimeNum;
      useEffect(() => {
        setTotalThurHours({
          name: props.data?.name,
          total_thur_hours: totalThurHoursNormal,
          id: props.data?.id,
        });
      }, []);
    } else if (props.data?.thur_start_time.includes("30")) {
      let endThurTimeNum = parseInt(
        props.data?.thur_end_time.replace(/\D/g, "")
      );
      let startThurTimeNum = parseFloat(
        props.data?.thur_start_time?.replace(/\D/g, "").replace("30", ".5")
      );
      let totalThurHoursNormal = endThurTimeNum - startThurTimeNum;
      useEffect(() => {
        setTotalThurHours({
          name: props.data?.name,
          total_thur_hours: totalThurHoursNormal,
          id: props.data?.id,
        });
      }, []);
    }
  }
  // Saturday program total hours
  if (props.data?.sat_start_time != null && props.data?.sat_end_time != null) {
    if (props.data?.sat_start_time == "12PM") {
      if (props.data?.sat_end_time.includes("30")) {
        let endSatTimeNum = parseFloat(
          props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
        );

        useEffect(() => {
          setTotalSatHours({
            name: props.data?.name,
            total_sat_hours: endSatTimeNum,
            id: props.data?.id,
          });
        }, []);
      } else {
        let endSatTimeNum = parseInt(
          props.data?.sat_end_time.replace(/\D/g, "")
        );

        useEffect(() => {
          setTotalSatHours({
            name: props.data?.name,
            total_sat_hours: endSatTimeNum,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (
      props.data?.sat_start_time.includes("AM") &&
      props.data?.sat_end_time.includes("PM")
    ) {
      if (
        props.data?.sat_start_time.includes("30") &&
        props.data?.sat_end_time.includes("30")
      ) {
        if (props.data?.sat_end_time.includes("12:30")) {
          let startSatTimeNum = parseFloat(
            props.data?.sat_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endSatTimeNum = parseFloat(
            props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;
          useEffect(() => {
            setTotalSatHours({
              name: props.data?.name,
              total_sat_hours: totalSatAmPmHours,
              id: props.data?.id,
            });
          }, []);
        } else {
          let startSatTimeNum = parseFloat(
            props.data?.sat_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endSatTimeNum = parseFloat(
            props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;
          useEffect(() => {
            setTotalSatHours({
              name: props.data?.name,
              total_sat_hours: totalSatAmPmHours,
              id: props.data?.id,
            });
          }, []);
        }
      } else if (props.data?.sat_start_time.includes("30")) {
        if (props.data?.sat_end_time == "12PM") {
          let startSatTimeNum = parseFloat(
            props.data?.sat_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endSatTimeNum = parseInt(
            props.data?.sat_end_time.replace(/\D/g, "")
          );
          let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;
          useEffect(() => {
            setTotalSatHours({
              name: props.data?.name,
              total_sat_hours: totalSatAmPmHours,
              id: props.data?.id,
            });
          }, []);
        } else {
          let startSatTimeNum = parseFloat(
            props.data?.sat_start_time?.replace(/\D/g, "").replace("30", ".5")
          );
          let endSatTimeNum = parseInt(
            props.data?.sat_end_time.replace(/\D/g, "")
          );
          let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;
          useEffect(() => {
            setTotalSatHours({
              name: props.data?.name,
              total_sat_hours: totalSatAmPmHours,
              id: props.data?.id,
            });
          }, []);
        }
      } else if (props.data?.sat_end_time.includes("30")) {
        if (props.data?.sat_end_time == "12:30PM") {
          let startSatTimeNum = parseInt(
            props.data?.sat_start_time?.replace(/\D/g, "")
          );
          let endSatTimeNum = parseFloat(
            props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;
          useEffect(() => {
            setTotalSatHours({
              name: props.data?.name,
              total_sat_hours: totalSatAmPmHours,
              id: props.data?.id,
            });
          }, []);
        } else {
          let startSatTimeNum = parseInt(
            props.data?.sat_start_time?.replace(/\D/g, "")
          );
          let endSatTimeNum = parseFloat(
            props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
          );
          let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;
          useEffect(() => {
            setTotalSatHours({
              name: props.data?.name,
              total_sat_hours: totalSatAmPmHours,
              id: props.data?.id,
            });
          }, []);
        }
      } else if (props.data?.sat_end_time == "12PM") {
        let startSatTimeNum = parseInt(
          props.data?.sat_start_time?.replace(/\D/g, "")
        );
        let endSatTimeNum = parseInt(
          props.data?.sat_end_time.replace(/\D/g, "")
        );
        let totalSatAmPmHours = endSatTimeNum - startSatTimeNum;
        useEffect(() => {
          setTotalSatHours({
            name: props.data?.name,
            total_sat_hours: totalSatAmPmHours,
            id: props.data?.id,
          });
        }, []);
      } else {
        let startSatTimeNum = parseInt(
          props.data?.sat_start_time?.replace(/\D/g, "")
        );
        let endSatTimeNum = parseInt(
          props.data?.sat_end_time.replace(/\D/g, "")
        );
        let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;
        useEffect(() => {
          setTotalSatHours({
            name: props.data?.name,
            total_sat_hours: totalSatAmPmHours,
            id: props.data?.id,
          });
        }, []);
      }
    } else if (
      props.data?.sat_start_time.includes("30") &&
      props.data?.sat_end_time.includes("30")
    ) {
      let startSatTimeNum = parseFloat(
        props.data?.sat_start_time?.replace(/\D/g, "").replace("30", ".5")
      );
      let endSatTimeNum = parseFloat(
        props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
      );
      let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;
      useEffect(() => {
        setTotalSatHours({
          name: props.data?.name,
          total_sat_hours: totalSatHoursNormal,
          id: props.data?.id,
        });
      }, []);
    } else if (props.data?.sat_end_time.includes("30")) {
      let endSatTimeNum = parseFloat(
        props.data?.sat_end_time.replace(/\D/g, "").replace("30", ".5")
      );
      let startSatTimeNum = parseInt(
        props.data?.sat_start_time?.replace(/\D/g, "")
      );
      let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;
      useEffect(() => {
        setTotalSatHours({
          name: props.data?.name,
          total_sat_hours: totalSatHoursNormal,
          id: props.data?.id,
        });
      }, []);
    } else if (props.data?.sat_start_time.includes("30")) {
      let endSatTimeNum = parseInt(props.data?.sat_end_time.replace(/\D/g, ""));
      let startSatTimeNum = parseFloat(
        props.data?.sat_start_time?.replace(/\D/g, "").replace("30", ".5")
      );
      let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;
      useEffect(() => {
        setTotalSatHours({
          name: props.data?.name,
          total_sat_hours: totalSatHoursNormal,
          id: props.data?.id,
        });
      }, []);
    }
  }

  const totalHoursRender = () => {
    if (props.data?.id == totalHours.id) {
      return totalHours.total_hours;
    }
  };
  const totalThurHoursRender = () => {
    if (props.data?.id == totalThurHours.id) {
      return totalThurHours.total_thur_hours;
    }
  };
  const totalSatHoursRender = () => {
    if (props.data?.id == totalSatHours.id) {
      return totalSatHours.total_sat_hours;
    }
  };

  return (
    <div>
      <div>
        {props.data?.name} total hours are : {totalHoursRender()}
      </div>
      <div>thursday total hours: {totalThurHoursRender()}</div>
      <div>saturday total hours: {totalSatHoursRender()}</div>
    </div>
  );
}

ProgramDivs.propTypes = {
  data: PropTypes.object,
};

export default ProgramDivs;
