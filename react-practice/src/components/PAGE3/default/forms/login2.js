import React, { useEffect, useState } from 'react';
// import * as yup from 'yup';
// // ========== Form validation with yup ==========
// const formSchema = yup.object().shape({
//     email: yup.string().email("Must enter a valid email").required(),
//     password: yup.string().min(8, "password must be at least 8 characters").required()
// })



function LoginForm2(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState('')





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

    const handlePasswordError = () => {
        if (formData.password.length < 7) {
            setError('password must have 8 characters')
        } else {
            setError('')
        }
    }




    // ========== COMPONENT ==========
    return (
        <>
            <div className='form-container'>
                <h3>Form #8</h3>
                <p>email:{formData.email}</p>
                <p>password: {formData.password}</p>
                <form onSubmit={handleSubmit}>
                    <h3>Login2</h3>
                    <section className='form-body'>
                        <label>email
                            <input type='email' name='email' value={formData.email} onChange={handleChange} autoComplete='on' required />

                        </label>
                        <label>password
                            <input type='password' name='password' value={formData.password} onChange={handleChange} autoComplete='off' required />
                            <p className='error'>{error}</p>
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