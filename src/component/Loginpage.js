import React, { useState } from 'react'
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Login.css'
import '../image/login1.jpeg'
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  let navigate = useNavigate()
  let [a, seta] = useState({
    email: "",
    password: "",
  });

  let schema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Email is must"),
    password: yup.string().required("password is must"),

  });

  let handleInput = (e) => {
    seta({ ...a, [e.target.name]: e.target.value });
  };

  let handleSubmit = (use) => {
    console.log(use);
  }
  return (
    <div >

      <div>
        <Card className='login1'>
          <Row >
            <Col sm={5} className='login2'>
              <h1 className='login3'>Looks like<br />you're new<br /><p />here!</h1>
              <p className='login4'>Login with your mobile<br />number to get started</p>
            </Col>
            <Col sm={7}>
              <Formik
                initialValues={a}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, }) => (
                  <Form onSubmit={handleSubmit}>

                    <Col>
                      <Form.Control className='login6'
                        type="email"
                        name="email"
                        placeholder='Email address'
                        value={a.email}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <Form.Control.Feedback type="invalid">
                      </Form.Control.Feedback>
                      <ErrorMessage name="email" component="div" className='text-danger' />

                    </Col>

                    <Col>
                      <Form.Control className='login7'
                        type="password"
                        name="password"
                        placeholder='password'
                        value={a.password}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <ErrorMessage name="password" component="div" className='text-danger' />

                    </Col>
                    <button variant="primary" type="submit" className='login8'>Log in</button>
                    <button onClick={() => navigate('/singup')} className='login9'> Singup </button>

                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Card>


      </div>

    </div>


  )
}

export default Loginpage