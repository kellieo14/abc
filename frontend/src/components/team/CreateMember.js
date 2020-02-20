
import React from 'react';
import axios from 'axios';
import '../../App.css';
import useTeamForm from '../CustomHooks';
import MemberForm from './MemberForm';

const CreateMember = (props) => {
    const signup = () => {
        axios
            .post('http://localhost:8082/team', inputs)
            .then(props.history.push('/team')) 
            .catch(err => console.log('error', err))
    }

    const {inputs, handleInputChange, handleSubmit} = useTeamForm(signup);
    return (
        <MemberForm 
            method= 'new'
            title = 'Add New Team Member'
            inputs = {inputs}
            handleInputChange = {handleInputChange}
            handleSubmit = {handleSubmit}
        />
    )
}

export default CreateMember;