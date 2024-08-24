import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WhyChoose() {
  return (
    <div className='bg-body-tertiay mt-5'>
      <Container>
        <Row >
            <Col className='p-4 mt-5'>
                <h1>Why Choose Us</h1>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <table>
                    <tr className=''>
                        <td className='pt-4 pe-2'>
                            <img src='./truck.svg'/>
                            <h6>Fast & Free Shipping</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                        <td className='pt-4 pe-2'>
                            <img src='./bag.svg'/>
                            <h6>Easy to Shop</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='pt-4 pe-2'>
                            <img src='./support.svg'/>
                            <h6>24/7 Support</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                        <td className='pt-4  pe-2'>
                            <img src='./return.svg'/>
                            <h6>Hassle Free Returns</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                    </tr>
                </table>
            </Col>
            <Col>
                <div className='position-relative '>
                    <img src='./dots-yellow.svg' />
                    <div className='position-absolute top-50 end-0'>
                        <img src='./why-choose-us-img.jpg' className='rounded rounded-5 ' style={{ width: "26rem" ,height:"520px" }}/>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyChoose
