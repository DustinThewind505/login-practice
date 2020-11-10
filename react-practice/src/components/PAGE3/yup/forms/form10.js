import React, { useState } from 'react';




function Form10(props) {
    const [formData, setFormData] = useState({
        select: ""
    })




    const handleChange = e => {
        const newFormState = {
            select: e.target.value
        }

        setFormData(newFormState)
    }



    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)
    }



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
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form10;