import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RequestsList from "../RequestsList/RequestsList";

const ModalRequestsInfo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My requests
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RequestsList requests={props.requests} onClick={props.onClick} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" size="sm" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRequestsInfo;
