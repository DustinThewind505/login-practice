import React, { useState } from 'react';
// import FormOne from './form1A';



function Form1(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: ""
    })

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


    console.log(formData)
    return (
        <div className='form-container'>
             {/* onClick={() => props.setDisplayForm(formData)} */}
            <h3>Form #1</h3>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
            <form onSubmit={handleSubmit}>
            <h3>Form #1</h3>
            <section className='form-body'>
                <label>
                    <input type='text' name='username'  onChange={handleChange}  />
                </label>
                <label>
                    <input type='text' name='email'  onChange={handleEmail} />
                </label>
            </section>
            <footer>
                <button type='submit'>Submit</button>
            </footer>
        </form>
        </div>
    )
}

export default Form1;