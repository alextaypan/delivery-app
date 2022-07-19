import React from "react";
import Button from "react-bootstrap/Button";

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
      <li>
        <p>
          {goods}
          {/* {dispatchCity}
          {destinationCity}
          {startDate}
          {description} */}
        </p>
        <Button
          variant="outline-danger"
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
