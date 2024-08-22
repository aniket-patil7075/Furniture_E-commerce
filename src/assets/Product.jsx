import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function Product() {
  const [chairs,setChairs]=useState([])
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/chairs").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setChairs(resp2)
      })
    })
  },[])

  function getcart(){
    fetch("http://localhost:3000/cart").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setCart(resp2)
      })
    })
  }

  function addtocart(item){
    if(cart.find((c)=>c.id===item.id)){
      alert(item.name+" is already added in the cart")
    }
    else{
      fetch("http://localhost:3000/cart",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(item)
      }).then((resp1)=>{
        resp1.json().then((resp2)=>{
          getcart()
          window.location.reload()
        })
      })
    }
  }

  return (
    <div className='bg-body-tertiary pt-5'>
      <Container>
        <div className='row row-cols-1 row-cols-md-4 mb-4 g-4 pt-5'>
            {
                chairs.map((item,index)=>{
                    return(
                        <div className='chair bg-body-tertiary text-center' key={index}>
                            <Card style={{ width: '18rem' }} className='border-0 bg-body-tertiary pb-5'>
                            <div className='img-hov'>
                                <Card.Img variant="top" src={item.image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    $ {item.price}.00
                                </Card.Text>
                                <Button variant="dark" className='rounded-circle fw-bold btn1' onClick={()=>addtocart(item)}>+</Button>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
      </Container>
    </div>
  )
}

export default Product
