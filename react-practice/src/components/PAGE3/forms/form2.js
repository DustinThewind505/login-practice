import React, { useState } from 'react';
import FormTwo from './form2A';



function Form2(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        agree: false
    })


    const handleChange = e => {
        const newForm = {
            ...formData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }

        setFormData(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setDisplayForm(formData)
    }



    return (
        <div className='form-container'>
            <h3>Form #2</h3>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
            <p>Terms: {formData.agree ? "agreed✔" : "please agree"}</p>
            <FormTwo formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
    )
}

export default Form2;


// onClick={() => props.setDisplayForm()}