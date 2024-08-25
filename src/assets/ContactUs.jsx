import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsAlarmFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';

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
      <Container fluid className='bg-light'>
  <Row className='m-5 align-items-center px-5'>
    <Col md={1}>
      <div className='bg-success text-white h-75 w-75 py-2 rounded rounded-3'>
      <IoLocationSharp className=' ps-3 fs-1'/>
      </div>
    </Col>
    <Col md={3}>
    <ul className='list-unstyled text-start'>
      <li>43 Raymouth Rd.</li>
      <li>Baltemoer, London</li>
      <li>3910</li>
    </ul>
    </Col>
    <Col md={1}>
    <div className='bg-success text-white h-75 w-75 py-2 rounded rounded-3'>
    <MdEmail className=' ps-3 fs-1'/>
      </div>
    </Col>
    <Col md={3}>
      <p className='text-start'>info@yourdomain.com</p>
    </Col>
    <Col md={1}>
    <div className='bg-success text-white h-75 w-75 p-2 rounded rounded-3'>
    <FaPhoneAlt className='ps-1 fs-1' style={{paddingTop:"10", paddingBottom:"10"}}/>
      </div>
    </Col>
    <Col md={3}>
      <p className='text-start'>+1 294 3925 3939</p>
    </Col>
  </Row>
<Form>
<Row className="mb-3 text-start px-5 mx-5">
        <Form.Group as={Col} controlId="formGridfname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 mx-5 px-5 text-start" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3 mx-5 px-5 text-start" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group className='px-5 mx-5 text-start my-5'>
      <Button variant="dark" type='submit' className='mb-5 rounded-pill px-4'>Send Message</Button>
      </Form.Group>
</Form>

</Container>
    </div>
  )
}

export default ContactUs
