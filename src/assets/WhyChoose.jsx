import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WhyChoose() {
  return (
    <div className='bg-body-tertiay'>
      <Container>
        <Row >
            <Col className='p-4'>
                <h1>Why Choose Us</h1>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <table>
                    <tr>
                        <td>
                            <img src=''/>
                            <h6>Fast & Free Shipping</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                        <td>
                            <img src=''/>
                            <h6>Easy to Shop</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src=''/>
                            <h6>24/7 Support</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                        <td>
                            <img src=''/>
                            <h6>Hassle Free Returns</h6>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </td>
                    </tr>
                </table>
            </Col>
            <Col>
                <div>
                    <img src='./dots-yellow.svg' />
                    <div>
                        <img src='./why-choose-us-img.jpg' />
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyChoose
