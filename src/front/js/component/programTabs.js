import React, { useState } from "react";
import "../../styles/programTabs.css";
import Modal from "../component/modal.js"

function ProgramTabs() {
  const [tempData, setTempData] = useState([]);

   
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


  const getData=(index,name,dedscription,startEnd,starSat,starThur)=>{
    let tempData= [index,name,dedscription,startEnd,starSat,starThur]
    setTempData(item => [1,...tempData])
  }

  const list = programs.map((program, index)=>{
    let color=""
    if(index==0){
      color="tab-container ms-2 me-2 pt-3 bg-info"
    }else if (index==1){
      color="tab-container ms-2 me-2 pt-3 bg-warning"
    }else if (index==2){
      color="tab-container ms-2 me-2 pt-3 bg-secondary"
    }else if (index==3){
      color="tab-container ms-2 me-2 pt-3 bg-danger"
    }else if (index==4){
      color="tab-container ms-2 me-2 pt-3 bg-success"
    }else if (index==5){
      color="tab-container ms-2 me-2 pt-3"
    }    
    return (
      <div key={index} className="d-inline-flex col-3 justify-content-sm-around me-1 mb-1 pb-2">
        <div className={color}>
          <div className="row">
            <h5>{program.name}</h5>
          </div>
          <div className="row">
              <span
                className="btn btn-link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  getData(
                    program.index,
                    program.name,
                    program.description,
                    program.startEndTimeText,
                    program.startSatText,
                    program.startThurText
                  );
                }}
              >
                Click for more info
              </span>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div>
      {list}
      <Modal
      index={tempData[1]}
      name={tempData[2]}
      description={tempData[3]}
      startEndTimeText={tempData[4]}
      startSatText={tempData[5]}
      startThurText={tempData[6]}
       />  
    </div>
  );
}

export default ProgramTabs;
