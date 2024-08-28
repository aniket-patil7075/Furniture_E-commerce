import React, { useEffect, useState,useReducer, act } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { MdDelete } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  const [cart, setCart] = useState([]);
  const [qty,dispatch]=useReducer(reducer,0)
  function reducer(qty,action){
    switch(action.type){
      case 'changecartqty':
        return(cart.filter((c)=>{
          return(
            c.id===action.payload.id?(c.qty=action.payload.qty):c.qty
          )
        }))
        default:
          return qty
    }
  }

  function getTotal(){
    let total=0;
    cart.map((ct)=>{
      total=total+(ct.qty*ct.price)
    })
    return total
  }

  useEffect(() => {
    fetch("http://localhost:3000/cart").then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2);
        setCart(resp2);
      });
    });
    getTotal()
  }, []);

  function removeCartItem(id)
  {
    fetch(`http://localhost:3000/cart/${id}`,{
      method:"delete"
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
      })
    })
    window.location.reload();
  }

  return (
    <div  className=" ">
      <Container fluid>
        <Row className="main text-white p-3 text-start">
          <Col className="ms-5">
            <h5 className="fw-bold w-75 mt-5 display-5 ms-5 mb-4">Cart</h5>
            {/* <p className='gray fs-6 mt-4 mb-4 ms-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Button variant="warning rounded-pill fw-bold p-3 w-25 ms-4 mb-4" >Shop Now</Button>
          <Button variant="outline-light rounded-pill fw-bold p-3 w-25 ms-4 mb-4">Explore</Button> */}
          </Col>
          <Col>
            {/* <img src='./couch.png' className='img-fluid w-100 mx-auto d-block' /> */}
          </Col>
        </Row>
        <Row>
          <table className="table mt=4 mb-4 " style={{marginLeft:"125px"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>NAME</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.image} alt="" height={80} width={80} />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <Form.Select aria-label="Default select example" value={item.qty} onChange={(e)=>{
                        dispatch({
                          type:"changecartqty",
                          payload:{
                            id:item.id,
                            qty:e.target.value
                          }
                        })
                      }}>
                        {
                          [...Array(item.stock).keys()].map((q)=>{
                            return(
                              <option key={q+1}>{q+1}</option>
                            )
                          })
                        }
                      </Form.Select>
                      
                    </td>
                    <td>{item.qty*item.price}</td>
                    <td>
                      <i class="fa-solid fa-trash" onClick={()=>removeCartItem(item.id)}></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>{cart.length} items : </td>
                <td colSpan={2}>Total Cost : ${getTotal()}</td>
              </tr>
            </tfoot>
          </table>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="mb-5">
        <Button variant="dark rounded-pill fw-bold p-3 mb-4 me-5" style={{width:"150px",marginTop:"20px"}}>Update Cart</Button>
        <Button variant="dark rounded-pill fw-bold p-3 mb-4" style={{width:"200px",marginTop:"20px"}}>Continue Shopping</Button>
        </Row>
        <Row>
          <Col>
           <h3 className="pt-2">Coupon</h3>
           <p className="text-secondary py-2">Enter your coupon code if you have one.</p>
           <input className="form-control  w-75 py-3" type="text" placeholder="Coupon Code"></input>
           <Button variant="dark rounded-pill fw-bold p-3 mb-4" style={{width:"150px",marginTop:"20px"}}>Apply Coupon</Button>
          </Col>
          <Col>
              <h3 className="pt-2">CART TOTALS</h3>
              <hr></hr>
              <div className="d-flex">
                <p className=" pt-3 pb-2 " style={{paddingRight:"150px"}}>Subtotal</p>
                <h6 className="pt-3 pb-2">${getTotal()}</h6>
              </div>
              <div className="d-flex">
                <p className="  pb-2 " style={{paddingRight:"177px"}}>Total</p>
                <h6 className=" pb-2">${getTotal()}</h6>
              </div>
              <Button variant="dark rounded-pill fw-bold p-3 mb-4" onClick={goToCheckout} style={{width:"250px",marginTop:"20px"}}>Proceed to Checkout</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
