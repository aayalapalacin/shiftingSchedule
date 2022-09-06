import React from "react"
import PropTypes from 'prop-types';

function Modal(props) {
 let newLine = props.description
 if(newLine==undefined){
  console.log("hi")
 }else if(newLine.includes("**")){
 let text= newLine.replace("**", '\n')
 console.log(text)
 }



  

  return (
    <>
      <div
        className="modal fade modal-letter"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.description===undefined?<>...Loading</>:props.description.replace("Warming center, showers, laundry and lockers. **last load of laundry must be in 1.5 hours before close, last shower is 30 min. before close",((x)=>{
                return "Warming center, showers, laundry and lockers."+"\n"+"Last load of laundry must be in 1.5 hours before close, last shower is 30 min. before close."
              }) )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
Modal.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
}