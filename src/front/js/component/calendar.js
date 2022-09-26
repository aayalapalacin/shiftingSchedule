import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
function Calendar() {
  const { store, actions } = useContext(Context);
  console.log("store", store.programs[1]);
  let programObj = store.programs[1]?.name;
  console.log(programObj);
  const programs = [
    {
      name: "Food Pantry: Onsite",
      description:
        "Nutritious staples for individuals & families from 13 towns. Monthly pick-up. Brief intake required.",
      startEndTimeText: "Food Pantry Onsite: 12pm-3pm",
      startSatText: "Food Pantry Onsite: 9am-12pm",
      startThurText: "Food Pantry Onsite: 12pm-7pm",
    },
    {
      name: "Food Pantry: Curbside",
      description:
        "Nutritious staples for individuals & families from 13 towns. Monthly pick-up. Brief intake required.",
      startEndTimeText: "Food Pantry Curbside: 3pm-4pm",
      startThurText: "Food Pantry Curbside: 5pm-7:30pm",
      startSatText: "Food Pantry Curbside: 9am-12pm",
    },
    {
      name: "Community Meals",
      description: "To Go Hot Lunch Distributed to all.",
      startEndTimeText: "Community Meals: 12pm-3pm",
    },
    {
      name: "Mobile Food Pantry",
      description:
        "Located at the Boulders Apartment Homes located at 156 Brittany Drive in Amherst",
      startEndTimeText: "Mobile Food Pantry: 1st Wed/month 1pm-2pm",
    },
    {
      name: "Fresh Produce and Baked Goods",
      description: "Distributed to all.",
      startEndTimeText: "Fresh Produce + Baked Goods: 12pm-3pm",
    },
    {
      name: "Additional Services",
      description:
        "Warming center, showers, laundry and lockers. **last load of laundry must be in 1.5 hours before close, last shower is 30 min. before close",
      startEndTimeText: "Addional Services: 9am-3pm",
    },
  ];

  const start10am = () => {
    return (
      <div className="10am" style={{ fontSize: "13px", width: "10%" }}></div>
    );
  };
  const start11am = () => {
    return (
      <div className="11am" style={{ fontSize: "13px", width: "20%" }}></div>
    );
  };
  const start12pm = () => {
    return (
      <div className="12pm" style={{ fontSize: "13px", width: "30.8%" }}></div>
    );
  };
  const start1pm = () => {
    return (
      <div className="1pm" style={{ fontSize: "13px", width: "40%" }}></div>
    );
  };
  const start2pm = () => {
    return (
      <div className="2pm" style={{ fontSize: "13px", width: "49%" }}></div>
    );
  };
  const start3pm = () => {
    return (
      <div className="3pm" style={{ fontSize: "13px", width: "58%" }}></div>
    );
  };
  const start4pm = () => {
    return (
      <div className="4pm" style={{ fontSize: "13px", width: "67%" }}></div>
    );
  };
  const start5pm = () => {
    return (
      <div className="5pm" style={{ fontSize: "13px", width: "75%" }}></div>
    );
  };
  const start6pm = () => {
    return (
      <div className="6pm" style={{ fontSize: "13px", width: "84%" }}></div>
    );
  };
  const start7pm = () => {
    return (
      <div className="7pm" style={{ fontSize: "13px", width: "92%" }}></div>
    );
  };

  return (
    <div>
      <div className="bg-primary col-3 PantryOnsite ">
        {programs[0].startEndTimeText}
      </div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">9AM-10AM</th>
            <th scope="col">10AM-11AM</th>
            <th scope="col">11AM-12PM</th>
            <th scope="col">12PM-1PM</th>
            <th scope="col">1PM-2PM</th>
            <th scope="col">2PM-3PM</th>
            <th scope="col">3PM-4PM</th>
            <th scope="col">4PM-5PM</th>
            <th scope="col">5PM-6PM</th>
            <th scope="col">6PM-7PM</th>
            <th scope="col">7PM-8PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
