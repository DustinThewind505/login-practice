import React, { useState } from 'react';
import { CardHeader, CardBody, Button, Input, Form, Label } from 'reactstrap';
import * as Yup from 'yup';


const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Must be a valid email"),
    state: Yup.string().required("Must select New Mexico"),
    happy: Yup.boolean().oneOf([true], "Please me happy")

})

function AdvancedForm() {
    const [notes, setNotes] = useState([]);

    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "state": "",
        "happy": ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        const newNote = {
            "name": formData.name,
            "email": formData.email,
            "state": formData.state,
            "happy": formData.happy,
            "complete": false,
        }
        setNotes([...notes, newNote])
        setFormData({
            "name": "",
            "email": "",
            "state": "",
            "happy": ""
        })
    }

    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function toggleComplete(str) {
        setNotes(notes.map(element => {
            if (str === element.name) {
                return { ...element, complete: !element.complete }
            } else {
                return element
            }
        }))
    }

    function clearAll() {
        setNotes(notes.filter(element => element.complete === false))
    }


    return (
        <>
            <CardHeader>Advanced Form</CardHeader>
            <CardBody className="advanced-form-body">
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Name: <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    </Label>
                    <Label>
                        Email: <Input type="email" id="email" name="email" />
                    </Label>
                    <p>How old?</p>
                    <Label>
                    13-18   <Input type="radio" />
                    19-24   <Input type="radio" />
                    25-39   <Input type="radio" />
                    40+     <Input type="radio" />
                    </Label>
                    <Label>
                        <Input type="checkbox" name="happy" />
                    </Label>
                    <Input type="select" name="state">
                        <option />
                        <option value="New Mexico" >New Mexico</option>
                        <option value="New Mexico" >OOOHHH</option>
                        <option value="New Mexico" >AAAHHHH</option>
                    </Input>
                    <br />
                    <h4>{formData.name}</h4>
                    <Button>Submit</Button>
                </Form>
                <Button onClick={clearAll}>Clear</Button>
                {notes.map(element => <h4 onClick={() => toggleComplete(element.name)} className={`${element.complete ? "complete" : ""}`}>{element.name}</h4>)}
            </CardBody>
        </>
    )
}

export default AdvancedForm;