import React, { useState } from 'react';
// import axios from 'axios';


import { CardHeader, FormText, Form, Label, Input, Button } from 'reactstrap';



function InputValue(props) {

    const [formData, setFormData] = useState({
        "title": "",
        "body": "",
        "dropdown": "",
        "happyCheckbox": false
    })

    const { title, body, dropdown, happyCheckbox } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.get(`?title=${title}&body=${body}`)
        alert(`FORM:\n${formData.title}\n${formData.body}\n${formData.dropdown}\n${formData.title ? "I'm happy" : "I'm NOT happy"}`);
        setFormData({
            "title": "",
            "body": "",
            "dropdown": "",
            "happyCheckbox": false
        })
    }

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleCheckboxChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
        })
    }


    return (
        <>
            <CardHeader><span style={props.fontStyles}>Input</span> V<span style={props.fontStyles}>a</span>l<span style={props.fontStyles}>u</span><span style={props.fontStyles}>e</span></CardHeader>
            <Form onSubmit={handleSubmit}>
                <div className="input-value-note" style={{ backgroundColor: props.randomColor }}>
                    <FormText><strong>{title || "Title"}</strong></FormText>
                    <FormText>{body || "Body"}</FormText>
                    <FormText style={props.fontStyles}>{dropdown || "Dropdown"}</FormText>
                    <FormText>Are you happy? {happyCheckbox ? "Yes" : "No"}</FormText>
                </div>
                <Label>
                    <Input type="text" name="title" id="inputTitle" value={formData.title} onChange={handleInputChange} placeholder="Enter Title" />
                </Label>
                <br />
                <br />
                <Label>
                    <Input type="textarea" name="body" id="textareaBody" value={formData.body} onChange={handleInputChange} placeholder="Enter Body" />
                </Label>
                <br />
                <br />
                <Label>
                    <Input type="select" name="dropdown" id="dropdownMonth" value={formData.dropdown} onChange={handleInputChange} style={props.fontStyles} >
                        <option></option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                    </Input>
                </Label>
                <br />
                <br />
                <Label>
                    Happy: <Input type="checkbox" name="happyCheckbox" id="checkboxHappy" onChange={handleCheckboxChange} />
                </Label>
                <br />
                <br />
                <Button>Submit</Button>
            </Form>
        </>
    )
}

export default InputValue;