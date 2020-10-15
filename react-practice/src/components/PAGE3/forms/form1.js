import React, { useEffect, useState } from 'react';
// import FormOne from './form1A';

import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username"),
    email: yup.string().email("Must provide a valid email").required("Must enter an email")
})




function Form1(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        username: "",
        email: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        email: ""
    });


    // ========== FUNCTIONS ==========
    const validateChange = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(response => setErrors({
                ...errors,
                [e.target.name]: ""
            }))
            .catch(err => setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            }))
    }

    const handleChange = e => {
        e.persist();
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value,
        }

        validateChange(e)
        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newForm = {
            ...formData
        }

        props.setDisplayForm(newForm)

        setFormData({
            username: "",
            email: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))

    }, [formData])


    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #1</h3>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #1</h3>
                <section className='form-body'>
                    <label>username
                    <input type='text' name='username' onChange={handleChange} />
                        {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
                    </label>
                    <label>email
                    <input type='text' name='email' onChange={handleChange} />
                        {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form1;