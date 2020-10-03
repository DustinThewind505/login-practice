import React, { useState } from 'react';



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
        <div>
            <h2>Advanced Form</h2>
            <h4>{formData.name}</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type="text" id="name" name="name" onChange={handleInputChange} />
                </label>
                <button>Submit</button>
            </form>
            {notes.map(element => <h4 onClick={() => toggleComplete(element.name)} className={`${element.complete ? "complete" : ""}`}>{element.name}</h4>)}
            <button onClick={clearAll}>Clear</button>
        </div>
    )
}

export default AdvancedForm;