import React, { useState } from "react";
import { Button, Card, CardBody, Col, Modal } from "reactstrap";

function CertificateModals({ show, onCloseclick }) {
  const [modal_center, setmodal_center] = useState(false);

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  function tog_center() {
    setmodal_center(!modal_center);
    removeBodyCss();
  }

  const printDoc = () => {
    window.print();
  };
  return (
    <>
      {/* // <div className="aall"> */}
      {/* <CardTitle className="h5">Vertically Centered</CardTitle>
            <p className="card-title-desc">
              Add <code>.modal-dialog-centered</code> to{" "}
              <code>.modal-dialog</code> to vertically center the modal.
            </p> */}
      {/* // <div> */}
      {/* <button
          type="button"
          className="btn btn-primary "
          onClick={() => {
            tog_center();
          }}
          data-toggle="modal"
          data-target=".bs-example-modal-center"
        >
          Center modal
        </button> */}
      <Modal
        className="aall"
        isOpen={show}
        toggle={onCloseclick}
        centered={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0"> Download the PDF</h5>
          <button
            type="button"
            onClick={onCloseclick}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          className="modal-body"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            className="low-modal"
            color="success"
            onClick={() => printDoc()}
          >
            download the file nnn
          </Button>
        </div>
      </Modal>
    </>
    //   </div>
    // </div>
  );
}

export default CertificateModals;
