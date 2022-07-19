import React from "react";
import Button from "react-bootstrap/Button";
import s from "./RequestItem.module.scss";
import PropTypes from "prop-types";

const RequestItem = ({
  id,
  goods,
  dispatchCity,
  destinationCity,
  startDate,
  description,
  onClick,
}) => {
  return (
    <>
      <li className={s.requestItem}>
        <p className={s.titleDescr}>
          <span className={s.title}>Goods to deliver: </span> {goods}
        </p>
        <p className={s.titleDescr}>
          <span className={s.title}>City of dispatch: </span> {dispatchCity}
        </p>
        <p className={s.titleDescr}>
          <span className={s.title}> Destination city: </span> {destinationCity}
        </p>
        <p className={s.titleDescr}>
          <span className={s.title}> Date of dispatch: </span>
          {startDate.toString().slice(0, 24)}
        </p>
        <p className={s.titleDescr}>
          <span className={s.title}>Parcel description: </span> {description}
        </p>
        <Button
          variant="danger"
          lg="sm"
          type="button"
          onClick={() => onClick(id)}
        >
          Delete
        </Button>
      </li>
    </>
  );
};

export default RequestItem;

RequestItem.propTypes = {
  id: PropTypes.string.isRequired,
  goods: PropTypes.string.isRequired,
  dispatchCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  startDate: PropTypes.any,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
