import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <p>Edit:</p>
            <ul>
                <li>About Us</li>
                <li>Team</li>
                <li>Admissions</li>
                <li>Term Paper Course</li>
                <li>Recruitment</li>
                <li>Contact Info</li>
                <li>Homepage</li>
            </ul>
            {/* <Link to={'/team'}><Button>Team</Button></Link> */}
        </Container>
    )
}

export default Dashboard;