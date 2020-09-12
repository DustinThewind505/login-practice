import React, { useState } from 'react';



function InputValue(props) {
    const [title, setTitle] = useState("Title")
    const [body, setBody] = useState("Body")



    return (
        <>
            <h2><span style={props.fontStyles}>Input</span> V<span style={props.fontStyles}>a</span>l<span style={props.fontStyles}>u</span><span style={props.fontStyles}>e</span></h2>
            <div className="input-value-note" style={{backgroundColor: props.randomColor}}>
                <p><strong>{title}</strong></p>
                <p>{body}</p>
            </div>
            <input onChange={event => setTitle(event.target.value)} placeholder="Enter Title" />
            <textarea onChange={event => setBody(event.target.value)} placeholder="Enter Body" />
        </>
    )
}

export default InputValue;