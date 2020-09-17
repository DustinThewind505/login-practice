import React, { useState } from 'react';
import { CardHeader, CardBody, CardText } from 'reactstrap';



function InputValue(props) {
    const [title, setTitle] = useState("Title")
    const [body, setBody] = useState("Body")



    return (
        <>
            <CardHeader><span style={props.fontStyles}>Input</span> V<span style={props.fontStyles}>a</span>l<span style={props.fontStyles}>u</span><span style={props.fontStyles}>e</span></CardHeader>
            <CardBody>
            <div className="input-value-note" style={{backgroundColor: props.randomColor}}>
                <CardText><strong>{title}</strong></CardText>
                <CardText>{body}</CardText>
            </div>
            <input onChange={event => setTitle(event.target.value)} placeholder="Enter Title" />
            <textarea onChange={event => setBody(event.target.value)} placeholder="Enter Body" />
            </CardBody>
        </>
    )
}

export default InputValue;