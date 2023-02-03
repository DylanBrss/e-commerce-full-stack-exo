import React, { useState } from 'react';
import '../styles/login.css';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto texte-center'>
                            <h3 className='fw-bold mb-4 text-center'>Login</h3>

                            <Form className='auth__form'>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </FormGroup>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button type='submit' className='buy__btn auth__btn '>Login</button>
                                </div>
                                <p className='text-center'>
                                    Don't have a account ? <Link to='/signup' >Create an account</Link>
                                </p>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login