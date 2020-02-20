import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ShowTeam from '../team/ShowTeam';

const AboutUs = (props) => {
    // const [members, setMembers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [reload, setReload] = useState(false);

    // useEffect(() => {
    //     const getTeam = () => {
    //         axios
    //             .get('http://localhost:8082/team')
    //             .then(res => {
    //                 setMembers(res.data);
    //             })
    //             .catch(err => console.log('error', err))
    //     }
    //     getTeam();
    //     setLoading(false);
    // }, [reload]);

    // const handleReload = () => {
    //     setReload(!reload)
    // }

    return (
        <Container>
            <Row>
                <h1>About Us</h1>
            </Row>
            <Row>
               <p>blah blah blah</p>
            </Row>
            <ShowTeam></ShowTeam>
        </Container>
    )
}

export default AboutUs;