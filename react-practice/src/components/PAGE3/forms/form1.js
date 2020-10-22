import React, { useEffect, useState } from 'react';
import FormOne from './form1A';

import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username").min(2, "Needs to be longer"),
    // email: yup.string().email("Must provide a valid email").required("Must enter an email")
})




function Form1(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        username: "",
        // email: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        // email: ""
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
            // email: ""
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
            {/* <p>Email: {formData.email}</p> */}
            <FormOne handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} disableButton={disableButton} />
        </div>
    )
}

export default Form1;