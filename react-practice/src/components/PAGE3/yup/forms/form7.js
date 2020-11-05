import React, { useState } from 'react';
import * as yup from 'yup';
// ========== COMPONENT ==========
const formSchema = yup.object().shape({
    password1: yup.string().length(8).required(),
    password2: yup.string().length(8).required()
})




function Form7(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        password1: "",
        password2: ""
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
            password1: "",
            password2: ""
        })
    }




    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #7</h3>
            <p>input 1:{formData.password1}</p>
            <p>input 2:{formData.password2}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #7</h3>
                <section className='form-body'>
                    <label>password
                        <input type='password' name='password1' value={formData.password1} onChange={handleChange} />
                    </label>
                    <label>confirm password
                        <input type='password' name='password2' value={formData.password2} onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form7;