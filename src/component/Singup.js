import React, { useState } from 'react'
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/sing.css'
import cart from '../image/cart.png'
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';

function Singup() {
  let [a, seta] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: ""
  });

  let schema = yup.object().shape({
    username: yup.string().required("Username is must"),
    email: yup.string().email("Enter valid email").required("Email is must"),
    password: yup.string().required("password is must"),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], "password must match").required("cofirmpassword is must"),
    phone: yup.string().matches(/\d{10}/, "Enter 10 digit number only")
      .required("phone is must")

  });

  let handleInput = (e) => {
    seta({ ...a, [e.target.name]: e.target.value });
  };

  let handleSubmit = (use) => {
    console.log(use);
  };

  return (
    <div>
      <div>
        <div>
          <Card className='sing1'>
            <Row>
              <Col sm={5} className='sing2'>
                <h1 className='sing3'>Looks like<br />you're new<br /><p />here!</h1>
                <p className='sing4'>Sign up with your mobile<br />number to get started</p>
                <p><img src={cart} className='sing5' /></p>
              </Col>
              <Col sm={7}>
                <Formik
                  initialValues={a}
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit, handleChange, }) => (
                    <Form onSubmit={handleSubmit} className='sing6'>
                        <Form.Label>Username</Form.Label>
                        <Col>
                          <Form.Control
                            type="text"
                            name="username"
                            value={a.username}
                            onChange={(e) => { handleInput(e); handleChange(e); }}
                          />
                          <Form.Control.Feedback type="invalid">
                          </Form.Control.Feedback>
                          <ErrorMessage name="username" component="div" className='text-danger' />
                        </Col>

                        <Form.Label>Email</Form.Label>
                        <Col>
                          <Form.Control
                            type="email"
                            name="email"
                            value={a.email}
                            onChange={(e) => { handleInput(e); handleChange(e); }}
                          />
                          <Form.Control.Feedback type="invalid">
                          </Form.Control.Feedback>
                          <ErrorMessage name="email" component="div" className='text-danger' />

                        </Col>

                        <Form.Label>Password</Form.Label>
                        <Col>
                          <Form.Control
                            type="password"
                            name="password"
                            value={a.password}
                            onChange={(e) => { handleInput(e); handleChange(e); }}
                          />
                          <ErrorMessage name="password" component="div" className='text-danger' />

                        </Col>
                        <Form.Label>confirmpassword</Form.Label>
                        <Col>
                          <Form.Control
                            type="password"
                            name="confirmpassword"
                            value={a.changepassword}
                            onChange={(e) => { handleInput(e); handleChange(e); }}
                          />
                          <ErrorMessage name="confirmpassword" component="div" className='text-danger' />

                        </Col>
                        <Form.Label>phone</Form.Label>
                        <Col>
                          <Form.Control
                            type="phone"
                            name="phone"
                            value={a.phone}
                            onChange={(e) => { handleInput(e); handleChange(e); }}
                          />
                        </Col>
                        <ErrorMessage name="phone" component="div" className='text-danger' />


                      <button variant="primary"  className='sing7' type="submit">Sing Up</button>
                    </Form>
                  )}
                </Formik>

              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Singup