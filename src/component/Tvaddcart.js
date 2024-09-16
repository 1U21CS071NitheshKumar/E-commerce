import React, { useContext,useReducer } from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usercontext } from '../App';
let initialstate=0
let reducer=(state,action)=>{
    switch(action){
        case "increment":
            return state +1
        case "Decrement":
            return state -1
        case "reset":
            return initialstate
        default: return "invalid"        
    }
}
function Tvaddcart() {
    let [cart,setCart]=useContext(usercontext)
    let [count,setcount]=useReducer(reducer,initialstate)

  return (
    <div>
    <div>
    {cart.map(item=>(
      <Row className='view1'>
        <Col sm={4}>
        < img className='view2' src={item.image} />
        <h4 className='view5'><i class="bi bi-check-circle-fill view4"></i> ADD TO CART</h4>
        <p className='d3'>price: <h className='mo'>${item.price}</h></p>
        <p>count: {count}</p>
        <button onClick={() => setcount("increment")}>+</button>
        <button disabled={count < 0} onClick={() => setcount("Decrement")}>-</button>
        </Col>
        <Col sm={8} >
        <p className='view3'>{item.title}</p>
        <p >{item.description}</p>
        <p >4.7 <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></p>
        </Col>
        <hr></hr>

      </Row>
        ))}
        </div>
</div>  )
}

export default Tvaddcart