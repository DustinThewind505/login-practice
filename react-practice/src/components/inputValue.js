import React from 'react';



function InputValue(props) {



    return (
        <>
            <h2>Input Value</h2>
            <div className="input-value-note">
                <p><strong>{props.title}</strong></p>
                <p>{props.body}</p>
            </div>
            <input onChange={event => props.setTitle(event.target.value)} placeholder="Enter Title" />
            <textarea onChange={event => props.setBody(event.target.value)} placeholder="Enter Body" />
        </>
    )
}

export default InputValue;