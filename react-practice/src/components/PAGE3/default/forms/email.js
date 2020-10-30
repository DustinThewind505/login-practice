import React, { useState, useEffect } from 'react';



function EmailInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        email: ""
    })



    // ========== FUNCTIONS ==========
    const handleChange = e=> {
        const newFormState = {
            email: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            email: ""
        })
    }





    return (
        <form onSubmit={handleSubmit}>
            <h3>Email: {formData.email}</h3>
            <section className='form-body'>
                <label>email
                        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                </label>
            </section>
            <footer>
                <button type='submit'>Submit</button>
                {/* disabled={disableButton} */}
            </footer>
        </form>
    )
}

export default EmailInputForm;