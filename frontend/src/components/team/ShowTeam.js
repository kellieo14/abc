import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DeleteMember from './DeleteMember';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ShowTeam = (props) => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const getTeam = () => {
            axios
                .get('http://localhost:8082/team')
                .then(res => {
                    setMembers(res.data);
                })
                .catch(err => console.log('error', err))
        }
        getTeam();
        setLoading(false);
    }, [reload]);

    const handleReload = () => {
        setReload(!reload)
    }

    return (
        (!loading && <Container>
            <Row>
                <h1>Team</h1>
                <Link to={`/team/new`}><Button>Add Member</Button></Link>
            </Row>
            <Row>
                <ul>
                    {members.map(member => {
                        return (
                            <div key={member._id}>
                                <li className='name'>{member._id}</li>
                                <li className='name'>{member.name}</li>
                                <li className='title'>{member.title}</li>
                                <li className='bio'>{member.bio}</li>
                                <Link to={`/team/${member._id}/edit`}><Button>Edit</Button></Link>
                                {/* <img src={member.image} alt='portrait of team member' /> */}
                                <DeleteMember id={member._id} props={props} handleReload={handleReload}/>
                                <br />
                            </div>
                        
                        )
                    })}
                </ul>
            </Row>
        </Container>)
    )
}

export default ShowTeam;