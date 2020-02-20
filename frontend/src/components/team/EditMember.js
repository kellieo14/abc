import React, {useState, useEffect}from 'react';
import axios from 'axios';
import useTeamForm from '../CustomHooks';
import Container from 'react-bootstrap/Container';
import {useParams} from "react-router-dom";
import MemberForm from './MemberForm';

const EditMember = (props) => {
    const [member, setMember] = useState({});
    const [loading, setLoading] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        const getMember = () => {
            axios
                .get(`http://localhost:8082/team/${id}`)
                .then(res => {
                    setMember(res.data);
                })
                .catch(err => console.log('error', err))
        }
        getMember();
        setLoading(false);
    }, [id]);

    const edit = () => {
        axios
            .put(`http://localhost:8082/team/${id}`, inputs)
            .then(props.history.push('/team'))
            .catch(err => console.log('error', err))
    }

    const {inputs, handleInputChange, handleSubmit} = useTeamForm(edit);

    return (
        (!loading && 
            <Container>
                <MemberForm 
                    method = 'edit'
                    title = {`Edit Team Member: ${member.name}`}
                    inputs = {inputs}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    member={member}
                />
            </Container>
           
        )
    )
}

export default EditMember;