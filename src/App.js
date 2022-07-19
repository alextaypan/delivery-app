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
    // const findName = contacts.find(
    //   (contact) => contact.name.toLowerCase() === name.toLowerCase()
    // );
    // if (findName) {
    //   return alert(`${name} is already in contacts.`);
    // }
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

  useEffect(() => {
    localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
  }, [deliveryInfo]);

  return (
    <>
      <Container>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
        <DeliveryForm onSubmit={addDeliveryInfo} />
      </Container>
    </>
  );
};

export default App;
