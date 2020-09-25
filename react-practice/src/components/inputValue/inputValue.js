import React, { useState } from 'react';
// import axios from 'axios';


import { CardHeader, FormText, Form, Label, Input, Button } from 'reactstrap';



function InputValue(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [dropdown, setDropdown] = useState("");
    const [happyCheckbox, setHappyCheckbox] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.get(`?title=${title}&body=${body}`)
    }

    const handleTitle = event => {
        setTitle(event.target.value)
    }

    const handleBody = event => {
        setBody(event.target.value);
    }

    const handleTextarea = event => {
        setDropdown(event.target.value);
    }

    const handleHappyCheckbox = event => {
        setHappyCheckbox(event.target.checked);
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
                    <Input type="text" id="inputTitle" onChange={handleTitle} placeholder="Enter Title" />
                </Label>
                <br />
                <br />
                <Label>
                    <Input type="textarea" id="textareaBody" onChange={handleBody} placeholder="Enter Body" />
                </Label>
                <br />
                <br />
                <Label>
                    <Input type="select" id="dropdownMonth" onChange={handleTextarea} style={props.fontStyles} >
                        <option></option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                    </Input>
                </Label>
                <br />
                <br />
                <Label>
                    Happy: <Input type="checkbox" id="checkboxHappy" onChange={handleHappyCheckbox} />
                </Label>
                <br />
                <br />
                <Button>Submit</Button>
            </Form>
        </>
    )
}

export default InputValue;