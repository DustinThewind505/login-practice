import React, { useState } from 'react';

// ========== Form validation with yup dependency ==========




function Form8(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })



    // ========== FUNCTION ==========
    const handleChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            email: "",
            password: ""
        })
    }




    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #8</h3>
            <p>input 1: {formData.email}</p>
            <p>input 2: {formData.password}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #8</h3>
                <section className='form-body'>
                    <label>email
                        <input type='email' name='email' value={formData.email} onChange={handleChange} />
                    </label>
                    <label>password
                        <input type='password' name='password' value={formData.password} onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form8;