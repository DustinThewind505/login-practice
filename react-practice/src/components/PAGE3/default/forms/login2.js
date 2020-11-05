import React, { useEffect, useState } from 'react';




function LoginForm2(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.setDisplayForm(formData)

        setFormData({
            email: "",
            password: ""
        })
    }





    // ========== COMPONENT ==========
    return (
        <>
            <div className='form-container'>
                <h3>Form #8</h3>
                <form onSubmit={handleSubmit}>
                    <h3>Login2</h3>
                    <section className='form-body'>
                        <label>email
                            <input type='email' name='email' value={formData.email} onChange={handleChange} autoComplete='on' required/>
                            
                        </label>
                        <label>password
                            <input type='password' name='password' value={formData.password} onChange={handleChange} autoComplete='on' required/>
                            <small className='error'></small>
                        </label>
                    </section>
                    <footer>
                        <button type='submit' disabled={disableButton}>Submit</button>
                    </footer>
                </form>
            </div>
        </>
    )
}

export default LoginForm2;