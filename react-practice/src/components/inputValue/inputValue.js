import React, { useState } from 'react';
import { CardHeader, CardBody, CardText } from 'reactstrap';



function InputValue(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [dropdown, setDropdown] = useState("");
    const [happyCheckbox, setHappyCheckbox] = useState(false);



    return (
        <>
            <CardHeader><span style={props.fontStyles}>Input</span> V<span style={props.fontStyles}>a</span>l<span style={props.fontStyles}>u</span><span style={props.fontStyles}>e</span></CardHeader>
            <CardBody>
                <div className="input-value-note" style={{ backgroundColor: props.randomColor }}>
                    <CardText><strong>{title || "Title"}</strong></CardText>
                    <CardText>{body || "Body"}</CardText>
                    <CardText style={props.fontStyles}>{dropdown || "Dropdown"}</CardText>
                    <CardText>Are you happy? {happyCheckbox ? "Yes" : "No"}</CardText>
                </div>
                <label>
                    <input id="inputTitle" onChange={event => setTitle(event.target.value)} placeholder="Enter Title" />
                </label>
                <br />
                <br />
                <label>
                    <textarea id="textareaBody" onChange={event => setBody(event.target.value)} placeholder="Enter Body" />
                </label>
                <br />
                <br />
                <label>
                    <select id="dropdownMonth" onChange={event => setDropdown(event.target.value)} style={props.fontStyles} >
                        <option></option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                    </select>
                </label>
                <br />
                <br />
                <label>
                    Happy: <input id="checkboxHappy" type="checkbox" onChange={event => setHappyCheckbox(event.target.checked)} />
                </label>
            </CardBody>
        </>
    )
}

export default InputValue;