import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    username: yup.string().required('Must enter a username'),
})


function Form4(props) {
    // ========== STATE ==========
    const [disableButton, setDiableButton] = useState(true);

    const [formData, setFormData] = useState({
        username: "",
    })

    const [errors, setErrors] = useState({
        username: "",
    })



    // ========== FUNCTIONS ==========
    const validateInput = (e) => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(res => setErrors({...errors, username: ""}))
        .catch(err => setErrors({...errors, username: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist();

        const newFormData = {
            username: e.target.value
        }

        validateInput(e)

        setFormData(newFormData)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            username: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDiableButton(!res))
    }, [formData])


    // ========== COMPONENT ==========
    return (
        <div className="form-container">
            <h3>Form #4</h3>
            <p>Username: {formData.username}</p>

            <form onSubmit={handleSubmit}>
                <h3>Form #4</h3>
                <section className='form-body'>
                    <label>Username
                        <input type="text" onChange={handleChange} value={formData.username} />
                        {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form4;