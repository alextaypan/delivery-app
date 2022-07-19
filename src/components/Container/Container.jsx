import s from "./Container.module.scss";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalRequestsInfo from "../ModalRequestsInfo/ModalRequestsInfo";

const Container = ({ children, requests, onClick }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Delivery is your life</h1>
        <Button
          variant="warning"
          size="sm"
          className={s.button}
          onClick={() => setModalShow(true)}
        >
          Requests
        </Button>
      </div>
      <ModalRequestsInfo
        requests={requests}
        onClick={onClick}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={s.container}>{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
