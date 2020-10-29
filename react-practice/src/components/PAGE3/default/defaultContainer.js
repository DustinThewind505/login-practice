import React, { useState, useEffect } from 'react';





function DefaultFormBehavior(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        username: ""
    })


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            username: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            username: ""
        })
    }

    useEffect(() => {
        if(formData.username === ""){
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [formData])



    // ========== COMPONENTS ==========
    return (
        <div className='forms-page-container'>
            <form onSubmit={handleSubmit}>
                <h3>Username: {formData.username}</h3>
                <section className='form-body'>
                    <label>username
                        <input name='username' value={formData.username} onChange={handleChange} required/>
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                    {/* disabled={disableButton} */}
                </footer>
            </form>
        </div>
    )
}

export default DefaultFormBehavior;