import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, ListGroup, Card, Row, Col, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../component/Moblie1.css'
function Mobliepage() {
  let navigate = useNavigate()

  let [a, seta] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products/category?type=mobile").then(res => {
      seta(res.data.products)
    })
  }, [])

  let handleapi=(id)=>{
    navigate('/Moblieviewdetail/'+id)
    console.log(id)
  }
  return (
    <div>
      <h1 className='t-h1'>Mobliepage</h1>
      <div>
        <div >
          <Row className='a1'>
            <Col lg={4}>
              {a.slice(0,1).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='mcard1'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)} >view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(1,2).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard2'  >
                  <Card.Img variant="top" src={iteam.image} className='i1 ' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(2,3).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard3'  >
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
                <Card style={{ width: '18rem',height:'28rem'}} className='mcard1 mcard4'  >
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
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard5'  >
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
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard6'  >
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
                <Card style={{ width: '18rem',height:'28rem'}} className='mcard1 mcard7'  >
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
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard8'  >
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
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard9'  >
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
              {a.slice(11,12).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard10'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(12,13).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem'}} className='mcard1 mcard11'  >
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
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard12'  >
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
              {a.slice(14,15).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard13'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(16,17).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard14'  >
                  <Card.Img variant="top" src={iteam.image} className='i1' />
                  <Card.Body>
                    <Card.Title>{iteam.title}</Card.Title>
                    <Button variant="primary" onClick={()=>handleapi(iteam.id)}>view Details</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              {a.slice(17,18).map(iteam => (
                <Card style={{ width: '18rem',height:'28rem' }} className='mcard1 mcard15'  >
                  <Card.Img variant="top" src={iteam.image} className='i1 ' />
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

    </div>
  )
}

export default Mobliepage