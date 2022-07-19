import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./Form.module.scss";
import PropTypes from "prop-types";

const DeliveryForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [goods, setGoods] = useState("");
  const [dispatchCity, setDispatchCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "goods":
        setGoods(value);
        break;
      case "dispatchCity":
        setDispatchCity(value);
        break;
      case "destinationCity":
        setDestinationCity(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      goods,
      dispatchCity,
      destinationCity,
      startDate,
      description,
    });
    resetForm();
  };

  const resetForm = () => {
    setGoods("");
    setDispatchCity("");
    setDestinationCity("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Goods to deliver</Form.Label>
          <Form.Select
            name="goods"
            value={goods}
            aria-label="Select goods"
            onChange={handleChange}
          >
            <option>Choose...</option>
            <option value="gadgets">gadgets</option>
            <option value="drinks">drinks</option>
            <option value="clothes">clothes</option>
            <option value="medicines">medicines</option>
            <option value="other">other</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>City of dispatch</Form.Label>
          <Form.Control
            required
            placeholder="Enter a city name..."
            name="dispatchCity"
            value={dispatchCity}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Destination city</Form.Label>
          <Form.Control
            required
            placeholder="Enter a city name..."
            name="destinationCity"
            value={destinationCity}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Date of dispatch</Form.Label>
        <DatePicker
          name="startDate"
          value={startDate}
          selected={startDate}
          isClearable
          placeholderText="Please, select a day"
          clearButtonClassName={s.clearButton}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Parcel description</Form.Label>
        <Form.Control
          placeholder="Add some description..."
          name="description"
          value={description}
          onChange={handleChange}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Button
        className={s.buttonSubmit}
        disabled={!(destinationCity && dispatchCity && goods && startDate)}
        variant="outline-warning"
        type="submit"
        size="lg"
      >
        SUBMIT
      </Button>
    </Form>
  );
};

export default DeliveryForm;

DeliveryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
