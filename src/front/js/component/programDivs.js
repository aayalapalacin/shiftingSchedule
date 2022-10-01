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
  let startTimeNum = parseInt(props.data?.start_time?.replace(/\D/g, ""));
  let endTimeNum = parseInt(props.data?.end_time?.replace(/\D/g, ""));
  let totalHoursNormal = endTimeNum - startTimeNum;
  let totalAmPmHours = endTimeNum + 12 - startTimeNum;

  // let startSatTimeNum = parseInt(
  //   props.data?.sat_start_time?.replace(/\D/g, "")
  // );
  // let endSatTimeNum = parseInt(props.data?.sat_end_time.replace(/\D/g, ""));
  // let totalSatHoursNormal = endSatTimeNum - startSatTimeNum;
  // let totalSatAmPmHours = endSatTimeNum + 12 - startSatTimeNum;
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
      if (props.data?.thur_start_time.includes("30")) {
      }
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
    } else {
      let startThurTimeNum = parseInt(
        props.data?.thur_start_time?.replace(/\D/g, "")
      );
      let endThurTimeNum = parseInt(
        props.data?.thur_end_time.replace(/\D/g, "")
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

  if (props.data?.start_time == "12PM") {
    useEffect(() => {
      setTotalHours({
        name: props.data?.name,
        total_hours: endTimeNum,
        id: props.data?.id,
      });
    }, []);
  } else if (
    props.data?.start_time.includes("AM") &&
    props.data?.end_time.includes("PM")
  ) {
    useEffect(() => {
      setTotalHours({
        name: props.data?.name,
        total_hours: totalAmPmHours,
        id: props.data?.id,
      });
    }, []);
  } else {
    useEffect(() => {
      setTotalHours({
        name: props.data?.name,
        total_hours: totalHoursNormal,
        id: props.data?.id,
      });
    }, []);
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
  console.log("total thur", totalHours.total_thur_hours);
  return (
    <div>
      {props.data?.name} total hours are : {totalHoursRender()} thursday total
      hours: {totalThurHoursRender()}
    </div>
  );
}

ProgramDivs.propTypes = {
  data: PropTypes.object,
};

export default ProgramDivs;
