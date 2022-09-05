import React from "react"

function Modal(props) {
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
              {props.description}
              <div>{props.startEndTimeText}</div>
              {props.startSatText !== undefined ? (
                <div>Saturday: {props.startSatText}</div>
              ) : (
                <></>
              )}
              {props.startThurText !== undefined ? (
                <div>Thursday: {props.startThurText}</div>
              ) : (
                <></>
              )}
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