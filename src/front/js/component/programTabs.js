import React, { useState } from "react";
import "../../styles/programTabs.css";
import Modal from "../component/modal.js"

function ProgramTabs() {
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
  const list = programs.map((program, index)=>{
    let color=""
    if(index==0){
      color="tab-container ms-5 me-5 p-2 bg-info"
    }else if (index==1){
      color="tab-container ms-5 me-5 p-2 bg-warning"
    }else if (index==2){
      color="tab-container ms-5 me-5 p-2 bg-secondary"
    }else if (index==3){
      color="tab-container ms-5 me-5 p-2 bg-danger"
    }else if (index==4){
      color="tab-container ms-5 me-5 p-2 bg-success"
    }else if (index==5){
      color="tab-container ms-5 me-5 p-2"
    }
    
    return (
      <div key={index} className="d-inline-flex col-4 justify-content-around">
        <div className={color}>
          <div className="row">
            <h2>{program.name}</h2>
          </div>
          <div className="row">
            <span>
              <Modal
                index={index}
                name={program.name}
                description={program.description}
                startEndTimeText={program.startEndTimeText}
                startSatText={program.startSatText}
                startThurText={program.startThurText}
              />
            </span>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div>
      {list}
    </div>
  );
}

export default ProgramTabs;
