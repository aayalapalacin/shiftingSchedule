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
              9AM-10AM
            </th>
            <th className="timeFont" scope="col ">
              10AM-11AM
            </th>
            <th className="timeFont" scope="col ">
              11AM-12PM
            </th>
            <th className="timeFont" scope="col ">
              12PM-1PM
            </th>
            <th className="timeFont" scope="col ">
              1PM-2PM
            </th>
            <th className="timeFont" scope="col ">
              2PM-3PM
            </th>
            <th className="timeFont" scope="col ">
              3PM-4PM
            </th>
            <th className="timeFont" scope="col ">
              4PM-5PM
            </th>
            <th className="timeFont" scope="col ">
              5PM-6PM
            </th>
            <th className="timeFont" scope="col ">
              6PM-7PM
            </th>
            <th className="timeFont" scope="col ">
              7PM-8PM
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
