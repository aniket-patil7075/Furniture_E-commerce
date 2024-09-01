import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QRCodeWithCountdown from './QRCodeWithCountdown';
import CreditCard from './CreditCard';
import BillingAddress from './BillingAddress';


function Checkout2() {
    const [selectedOption, setSelectedOption] = useState("QR");

  const renderPaymentOption = () => {
    switch (selectedOption) {
      case "QR":
        return <QRCodeWithCountdown />;
      case "Card":
        return <CreditCard />;
      default:
        return null;
    }
  };
  // const handleClose = () =>setShow(false);
  // const handleshow = () =>setShow(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isChecked,setIsChecked]=useState(false);
  const handleCheckBoxChange = () =>{
    setIsChecked(!isChecked);
  };
  return (
    <div className='text-start bg-light'>
      
      

      <div>
        <Container>

      <Row className='mb-5' style={{paddingBottom:"300px"}}>

        <div className='border border-secondary border-opacity-25 rounded rounded-3 mt-5 p-3 ms-3'>
          <p>Returning custmor?<a href='#'>Click here</a> to login</p>
        </div>
        <Col className='bg-white m-4 p-5'>
          <h3>Billing Details</h3>

          <BillingAddress/>
          <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Create an account?`}
          />

         
        </div>
      ))}
    </Form>
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Ship To A Differnt Address?`}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />

         
        </div>
      ))}
    </Form>
    {isChecked && <BillingAddress/>}
        </Col>
        <Col className='mt-4 '>
        <Row className='bg-white mb-5 p-5'>
          <h3>Coupon Code</h3>
          <p>Enter your coupon code if you have one</p>
          <div className='d-flex'>
        <Form>
          <Form.Control placeholder="Coupon Code" className='h-20'/>
          
          
          <Button variant="dark" className='rounded-pill px-5 py-3 fw-bold' style={{marginBottom:"100px"}} >Apply Coupon</Button>
          </Form>
          </div>

        </Row>
        <h3>Your Order</h3>
        <Row className='mt-5 p-5 bg-white'>
          
        <table className='table mt-4 mb-4 '>
            <thead variant="dark">
              <tr><th>PRODUCT</th><th>Total</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>top Up T-Shirt x 1</td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>Polo Shirt x 1</td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>Cart Subtotal</td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>Order Total</td>
                <td>$250.00</td>
              </tr>
             

            </tbody>
              
            <tfoot>
            </tfoot>
              
        </table>
        <Button variant="dark" className='rounded-pill px-5 py-3 fw-bold me-4' style={{marginBottom:"100px", width:"200px"}} onClick={handleShow}>Place Order</Button>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/* <Row>
          <Col>
          <div className='border border-secondary border-opacity-25'>

           
          </div>
          </Col>
          <Col>

         <div className='border border-secondary border-opacity-25'>
         
         </div>
          </Col>
         </Row> */}
         {/* <QRcode/> */}
         {renderPaymentOption()}
         
         <h5 className="py-3 ps-2">UPI , Cards & More</h5>
                  <Row className=" p-3 border border-secondary border-opacity-25">
                    <div className="p-3 bg-light border border-secondary border-opacity-25" onClick={() => setSelectedOption("QR")}>
                      <a href="">UPI / QR</a>
                    </div>
                    <div className="p-3 bg-light border border-secondary border-opacity-25" onClick={() => setSelectedOption("Card")}>
                    <a href="">Cards</a>
                    </div>
                    <div className="p-3 bg-light border border-secondary border-opacity-25">
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
      <div></div>
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Checkout2
