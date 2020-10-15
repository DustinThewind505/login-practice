import React, { useState, useEffect } from 'react';
import FormTwo from './form2A';

import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username"),
    email: yup.string().email("Must use a valid email").required("Must enter an email"),
    agree: yup.boolean().oneOf([true], "You must agree with us")
})




function Form2(props) {
    // ========== STATE ==========
    const [disableButton, setDiableButton] = useState(true)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        agree: false
    })

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        agree: false
    })


    // ========== FUNCTIONS ==========
    const validateChange = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(response => setErrors({...errors, [e.target.name]: ""}))
        .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist()
        const newForm = {
            ...formData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }

        validateChange(e)
        setFormData(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setDisplayForm(formData)
        setFormData({
            username: "",
            email: "",
            agree: false
        })
    }

    useEffect(() => {
        formSchema.isValid(formData)
            .then(response => {
                setDiableButton(!response)
            })
    }, [formData])



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #2</h3>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
            <p>Terms: {formData.agree ? "agreed✔" : "please agree"}</p>
            <FormTwo formData={formData} errors={errors} disableButton={disableButton} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}

export default Form2;


// onClick={() => props.setDisplayForm()}