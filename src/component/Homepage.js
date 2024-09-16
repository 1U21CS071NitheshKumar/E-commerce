import React, { useState, useEffect,useCallback, useMemo} from 'react'
import { button, Button, ListGroup, Card, Row, Col, Carousel, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Home.css'
import home1 from '../image/home1.png'
import { useNavigate } from 'react-router-dom';
import moblie from '../image/moblie.png'
import tv from '../image/tv.png'
import slide1 from '../image/slide1.jpg'
import slide2 from '../image/slide2.jpg'
import slide3 from '../image/slide3.jpg'
import logo1 from '../image/login1.jpeg'

function Homepage() {
    let navigate = useNavigate()

    return (
        <div className='home1'>
            <Row className='z'>
                <Col sm={5}>
                    <a href='/'><img src={logo1} className='home2' /> </a>
                    <p className='home3' href='/'>SHOPING SOLUTION</p>
                </Col>
                <Col sm={3}>
                    <NavDropdown title="PRODUCT" className='home6'>
                        <NavDropdown.Item onClick={()=>navigate('/Useeffectapi4')}>Top Offer</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>navigate('/Mobliepage')}>moblie</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>navigate('/Tvpage')}>TV</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Col>
                <Col sm={4}>
                <Card className='home7'>
                    <p className='home8'>search<i class="bi bi-search home9"></i></p>
                </Card>
                </Col>
            </Row >
            <div className='z'>
                <Row className='z'>
                    <Col>
                        <Carousel className='home5'>
                            <Carousel.Item interval={1000}>
                                <img src={slide1} className='home4' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={slide2} className='home4' />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img src={slide3} className='home4' />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <h1 className='home16'>Discover Our Products</h1>
                <Row className='z'>
                    <Col>
                    <a onClick={()=>navigate('/Useeffectapi4')}><img src={home1} className='home10'/></a>
                    <button className='home13'onClick={()=>navigate('/Useeffectapi4')}>Top Offer</button>
                    </Col>
                    <Col>
                    <a onClick={()=>navigate('/Mobliepage')}><img src={moblie} className='home11'/></a>
                    <button className='home14' onClick={()=>navigate('/Mobliepage')}>Moblie</button>
                    </Col>
                    <Col>
                    <a onClick={()=>navigate('/Tvpage')}><img src={tv}  className='home12'/></a>
                    <button className='home15'>TV</button>
                    </Col>
                </Row>



            </div>
        </div>
    )
}

export default Homepage