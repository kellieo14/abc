
import React, {useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const login = () => {
        console.log(username, password)
        axios
            .post('http://localhost:8082/login', 
            {
                username: username, 
                password: password
            })
            // .then(props.history.push('/')) 
            .catch(err => console.log('error', err))
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <Container>
            <h1>Login</h1>
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
                <Button onClick={login}>Login</Button>
            </Form>
        </Container>
    )
}

export default Login;