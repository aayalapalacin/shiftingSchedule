import React, { useEffect, useState } from "react";

import "../../styles/calendar.css";

function Calendar(props) {
  return (
    <div>
      <div className="bg-primary col-3 PantryOnsite "></div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th className="fontTime" scope="col">
              <span className="text-light">9</span>9AM-10AM
            </th>
            <th className="fontTime" scope="col">
              10AM-11AM
            </th>
            <th className="fontTime" scope="col">
              11AM-12PM
            </th>
            <th className="fontTime" scope="col">
              12PM-1PM &#8205;
            </th>
            <th className="fontTime" scope="col">
              &zwnj;1PM-2PM&zwnj;
            </th>
            <th className="fontTime" scope="col">
              &zwnj; 2PM-3PM &zwnj;
            </th>
            <th className="fontTime" scope="col">
              &zwnj; 3PM-4PM &zwnj;
            </th>
            <th className="fontTime" scope="col">
              &zwnj; 4PM-5PM &zwnj;
            </th>
            <th className="fontTime" scope="col">
              &zwnj; 5PM-6PM &zwnj;
            </th>
            <th className="fontTime" scope="col">
              &zwnj; 6PM-7PM &zwnj;
            </th>
            <th className="fontTime" scope="col">
              &zwnj; 7PM-8PM &zwnj;
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
