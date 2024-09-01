import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Interior() {
    const navigate = useNavigate();

    const goToShop = () => {
      navigate("/Shop");
    };
  return (
    <div className='bg-body-tertiary mt-5'>
      <Container className='py-5'>
        <Row className='text-start'>
            <Col >
                <div className='position-relative'>
                    <img src='./dots-green.svg' style={{marginLeft:"-100px"}}/>
                    <div className='position-absolute top-50 start-50 translate-middle-x'>
                    <div className='d-flex'>
                        <img src='./img-grid-1.jpg' className='rounded rounded-5 ' height={450} width={350}/>
                        <img src='./img-grid-2.jpg' className='rounded rounded-5 ms-3' height={200} width={200}/>
                    </div>
                    <img src='./img-grid-3.jpg' className='rounded rounded-5 ' height={320} width={280} style={{marginTop:"-240px", marginLeft:"280px"}}/>
                    {/* <div className='position-absolute top-100 end-0'>
                        <img src='./img-grid-3.jpg' className='rounded rounded-5 ' style={{ width: "20rem" ,height:"400px" }}/>
                    </div> */}
                    </div>
                </div>
            </Col>
            <Col className='ms-5 mt-5'>
                <h1>We Help You Make Modern Interior Design</h1>
                <p className='pt-3'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                <table>
                    <tr>
                        <td  className='pt-3 pe-3'>
                            <i className="fa-solid fa-circle-dot pe-1"></i>
                            Donec vitae odio quis nisl dapibus malesuada
                        </td>
                        <td className='pt-3 pe-3'>
                            <i className="fa-solid fa-circle-dot pe-1"></i>
                            Donec vitae odio quis nisl dapibus malesuada    
                        </td>
                    </tr>
                    <tr>
                        <td className='pt-3 pe-3'>
                            <i className="fa-solid fa-circle-dot pe-1"></i>
                            Donec vitae odio quis nisl dapibus malesuada
                        </td>
                        <td className='pt-3 pe-3'>
                            <i className="fa-solid fa-circle-dot pe-1"></i>
                            Donec vitae odio quis nisl dapibus malesuada
                        </td>
                    </tr>
                </table>
                <Button variant="dark" className="rounded-pill fw-bold p-3 w-25 mt-5" onClick={goToShop}>
              Explore
            </Button>
            </Col>
        </Row>
        <Row className='py-5'>
            <div className='d-flex' style={{marginTop:"200px"}}>
            <div className='d-flex p-1'>
                <img src="./product-1.png" height={150}/>
                <div>
                    <h6>Nordiac Chair</h6>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <u><p className=''>Read More</p></u>
                </div>
            </div>
            <div className='d-flex p-1'>
                <img src="./product-2.png" height={150}/>
                <div>
                    <h6>Kruzo Aero Chair</h6>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <u><p className=''>Read More</p></u>
                </div>
            </div>
            <div className='d-flex p-1'>
                <img src="./product-3.png" height={150}/>
                <div>
                    <h6>Erogonomic Chair</h6>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <u><p className=''>Read More</p></u>
                </div>
            </div>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Interior
