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
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/Shop");
  };
  return (
    <div className='bg-light'>
      <Container fluid>
      <Row className='main text-white p-3 text-start'>
        <Col className='ms-5'>
          <h1 className='fw-bold w-75 mt-5 display-5 ms-5 '>Contact</h1>
          <p className='gray fs-6 mt-4 mb-4 ms-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-5 mb-4" onClick={goToShop}>Shop Now</Button>
          <Button variant="outline-light rounded-pill fw-bold p-3 w-25 ms-4 mb-4" onClick={goToShop} >Explore</Button>
        </Col>
        <Col>
          <img src='./couch.png' className='img-fluid w-100 mx-auto d-block' />
        </Col>
      </Row>
      </Container>
      <Container fluid className='ng-light ' >
  <Row className='my-5 align-items-center '  style={{paddingLeft:"200px" , paddingRight:"150px"}}>
    <Col md={1}>
      <div className='bg-success text-white h-75 w-75 py-2 rounded rounded-3'>
      <IoLocationSharp className=' ps-3 pe-2 fs-1'/>
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
    <MdEmail className='pe-2 ps-3 fs-1'/>
      </div>
    </Col>
    <Col md={3}>
      <p className='text-start'>info@yourdomain.com</p>
    </Col>
    <Col md={1}>
    <div className='bg-success text-white h-75 w-75 p-2 rounded rounded-3'>
    <FaPhoneAlt className='ps-1 fs-1 pe-3'  style={{paddingTop:"10", paddingBottom:"10"}}/>
      </div>
    </Col>
    <Col md={3}>
      <p className='text-start'>+1 294 3925 3939</p>
    </Col>
  </Row>
<Form >
<Row className="mb-3 text-center  " style={{paddingLeft:"150px" , paddingRight:"150px"}}>
        <Form.Group as={Col} controlId="formGridfname" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" className='bg-secondary bg-opacity-10'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" className='bg-secondary bg-opacity-10' />
        </Form.Group>
      </Row>
     <Row  className="mb-3 text-center"  style={{paddingLeft:"150px" , paddingRight:"150px"}}>
       <Form.Group className=" text-start" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  className='bg-secondary bg-opacity-10'/>
      </Form.Group>
     </Row>
      <Row  className="mb-3 text-center " style={{paddingLeft:"150px" , paddingRight:"150px"}} >
      <Form.Group className=" text-start" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5}  className='bg-secondary bg-opacity-10' />
      </Form.Group>
      </Row>
      <Form.Group className=' mx-5 text-start my-5' style={{paddingLeft:"100px"}}>
      <Button variant="dark" type='submit' className='mb-5 rounded-pill px-4'>Send Message</Button>
      </Form.Group>
</Form>

</Container>
    </div>
  )
}

export default ContactUs
