import React, { useEffect, useState } from "react";

import "../../styles/calendar.css";

function Calendar(props) {
  return (
    <div>
      <div className="bg-primary col-3 PantryOnsite "></div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th className="timeFont" scope="col ">
              9AM-10AM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              10AM-11AM
            </th>
            <th className="timeFont" scope="col ">
              11AM-12PM
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 12PM-1PM
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 1PM-2PM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 2PM-3PM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 3PM-4PM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 4PM-5PM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 5PM-6PM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 6PM-7PM &nbsp;
            </th>
            <th className="timeFont" scope="col ">
              &nbsp; 7PM-8PM &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td className="cell-size"></td>
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
            <td className="cell-size"></td>
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
            <td className="cell-size"></td>
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
            <td className="cell-size"></td>
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
            <td className="cell-size"></td>
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
            <td className="cell-size"></td>
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
