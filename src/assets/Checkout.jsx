import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BillingAddress from "./BillingAddress";
import Accordion from "react-bootstrap/Accordion";

function Checkout() {
  return (
    <div className="bg-secondary bg-opacity-25 ">
      <Container fluid>
        <Row className="main text-white p-3 text-start">
          <Col className="ms-5">
            <h1 className="fw-bold w-75 mt-5 display-5 ms-5 ">Checkout</h1>
            <p className="gray fs-6 mt-4 mb-4 ms-5">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-5 mb-4">
              Shop Now
            </Button>
            <Button variant="outline-light rounded-pill fw-bold p-3 w-25 ms-4 mb-4">
              Explore
            </Button>
          </Col>
          <Col>
            <img
              src="./couch.png"
              className="img-fluid w-100 mx-auto d-block"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <div className="bg-light p-3 border border-secondary border-opacity-25 rounded rounded-3">
            <p>
              Returning customer? <a href="#">Click here</a> to login
            </p>
          </div>
          <Col className="my-5">
            <h3>Billing Details</h3>
            <BillingAddress />
          </Col>
          <Col className="my-5">
            <h3>Coupon Code</h3>
            <Row className="bg-light border border-secondary border-opacity-25 mt-3 me-3 py-5 px-4">
              <p className="text-secondary py-2">
                Enter your coupon code if you have one.
              </p>
              <input
                className="form-control  w-75 py-3"
                type="text"
                placeholder="Coupon Code"
              ></input>
              <Button
                variant="dark rounded-pill fw-bold p-3 mb-4"
                style={{ width: "150px", marginTop: "20px" }}
              >
                Apply Coupon
              </Button>
            </Row>
            <h3 className="mt-5 mb-3">Your Order</h3>
            <Row className="bg-light p-3 border border-secondary border-opacity-25 rounded rounded-3">
              <div className="">
                <table
                  className="table bg-light mt=4 mb-4 "
                  style={{ marginLeft: "" }}
                >
                  <thead>
                    <tr>
                      <th className="py-3">Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3">Top Up T-Shirt x 1</td>
                      <td>$250.00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Polo Shirt x 1</td>
                      <td>$250.00</td>
                    </tr>
                    <tr>
                      <td className="fw-bold py-3">Cart Subtotal</td>
                      <td className="fw-bold">$250.00</td>
                    </tr>
                    <tr>
                      <td className="fw-bold py-3">Order Total</td>
                      <td className="fw-bold">$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="my-3">
                  <Accordion.Header className="bg-light">
                    Direct bank transfer
                  </Accordion.Header>
                  <Accordion.Body>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="my-3">
                  <Accordion.Header className="bg-light">
                    Cheque Payment
                  </Accordion.Header>
                  <Accordion.Body>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="my-3">
                  <Accordion.Header className="bg-light">
                    Paypal
                  </Accordion.Header>
                  <Accordion.Body>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Button
                variant="dark rounded-pill fw-bold ms-3 p-3 mb-4"
                style={{ width: "150px", marginTop: "20px" }}
              >
                Place Order
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
