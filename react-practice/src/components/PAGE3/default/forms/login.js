import React, { useEffect, useState } from 'react';




function LoginForm(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(false)

    const [formData, setFormData] = useState({
        password1: "a",
        password2: ""
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

        // const small = document.querySelector('small')  
        
        // small.innerText = "Error Message"

        setFormData({
            password1: "",
            password2: ""
        })
    }

    useEffect(() => {
        if(formData.password1 !== formData.password2){
            setDisableButton(true)

            const small = document.querySelector('small')  
            small.innerText = "passwords must match"
            
        } else {
            setDisableButton(false)
            const small = document.querySelector('small')  
            small.innerText = ""
        }
    }, [formData])





    // ========== COMPONENT ==========
    return (
        <>
            <div className='form-container'>
                <h3>Form #7</h3>
                <form onSubmit={handleSubmit}>
                    <h3>Login - inputs/ text & email</h3>
                    <section className='form-body'>
                        <label>password
                            <input type='password' name='password1' value={formData.password1} onChange={handleChange} required/>
                            <small className='error'></small>
                        </label>
                        <label>confirm password
                            <input type='password' name='password2' value={formData.password2} onChange={handleChange} required/>
                            <small></small>
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

export default LoginForm;