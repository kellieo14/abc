import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Homepage = () => {

    return (
        <Container>
            <h1>Homepage</h1>
            <Link to={'/team'}><Button>Team</Button></Link>
        </Container>
    )
}

export default Homepage;
