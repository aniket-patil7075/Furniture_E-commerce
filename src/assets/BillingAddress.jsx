import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BillingAddress() {
  return (
    <div>
      {/* bg-light  mt-3 me-3 pt-5 pb-1 px-4 */}
      <div className="px-4">
        <Form.Label>Country</Form.Label>
        <Form.Select
          aria-label="Default select example"
          className="mb-3 py-3 border border-secondary border-opacity-25 rounded rounded-4"
        >
          <option>Select a Country</option>
          <option value="1">India</option>
          <option value="2">China</option>
          <option value="3">Pakistan</option>
        </Form.Select>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder=""
              className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder=""
              className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            placeholder=""
            className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Street Address"
            className="py-3 mb-2 border border-secondary border-opacity-25  rounded rounded-4"
          />
          <Form.Control
            placeholder="Appartment , Unit etc. (Optional)"
            className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>State / Country</Form.Label>
            <Form.Control
              placeholder=""
              className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Post / Zip</Form.Label>
            <Form.Control
              placeholder=""
              className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              placeholder=""
              className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              className="py-3 border border-secondary border-opacity-25  rounded rounded-4"
            />
          </Form.Group>
          
        </Row>
      </div>
    </div>
  );
}

export default BillingAddress;
