import React from "react";

function Calendar() {
  const programs = [
    {
      name: "Food Pantry",
      description:
        "Nutritious staples for individuals & families from 13 towns. Monthly pick-up. Brief intake required.",
      startTime: {
        Mon: "",
        Tues: "",
        Wed: "",
        Thur: "",
        Fri: "",
        Sat: "",
      },
      endTime: {
        Mon: "",
        Tues: "",
        Wed: "",
        Thur: "",
        Fri: "",
        Sat: "",
      },
      type: "On site",
    },
    {
      name: "Food Pantry",
      description:
        "Nutritious staples for individuals & families from 13 towns. Monthly pick-up. Brief intake required.",
      startTime: {
        Mon: "",
        Tues: "",
        Wed: "",
        Thur: "",
        Fri: "",
        Sat: "",
      },
      endTime: {
        Mon: "",
        Tues: "",
        Wed: "",
        Thur: "",
        Fri: "",
        Satday: "",
      },
      type: "curbside",
    },
  ];
  return (
    <div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col"></th>
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
            <th scope="row">Mon</th>
            <td colspan="11">
              <div className="bg-primary col-3" style={{ fontSize: "13px" }}>
                test
              </div>
              <div className="bg-danger col-12" style={{ fontSize: "13px" }}>
                test
              </div>
              <div className="bg-secondary col-12" style={{ fontSize: "13px" }}>
                test
              </div>
              <div className="bg-info col-12" style={{ fontSize: "13px" }}>
                test
              </div>
              <div
                className="bg-dark text-light col-6"
                style={{ fontSize: "13px" }}
              >
                test
              </div>
              <div className="bg-success col-6" style={{ fontSize: "13px" }}>
                test
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Tue</th>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">Wed</th>
            <td colspan="2">Larry the Bird</td>
            <td colspan="2">Larry the Bird</td>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Thur</th>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Fri</th>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">Sat</th>
            <td colspan="2">Larry the Bird</td>
            <td colspan="2">Larry the Bird</td>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
