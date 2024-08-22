import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ContactUs() {
  return (
    <div>
      <Container fluid>
      <Row className='main text-white p-3 text-start'>
        <Col className='ms-5'>
          <h1 className='fw-bold w-75 mt-5 display-5 ms-4 '>Contact</h1>
          <p className='gray fs-6 mt-4 mb-4 ms-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-4 mb-4" >Shop Now</Button>
          <Button variant="outline-light rounded-pill fw-bold p-3 w-25 ms-4 mb-4">Explore</Button>
        </Col>
        <Col>
          <img src='./couch.png' className='img-fluid w-100 mx-auto d-block' />
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default ContactUs
