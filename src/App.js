import { ToastContainer } from "react-toastify";
import Container from "./components/Container/Container";
import DeliveryForm from "./components/Form/Form";

const App = () => {
  return (
    <>
      <Container>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
        <DeliveryForm />
      </Container>
    </>
  );
};

export default App;
