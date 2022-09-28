import React, { useState } from "react";
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
  // //   const [totalHours, setTotalHours] = useState({});
  // //   let startTimeNum = parseInt(startTime?.replace(/\D/g, ""));
  // //   let endTimeNum = parseInt(endTime?.replace(/\D/g, ""));
  // //   let totalHoursNormal = endTimeNum - startTimeNum;
  // //   let totalAmPmHours = endTimeNum + 12 - startTimeNum;
  // //   if (program?.start_time == "12PM") {
  // //     useEffect(() => {
  // //       setTotalHours({ name: program?.name, total_hours: endTimeNum });
  // //     }, []);
  // //   } else if (
  // //     program?.start_time.includes("AM") &&
  // //     program?.end_time.includes("PM")
  // //   ) {
  // //     useEffect(() => {
  // //       setTotalHours({
  // //         name: program?.name,
  // //         total_hours: totalAmPmHours,
  // //       });
  // //     }, []);
  // //   } else {
  // //     useEffect(() => {
  // //       setTotalHours({
  // //         name: program?.name,
  // //         total_hours: totalHoursNormal,
  // //       });
  // //     }, []);
  //   }

  return <div>{props.data?.name}</div>;
}

ProgramDivs.propTypes = {
  data: PropTypes.object,
};

export default ProgramDivs;
