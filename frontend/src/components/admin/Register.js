
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Register = (props) => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const register = () => {
        axios
            .post(`http://localhost:8082/register`, 
                {
                    username: username, 
                    password: password
                }
            )
            .then(props.history.push('/')) 
            .catch(err => console.log('error', err))
    };

    return (
        <Container>
            <h1>Register</h1>
            <Form>
                <Form.Group controlId='name'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleUsername} name='username' type='text' placeholder='Username' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type='password' placeholder='Password' />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder="Confirm Password" />
                </Form.Group> */}
                <Button onClick={register}>Register</Button>
            </Form>

        </Container>
    )
}

export default Register;