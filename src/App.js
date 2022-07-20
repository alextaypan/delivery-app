import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./components/Container/Container";
import DeliveryForm from "./components/Form/Form";
import { toast } from "react-toastify";

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
    if (deliveryInfo) {
      return toast.warn(
        "New delivery request was successfully added, you can check it by pressing the button 'My Requests'",
        {
          icon: "🚀",
        }
      );
    }
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        icon={false}
      />
      <Container requests={getRequests()} onClick={removeRequest}>
        <DeliveryForm onSubmit={addDeliveryInfo} />
      </Container>
    </>
  );
};

export default App;
