import React from "react";
import RequestItem from "../RequestItem/RequestItem";

const RequestsList = ({ requests, onClick }) => {
  return (
    <>
      <ul>
        {requests.map(
          ({
            id,
            goods,
            dispatchCity,
            destinationCity,
            startDate,
            description,
          }) => (
            <RequestItem
              key={id}
              id={id}
              goods={goods}
              dispatchCity={dispatchCity}
              destinationCity={destinationCity}
              startDate={startDate}
              description={description}
              onClick={onClick}
            />
          )
        )}
      </ul>
    </>
  );
};

export default RequestsList;
