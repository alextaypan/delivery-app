import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RequestsList from "../RequestsList/RequestsList";
import s from "./ModalReauestInfo.module.scss";
import PropTypes from "prop-types";

const ModalRequestsInfo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className={s.modalTitle}
          id="contained-modal-title-vcenter"
        >
          My requests
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.requests.length > 0 ? (
          <RequestsList requests={props.requests} onClick={props.onClick} />
        ) : (
          <h2 className={s.modalDescr}>You don't have any requests yet!</h2>
        )}
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

ModalRequestsInfo.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
