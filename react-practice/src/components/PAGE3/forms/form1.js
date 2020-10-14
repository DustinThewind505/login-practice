import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
// import FormOne from './form1A';



function Form1(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)
    const [formData, setFormData] = useState({
        username: "",
        email: ""
    })


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            ...formData,
            username: e.target.value,
        }

        setFormData(newFormState)
    }

    const handleEmail = e => {
        setFormData({
            ...formData,
            email: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newForm = {
            ...formData
        }


        props.setDisplayForm(newForm)
    }

    const formSchema = yup.object().shape({
        username: yup.string().required("Must enter a username"),
        email: yup.string().email("Must provide a valid email").required("Must enter an email")
    })

    useEffect(() => {
        formSchema.isValid(formData)
        .then(response => setDisableButton(!response))
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
                    <input type='text' name='username'  onChange={handleChange}  />
                </label>
                <label>email
                    <input type='text' name='email'  onChange={handleEmail} />
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