import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Button, ListGroup, Card, Row, Col, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './component/useeffectapi4.css'

function Useeffectapi4() {
    const [result,setresult]=useState([])
let navigate=useNavigate()
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
        .then(res => {
          setresult(res.data);
          console.log(res.data);
        })
       
    }, []); 
    let handleapi=(id)=>{
      navigate('/Useeffectapi5/'+id)
      console.log(id)
    }
  return (
    <div>
      
        
    <div className='img1'>
         <div className='bor'>
      <h1>E-Commerce products</h1><br/>

      </div>
        <div>
            <Row className='a1'>
                <Col lg={4}>
            {result.slice(0,1).map(iteam=>(
        <Card style={{ width: '18rem' }} className='ocard1'  >
      <Card.Img variant="top" src={iteam.image} className='i1'/>
      <Card.Body>
        <Card.Title>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu1' onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))} 
    </Col>
    <Col lg={4}>{result.slice(1,2).map(iteam=>(
        <Card style={{ width: '20rem' }}className='ocard1 ocard2'>
      <Card.Img variant="top" src={iteam.image} className='i2' />
      <Card.Body>
        <Card.Title>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu2'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
</Col>
    <Col lg={4}>{result.slice(2,3).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem'}}className='ocard1 ocard3 '>
      <Card.Img variant="top" src={iteam.image} className='i3'  />
      <Card.Body>
        <Card.Title className='t1'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu3' onClick={()=>handleapi(iteam.id)}>View Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>

    </Row><br/>
    <Row className='a1'>
                <Col lg={4}>
            {result.slice(6,7).map(iteam=>(
        <Card style={{ width: '18rem', height:'24rem' }}className='ocard1 ocard4'>
      <Card.Img variant="top" src={iteam.image} className='i1'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu4'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>{result.slice(7,8).map(iteam=>(
        <Card style={{ width: '20rem',height:'24.1rem' }}className='ocard1 ocard5'>
      <Card.Img variant="top" src={iteam.image} className='i4' />
      <Card.Body>
        <Card.Title>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu5'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
</Col>
    <Col lg={4}>{result.slice(8,9).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem'}}className='ocard1 ocard6'>
      <Card.Img variant="top" src={iteam.image} className='i6'  />
      <Card.Body>
        <Card.Title >{iteam.title}</Card.Title>
        <Button variant="primary" className='bu6' onClick={()=>handleapi(iteam.id)}>View click</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>

    </Row><br/>
    <Row className='a1'>
                <Col lg={4}>
            {result.slice(9,10).map(iteam=>(
        <Card style={{ width: '18rem', height:'24rem' }}className='ocard1 ocard7'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu4'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>{result.slice(10,11).map(iteam=>(
        <Card style={{ width: '20rem',height:'24.1rem' }}className='ocard1 ocard8'>
      <Card.Img variant="top" src={iteam.image} className='i7' />
      <Card.Body>
        <Card.Title>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu5'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
</Col>
    <Col lg={4}>{result.slice(11,12).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem'}}className='ocard1 ocard9'>
      <Card.Img variant="top" src={iteam.image} className='i6'  />
      <Card.Body>
        <Card.Title >{iteam.title}</Card.Title>
        <Button variant="primary" className='bu7' onClick={()=>handleapi(iteam.id)}>View click</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    </Row><br/>
    <Row className='a1'>
    <Col lg={4}>
            {result.slice(12,13).map(iteam=>(
        <Card style={{ width: '18rem', height:'24rem' }}className='ocard1 ocard10'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu4'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>
            {result.slice(13,14).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem' }}className='ocard1 ocard11'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu8'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>
            {result.slice(14,15).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem' }}className='ocard1 ocard12'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu9'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    </Row><br/>
    <Row className='a1'>
    <Col lg={4}>
            {result.slice(15,16).map(iteam=>(
        <Card style={{ width: '18rem', height:'24rem' }}className='ocard1 ocard13'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu10'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>
            {result.slice(16,17).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem' }}className='ocard1 ocard14'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu11'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>
            {result.slice(17,18).map(iteam=>(
        <Card style={{ width: '20rem', height:'24rem' }}className='ocard1 ocard15'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu12'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    </Row>
    <Row className='a1'>
    <Col lg={4}>
            {result.slice(18,19).map(iteam=>(
        <Card style={{ width: '18rem', height:'24rem' }}className='ocard1 ocard16'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu13'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    <Col lg={4}>
            {result.slice(19,20).map(iteam=>(
        <Card style={{ width: '18rem', height:'24rem' }}className='ocard1 ocard17'>
      <Card.Img variant="top" src={iteam.image} className='i7'/>
      <Card.Body>
        <Card.Title className='t2'>{iteam.title}</Card.Title>
        <Button variant="primary" className='bu14'onClick={()=>handleapi(iteam.id)}>view Details</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
    </Row>
    </div>
    </div>
    </div>
  )
}

export default Useeffectapi4