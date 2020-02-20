import {useState} from 'react';

const useTeamForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        callback();
        e.target.name.value = '';
        e.target.title.value = '';
        e.target.bio.value = '';
        e.target.image.value = '';
    }

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => 
            ({...inputs, [e.target.name]: e.target.value}));
            console.log('inputs from custom hooks',inputs)
    }
    
    return {
        handleSubmit,
        handleInputChange, 
        inputs, 
    }
}

export default useTeamForm;