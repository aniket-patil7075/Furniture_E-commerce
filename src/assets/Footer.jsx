import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div>
      <div className="position-relative mt-5 text-start px-5 ms-5 mb-5 ">
        <div className="position-absolute top-5 end-0 translate-middle">
          <img src="../sofa.png" alt="" height={300} width={350}/>
        </div>
        <h3>
          <i class="fa-regular fa-envelope text-secondary"></i>  Subscribe to
          Newsletter
        </h3>
        <Form>
          <Row>
            <Col md={3}>
                <Form.Control type="text" placeholder="Enter your name" className="p-3"/>
            </Col>
            <Col md={3}>
                <Form.Control type="text" placeholder="Enter your email" className="p-3"/>
            </Col>
            <Col>
                <Button variant="success" className="px-4 p-2">
                    <i class="fa-brands fa-telegram fs-4 p-2"></i>
                </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Container>
        <a href="#">
          <h1>Furni.</h1>
        </a>
        <Row>
          <Col>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="d-flex gap-3">
              <div className="p-2 rounded-circle bg-light px-3">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="p-2 rounded-circle bg-light px-3">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="p-2 rounded-circle bg-light px-3">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="p-2 rounded-circle bg-light px-3">
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  About us
                </a>
              </li>
              <li className="mt-2">
                <a href="#">Services</a>
              </li>
              <li className="mt-2">
                <a href="#">Blog</a>
              </li>
              <li className="mt-2">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Support</a>
              </li>
              <li className="mt-2">
                <a href="#">Knowledge Base</a>
              </li>
              <li className="mt-2">
                <a href="#">Live chat</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Jobs</a>
              </li>
              <li className="mt-2">
                <a href="#">Our Team</a>
              </li>
              <li className="mt-2">
                <a href="#">Leadership</a>
              </li>
              <li className="mt-2">
                <a href="#">privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Nordiac Chair</a>
              </li>
              <li className="mt-2">
                <a href="#">Kruzo aero Chair</a>
              </li>
              <li className="mt-2">
                <a href="#">Ergonomic Chair</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="d-flex">
          <div className="p-2 flex-grow-1">
            <ul className="list-unstyled">
              <li>
                Copyright ©2024. All Rights Reserved. — Designed with love by
                Untree.co
              </li>
              <li>Distributed By ThemeWagon</li>
            </ul>
          </div>
          <div className="p-2">
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="p-2">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
