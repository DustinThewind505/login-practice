import React, { useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const newSchema = yup.object().shape({
    username: yup.string().required('must enter username'),
    email: yup.string().email('must enter a valid email').required(),
    jelly: yup.string(),
    terms: yup.boolean()
})

function Form9(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        jelly: "",
        terms: false
    })


    // ========== FUNCTION ==========
    const handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        const newFormState = {
            ...formData,
            [e.target.name]: value
        }

        setFormData(newFormState)
    }


    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            username: "",
            email: "",
            jelly: "",
            terms: false
        })
    }




    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #9</h3>
            <p>input: {formData.username}</p>
            <p>input: {formData.jelly}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #9</h3>
                <section className='form-body'>
                    <label>username
                        <input type='text' name='username' value={formData.username} onChange={handleChange} />
                    </label>
                    <label>email
                        <input type='email' name='email' value={formData.email} onChange={handleChange} />
                    </label>
                    <label>Jelly
                        <select name='jelly' onChange={handleChange}>
                            <option>== Choose One ==</option>
                            <option>Grape</option>
                        </select>
                    </label>
                    <label>Terms & Conditions
                        <input type='checkbox' name='terms' checked={formData.terms} onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form9;