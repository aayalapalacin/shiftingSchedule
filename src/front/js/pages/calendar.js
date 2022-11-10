import React, { useEffect, useState } from "react";

import "../../styles/calendar.css";

function Calendar() {
  return (
    <div className="bg-warning">
      <div className="d-flex ">
        <div className="fontTime border border-dark px-2">09AM-10AM</div>
        <div className="fontTime border border-dark px-2">10AM-11AM</div>
        <div className="fontTime border border-dark px-2">11AM-12PM</div>
        <div className="fontTime border border-dark px-2">12PM-1PM &#8205;</div>
        <div className="fontTime border border-dark px-2">
          &zwnj;1PM-2PM&zwnj;
        </div>
        <div className="fontTime border border-dark px-2">
          &zwnj; 2PM-3PM &zwnj;
        </div>
        <div className="fontTime border border-dark px-2">
          &zwnj; 3PM-4PM &zwnj;
        </div>
        <div className="fontTime border border-dark px-2">
          &zwnj; 4PM-5PM &zwnj;
        </div>
        <div className="fontTime border border-dark px-2">
          &zwnj; 5PM-6PM &zwnj;
        </div>
        <div className="fontTime border border-dark px-2">
          &zwnj; 6PM-7PM &zwnj;
        </div>
        <div className="fontTime border border-dark px-2">
          &zwnj; 7PM-8PM &zwnj;
        </div>
      </div>
      <div className="d-flex">
        <div className="border border-dark emptyCell ">&zwnj;</div>
        <div className="border border-dark emptyCell ">&zwnj;</div>
      </div>
    </div>
  );
}

export default Calendar;
