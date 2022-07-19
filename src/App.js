import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Container from "./components/Container/Container";
import DeliveryForm from "./components/Form/Form";

const App = () => {
  const [deliveryInfo, setDeliveryInfo] = useState(
    () => JSON.parse(localStorage.getItem("deliveryInfo")) ?? []
  );

  const addDeliveryInfo = ({
    goods,
    dispatchCity,
    destinationCity,
    startDate,
    description,
  }) => {
    setDeliveryInfo((deliveryInfo) => [
      ...deliveryInfo,
      {
        id: nanoid(),
        goods,
        dispatchCity,
        destinationCity,
        startDate,
        description,
      },
    ]);
  };

  const getRequests = () => {
    return deliveryInfo.filter((infoItem) =>
      infoItem.dispatchCity.toLowerCase()
    );
  };

  const removeRequest = (id) => {
    setDeliveryInfo((prev) => prev.filter((infoItem) => infoItem.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
  }, [deliveryInfo]);

  return (
    <>
      <Container requests={getRequests()} onClick={removeRequest}>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />

        <DeliveryForm onSubmit={addDeliveryInfo} />
      </Container>
    </>
  );
};

export default App;
