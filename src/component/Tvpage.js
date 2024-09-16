import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, ListGroup, Card, Row, Col, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Tvpage() {
    let navigate = useNavigate()

    let [a, seta] = useState([])
    useEffect(() => {
      axios.get("https://fakestoreapi.in/api/products/category?type=tv").then(res => {
        seta(res.data.products)
      })
    }, [])

    let handleapi=(id)=>{
      navigate('/Tvviewdetails/'+id)
      console.log(id)
    }
  return (
    <div>
        <h1 className='t-h1'>Tvpage</h1>
        <div>
        
          <Row className='a1'>
            <Col lg={4}>
              {a.slice(0,1).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='card1' >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(1,2).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='card2'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(2,3).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='card1 card3'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row><br />

          <Row className='a1'>
            <Col lg={4}>
              {a.slice(3,4).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='card1 card4'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(4,5).map(iteam => (
                <Card style={{ width: '18rem',height:'28.1rem' }} className='card1 card5'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(5,6).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='card1 card6'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row><br />

          <Row className='a1'>
            <Col lg={4}>
              {a.slice(6,7).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='card1 card7'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(7,8).map(iteam => (
                <Card style={{ width: '18rem',height:'28.1rem' }} className='card1 card8'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(8,9).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='card1 card9'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row><br />

          <Row className='a1'>
            <Col lg={4}>
              {a.slice(9,10).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='card1 card10'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(10,11).map(iteam => (
                <Card style={{ width: '18rem',height:'28.1rem' }} className='card1 card11'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(11,12).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='card1 card12'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row><br />

          <Row className='a1'>
            <Col lg={4}>
              {a.slice(12,13).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='card1 card13'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(13,14).map(iteam => (
                <Card style={{ width: '18rem',height:'28.1rem' }} className='card1 card14'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(14,15).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='card1 card15'  >
                  <Card.Img variant="top" src={iteam.image} className='i1'/>
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row><br />

          <Row className='a1'>
            <Col lg={4}>
              {a.slice(15,16).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='card1 card16'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row><br />

         

          

         

         




        </div>
    </div>
  )
}

export default Tvpage