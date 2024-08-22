import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [cart,setCart]=useState([])
  // const [clen,setClen]=useState(0)

  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setCart(resp2)
      })
    })
  },[])

  return (
    <div>
      
      <Navbar className='main' data-bs-theme="secondary">
        <Container>
          {/* <Navbar.Brand  href="/" className='text-white fw-bold fs-2'>Furni<span className='text-secondary'>.</span></Navbar.Brand> */}
          <Link to="/" className='text-white fw-bold fs-2'>Furni<span className='text-secondary'>.</span></Link>
          <Nav className="">
            <Link  to="/" className='gray'>Home</Link>
            <Link  to="/Shop" className='gray'>Shop</Link>
            <Link  to="/AboutUs" className='gray'>About us</Link>
            <Link  to="/Services" className='gray'>Services</Link>
            <Link  to="/Blog" className='gray'>Blog</Link>
            <Link  to="/ContactUs" className='gray'>Contact us</Link>
            <Link  to="/User" className='gray'> <i class="fa-regular fa-user"></i></Link>
            <Link  to="/Cart" className='gray'> <i class="fa-solid fa-cart-shopping"></i> <sup>{cart.length}</sup> </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
