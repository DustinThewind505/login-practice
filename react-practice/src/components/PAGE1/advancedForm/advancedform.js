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
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [notes, setNotes] = useState([]);

    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "state": "",
        "happy": false
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
            "happy": false
        })
    }

    function handleInputChange(event) {

        const newFormState = {
            ...formData,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }

        setFormData(newFormState)
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
                        Email: <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </Label>
                    <p>How old?</p>
                    <Label>
                        13-18   <Input type="radio" />
                    19-24   <Input type="radio" />
                    25-39   <Input type="radio" />
                    40+     <Input type="radio" />
                    </Label>
                    <Label>
                        <Input type="checkbox" name="happy" checked={formData.happy} onChange={handleInputChange} />
                    </Label>
                    <Input type="select" name="state" value={formData.state} onChange={handleInputChange}>
                        <option />
                        <option value="New Mexico" >New Mexico</option>
                        <option value="OOOHHH" >OOOHHH</option>
                        <option value="AAAHHHH" >AAAHHHH</option>
                    </Input>
                    <br />
                    <h4>{formData.name}</h4>
                    <Button type="submit" >Submit</Button>
                </Form>
                <Button onClick={clearAll}>Clear</Button>
                {notes.map(element => 
                    <div onClick={() => toggleComplete(element.name)} className={`${element.complete ? "complete" : ""}`}>
                        <h4>{element.name} {element.happy ? "is happy!" : "is sad."}</h4>
                    </div>
                )}
            </CardBody>
        </>
    )
}

export default AdvancedForm;