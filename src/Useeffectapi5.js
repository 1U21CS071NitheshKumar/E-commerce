import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../src/Use.css"
import { Button, ListGroup, Card, Row, Col, Navbar, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ecommerce1 from "../src/image/ecommerce2.jpg"
import { useNavigate } from 'react-router-dom';
import { usercontext } from './App';
import Swal from 'sweetalert2';

function Useeffectapi5() {
  let [cart, setCart] = useContext(usercontext)
  let [result, setresult] = useState([])
  let { id } = useParams()
  console.log(id)
  let navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setresult(res.data);     
        
      })
  }, [id]);

  let handleapi = (product) => {

    if (!cart.some(item => item.id == product.id)) {
      setCart([...cart, product])
      navigate('/Viewdetails01')
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Already added in cart",
      });
    }
  }

  return (
    <div className='img1'>

      <h1 className='pro'>products Details</h1><br />
      <div>
        <Row className='a1'>
          <Col sm={5}>
            <img src={result.image} className='image' />

          </Col>
        
          <Col sm={7}>
            <p className='d1'>{result.title}.</p>
            <hr></hr>
            <p className='d2'>{result.description}</p>
            <p className='d3'>4.7 <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></p>
            <p className='d3'>List Price: $105.4 <i class="bi bi-exclamation-circle"></i></p>
            <p className='d3'>price: <h className='mo'>${result.price}</h></p>
            <p className='d3'>You Save: <h className='mo'>$32.61 (28%)</h></p>
            <div class="button" >
              <div class="button-wrapper" onClick={() => handleapi(result)}>
                <div class="text" >Add To Cart</div>
                <span class="icon"><i class="bi bi-cart4 "></i>
                </span>
              </div>
            </div>
          </Col>
        
        </Row>
      </div>
    </div>

  )
}

export default Useeffectapi5