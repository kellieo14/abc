import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const DeleteButton = (props) => {
    const handleDelete = () => {
        axios
            .delete(`http://localhost:8082/team/` + props.id)
            .then(props.handleReload())
            .catch(err => console.log('error', err))
    }

    return (
        <Button onClick={handleDelete}>Delete</Button>
    )
}

export default DeleteButton;