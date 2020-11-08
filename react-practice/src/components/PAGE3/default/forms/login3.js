import React, { useState, useEffect } from 'react';





function LoginForm3(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        name: "",
        termsCondtions: false
    })

    const [errorState, setErrorState] = useState({
        name: "",
        termsCondtions: false
    })



    // ========== FUNCTION ==========
    const handleNameError = e => {
        if(formData.name === ""){
            setErrorState({
                ...errorState,
                name: "must enter name"
            })
        } else {
            setErrorState({
                ...errorState,
                name: ""
            })
        }
    }

    const handleTermsError = e => {
        if (formData.termsCondtions === false) {
            setErrorState({
                ...errorState,
                termsCondtions: "must agree"
            })
        } else {
            setErrorState({
                ...errorState,
                termsCondtions: ""
            })
        }
    }


    const handleChange = e => {
        e.persist()

        const newFormState = {
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }

        handleNameError(e)
        // handleTermsError(e)

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            name: "",
            termsCondtions: ""
        })
    }


    // useEffect(() => {
    //     if (formData.name === "") {
    //         setErrorState({
    //             ...errorState,
    //             name: "must enter full name"
    //         })
    //     } else {
    //         setErrorState({
    //             ...errorState,
    //             name: ""
    //         })
    //     }
    // }, [formData])

    // useEffect(() => {
    //     if (formData.termsCondtions === false) {
    //         setErrorState({
    //             ...errorState,
    //             termsCondtions: "must agree"
    //         })
    //     } else {
    //         setErrorState({
    //             ...errorState,
    //             termsCondtions: ""
    //         })
    //     }
    // }, [formData])

    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #9</h3>
            <p>Name: {formData.name}</p>
            <p>Terms: {formData.termsCondtions ? "Checked✔✔✔🎉🎉" : ""}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #9</h3>
                <section className='form-body'>
                    <label>Full Name
                        <input type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off' />
                        {errorState.name ? <p className='error'>{errorState.name}</p> : null}
                    </label>
                    <label>Terms & Conditions
                        <input type='checkbox' name='termsCondtions' checked={formData.termsCondtions} onChange={handleChange} />
                        {errorState.termsCondtions ? <p className='error'>{errorState.termsCondtions}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default LoginForm3;