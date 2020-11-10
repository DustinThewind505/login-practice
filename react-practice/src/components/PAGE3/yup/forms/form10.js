import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    select: yup.string().oneOf(['Human', 'Pickle'], 'must decide!')
})


function Form10(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        select: ""
    })

    const [errorState, setErrorState] = useState({
        select: ""
    })




    // ========== FUNCTION ==========
    const validateChange = e => {
        yup.reach(formSchema, 'select').validate(e.target.value)
            .then(res => setErrorState({ select: "" }))
            .catch(err => setErrorState({ select: err.errors[0] }))
    }


    const handleChange = e => {
        e.persist()

        const newFormState = {
            select: e.target.value
        }

        validateChange(e)

        setFormData(newFormState)
    }


    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            select: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #10</h3>
            <p>input: {formData.select}</p>
            <p>input: {formData.select}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #10</h3>
                <section className='form-body'>
                    <label>
                        <select name='select' value={formData.select} onChange={handleChange}>
                            <option value=''>== Choose one ==</option>
                            <option value='Human'>Human</option>
                            <option value='Pickle'>Pickle</option>
                        </select>
                        {errorState.select.length > 0 ? <p className='error'>{errorState.select}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form10;