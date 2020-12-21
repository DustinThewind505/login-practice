import React, { useState } from 'react';



function DynamicTitle() {
    // ========== STATE ==========
    const [title, setTitle] = useState("Hooks are awsome!")
    const [textInput, setTextInput] = useState("")

    // ========== FUNCTION ==========
    const handleChange = e => {
        setTextInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        setTextInput("")
    }

    // ========== COMPONENT ==========
    return(
        <div>
            <h1>Custom Hooks🦂</h1>
            <form onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <lable>
                    <input type='text' name="textInput" value={textInput} onChange={handleChange}/>
                </lable>
            </form>
            <p>{textInput}</p>
        </div>
    )
}

export default DynamicTitle;