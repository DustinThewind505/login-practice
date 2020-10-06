import React, { useState } from 'react';
import { CardHeader, CardBody, Button, Input, Form, Label } from 'reactstrap';


function AdvancedForm() {
    const [notes, setNotes] = useState([]);

    const [formData, setFormData] = useState({
        "name": "",
    })

    function handleSubmit(event) {
        event.preventDefault();
        const newNote = {
            "name": formData.name,
            "complete": false,
        }
        setNotes([...notes, newNote])
        setFormData({
            "name": ""
        })
    }

    function handleInputChange(event) {
        setFormData({
            "name": event.target.value
        })
    }

    function toggleComplete(str) {
        setNotes(notes.map(element => {
            if(str === element.name) {
                return {...element, complete: !element.complete}
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
            <CardBody>
            <Form onSubmit={handleSubmit}>
                <p>How old?</p>
                <Label>
                    13-18   <Input type="radio" />
                    19-24   <Input type="radio" />
                    25-39   <Input type="radio" />
                    40+     <Input type="radio" />
                </Label>
                <Label>
                    <Input type="checkbox"  />
                </Label>
                <Label>
                    Name: <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                </Label>
                <Input type="select">
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