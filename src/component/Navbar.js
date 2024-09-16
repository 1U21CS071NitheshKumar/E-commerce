import React from 'react'
import {  Container, Navbar ,Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../component/navbar.css'
function Nav() {
    let navigate=useNavigate()



  return (
    <div>
    <Row className='z'>
    <Col lg={12}>
    <Navbar className='nav1'>
    <Container>
      <Navbar.Brand className='nav2'><a href='/'><i class="bi bi-shop" >HOME</i> </a></Navbar.Brand>      
      <button  onClick={()=>navigate('/Loginpage')} className='nav4'><i class="bi bi-person-circle"></i> login </button>
      <div className='nav3' ><i class="bi bi-cart4"onClick={()=>navigate('/Viewdetails01')}>CART</i></div>       
   </Container>
  </Navbar>
  </Col>
  </Row>
  </div>
  )
}

export default Nav

