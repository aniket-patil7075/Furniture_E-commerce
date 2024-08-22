import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Craft() {
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center justify-content-evenly py-5">
          <div className="p-2 mt-5 text-start">
            <h1>Crafted with excellent material.</h1>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Button variant="dark" className="rounded-pill fw-bold p-3 w-50">
              Explore
            </Button>
          </div>

          <div className="p-2 craft text-center">
            <Card style={{ width: "16rem" }} className="border-0">
              <div className="img-hov">
                <Card.Img variant="top" src="./product-1.png" />
              </div>
              <Card.Body>
                <Card.Title>Nordic Chair</Card.Title>
                <Card.Text>
                  <h4>$ 50.00</h4>
                </Card.Text>

                <Button variant="dark" className="rounded-circle fw-bold btn1">
                  +
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="p-2 craft text-center">
            <Card style={{ width: "16rem" }} className="border-0">
              <div className="img-hov">
                <Card.Img variant="top" src="./product-2.png" />
              </div>
              <Card.Body>
                <Card.Title>Kruzo Aero Chair</Card.Title>
                <Card.Text>
                  <h4>$ 50.00</h4>
                </Card.Text>
                <Button variant="dark" className="rounded-circle fw-bold btn1">
                  +
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="p-2 craft text-center">
            <Card style={{ width: "16rem" }} className="border-0">
              <div className="img-hov">
                <Card.Img variant="top" src="./product-3.png" />
              </div>
              <Card.Body>
                <Card.Title>Ergonomic Chair</Card.Title>
                <Card.Text>
                  <h4>$ 50.00</h4>
                </Card.Text>
                <Button variant="dark" className="rounded-circle fw-bold btn1">
                  +
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Craft;
