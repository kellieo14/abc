import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MemberForm = (props) => {
    let [loading, setLoading] = useState(true);
    let [member, setMember] = useState(props.member);
    // let [inputs, setInputs] = useState(props.inputs);
    
    useEffect(() => {
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key)) {
                    return true;
                } else {
                    return false
             
                }    
            }
        }
        if (!isEmpty(member)) {
            setMember(props.member);
            setLoading(false);
        } else {
        }
    }, [props, member])

    return (
        (!loading &&
        <Container>
            <Row>
                <Form onSubmit={props.handleSubmit}>
                <h3>{props.title}</h3>
                    <Form.Group controlId='name'>
                        <Form.Label>Team Member Name</Form.Label>
                        <Form.Control onChange={props.handleInputChange} type='text' name='name' placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId='title'>
                        <Form.Label>Team Member Title</Form.Label>
                        <Form.Control onChange={props.handleInputChange} type='text' name='title' placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group controlId='bio'>
                        <Form.Label>Team Member Bio</Form.Label>
                        <Form.Control onChange={props.handleInputChange} as='textarea' rows='5' name='bio' placeholder="Enter Bio" />
                    </Form.Group>
                    <Form.Group controlId='image'>
                        <Form.Label>Team Member Photo</Form.Label>
                        <Form.Control onChange={props.handleInputChange} type='text'  name='image' placeholder="Enter Photo Link" />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Row>
        </Container>
        )
    )
}

export default MemberForm;