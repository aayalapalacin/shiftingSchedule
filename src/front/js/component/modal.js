import React from "react"
import PropTypes from 'prop-types';

function Modal(props) {
 let newLine = props.description;
 if (newLine == undefined) {
 } else if (newLine.includes("**")) {
   var text = newLine.split("**", 2);
   var last=text[1].replace("last", "Last");
   var finalDescription=`<div>${text[0]}</div>`+`<div>${last}</div>`
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
              {props.description!==undefined?props.description:props.description!==undefined?finalDescription:finalDescription}
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