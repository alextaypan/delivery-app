import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { City, Country } from "country-state-city";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from "nanoid";
import s from "./Form.module.scss";

const DeliveryForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  // const cities = City.getAllCities();
  const countries = Country.getAllCountries();

  // console.log(cities);
  // console.log(countries);
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridGoods">
          <Form.Label>Goods to deliver</Form.Label>
          <Form.Select aria-label="Select goods">
            <option>Choose...</option>
            <option value="1">gadgets</option>
            <option value="2">drinks</option>
            <option value="3">clothes</option>
            <option value="4">medicines</option>
            <option value="5">other</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City of dispatch</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Destination Country</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            {countries.map(({ name }) => (
              <option key={nanoid()}>{name}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Date of dispatch</Form.Label>
        <DatePicker
          selected={startDate}
          isClearable
          placeholderText="Please, select a day"
          clearButtonClassName={s.clearButton}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Parcel description">
        <Form.Label>Parcel description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="outline-warning" type="submit">
        SUBMIT
      </Button>
    </Form>
  );
};

export default DeliveryForm;
