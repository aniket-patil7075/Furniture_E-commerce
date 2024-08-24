import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from "react-bootstrap/Card";

function RecentBlog() {
  return (
    <div>
      <div className='d-flex justify-content-between mt-5 px-5'>
        <h1 className='px-3'>Recent Blog</h1>
        <a href='#' className='tex-dark text-decoaration-underline px-3 fw-300'>View all post</a>
      </div>
      <Container>
        <Row className='py-5'>
            <Col className='text-center'>
            <Card style={{ width: "22rem" ,height:"450px" }} className="border-0 bg-body-tertiary">              
                <Card.Img variant="top" src="../post-1.jpg" className='rounded rounded-4'/>              
              <Card.Body>
                <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
                <Card.Text>
                   by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col className='text-center'>
            <Card style={{ width: "22rem" ,height:"450px" }} className="border-0 bg-body-tertiary">              
                <Card.Img variant="top" src="../post-1.jpg" className='rounded rounded-4'/>              
              <Card.Body>
                <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
                <Card.Text>
                   by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col className='text-center'>
            <Card style={{ width: "22rem" ,height:"450px" }} className="border-0 bg-body-tertiary">              
                <Card.Img variant="top" src="../post-1.jpg" className='rounded rounded-4'/>              
              <Card.Body>
                <Card.Title style={{fontSize:"18px"}}>First Time Home Owner Ideas</Card.Title>
                <Card.Text>
                   by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RecentBlog
