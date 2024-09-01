import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Shipping from './Shipping';
import Craft from './Craft'
import Testimonials from "./Testimonials";
import { useNavigate } from "react-router-dom";

function Services() {
  
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/Shop");
  };
  return (
    <div>
      <Container fluid>
      <Row className='main text-white p-3 text-start'>
        <Col className='ms-5'>
          <h1 className='fw-bold w-75 mt-5 display-5 ms-5 '>Services</h1>
          <p className='gray fs-6 mt-4 mb-4 ms-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-5 mb-4" onClick={goToShop} >Shop Now</Button>
          <Button variant="outline-light rounded-pill fw-bold p-3 w-25 ms-4 mb-4" onClick={goToShop} >Explore</Button>
        </Col>
        <Col>
          <img src='./couch.png' className='img-fluid w-100 mx-auto d-block' />
        </Col>
      </Row>
      </Container>
      <Shipping/>
      <Craft/>
      <Testimonials/>
    </div>
  )
}

export default Services
