import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BillingAddress from "./BillingAddress";
import { useState,useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import QRCodeWithCountdown from "./QRCodeWithCountdown";
import CreditCard from "./CreditCard";
import COD from "./COD";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const getTotal = location.state?.total;
  console.log("Total in checkout : ", getTotal);

  const [cart, setCart] = useState([]);
  const [qty,dispatch]=useReducer(reducer,0)
  function reducer(qty,action){
    switch(action.type){
      case 'changecartqty':
        return(cart.filter((c)=>{
          return(
            c.id===action.payload.id?(c.qty=action.payload.qty):c.qty
          )
        }))
        default:
          return qty
    }
  }
  useEffect(() => {
    fetch("http://localhost:3000/cart").then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);
        setCart(resp2);
      });
    });
  }, []);

  const [selectedOption, setSelectedOption] = useState("QR");

  const renderPaymentOption = () => {
    switch (selectedOption) {
      case "QR":
        return <QRCodeWithCountdown />;
      case "Card":
        return <CreditCard />;
      case "COD":
        return <COD />;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log("Selected option:", selectedOption);
  }, [selectedOption]);

  const navigate = useNavigate();

  const goToQRcode = () => {
    navigate("/qrcode");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
            <div className="bg-light border border-secondary border-opacity-25 mt-3 me-3 pt-5 pb-1 px-4">
              <BillingAddress />
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-2 px-4">
                    <Form.Check // prettier-ignore
                      className="pt-5"
                      type={type}
                      id={`default-${type}`}
                      label={`Create an account?`}
                    />
                  </div>
                ))}
              </Form>

              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-5 px-4">
                    <Form.Check // prettier-ignore
                      className="pt-1 "
                      type={type}
                      id={`default-${type}`}
                      label={`Ship to a different address?`}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                ))}
              </Form>
              {isChecked && <BillingAddress />}
            </div>
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
                    {cart.map((item, index) => {
                      return (
                        <tr>
                          <td className="py-3">{item.name}</td>
                          <td>${item.qty * item.price}</td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td className="fw-bold py-3">Cart Subtotal</td>
                      <td className="fw-bold">${getTotal}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold py-3">Order Total</td>
                      <td className="fw-bold">${getTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Button
                variant="dark rounded-pill fw-bold ms-3 p-3 mb-4"
                style={{ width: "150px", marginTop: "20px" }}
                // onClick={goToQRcode}
                onClick={handleShow}
              >
                Place Order
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                className="bg-secondary bg-opacity-25"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Payment Option</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary bg-opacity-25">
                  <Row className="p-3 bg-light border border-secondary border-opacity-25">
                    {renderPaymentOption()}
                  </Row>
                  <h5 className="py-3 ps-2">UPI , Cards & More</h5>
                  <Row className=" p-3 border border-secondary border-opacity-25">
                    <div
                      className="p-3 bg-light border border-secondary border-opacity-25"
                      onClick={() => setSelectedOption("QR")}
                    >
                      <a href="">UPI / QR</a>
                    </div>
                    <div
                      className="p-3 bg-light border border-secondary border-opacity-25"
                      onClick={() => setSelectedOption("Card")}
                    >
                      <a href="">Cards</a>
                    </div>
                    <div
                      className="p-3 bg-light border border-secondary border-opacity-25"
                      onClick={() => setSelectedOption("COD")}
                    >
                      <a href="">Cash on Delivery</a>
                    </div>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
