import React, { useState, useEffect } from 'react';



function NumberInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        checkbox: false
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            checkbox: e.target.checked
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            checkbox: false
        })
    }





    return (
        <div className='form-container'>
            <h3>Form #6 - input/checkbox</h3>
            <p>Checkbox: {formData.checkbox ? 'Checked✔✔✔🎉🎉' : ''}</p>
            <form onSubmit={handleSubmit}>
                <h3>Checkbox: {formData.checkbox}</h3>
                <section className='form-body'>
                    <label>checkbox
                        <input type='checkbox' name='checkbox' checked={formData.checkbox} onChange={handleChange} required />
                    </label>
                    {/* <label>Chaotic Good
                        <input type='checkbox' name='checkbox' value='Chaotic Good' onChange={handleChange} required />
                        </label>
                        <label>Lawful Evil
                        <input type='checkbox' name='checkbox' value='Lawful Evil' onChange={handleChange} required />
                        </label>
                        <label>Chaotic Evil
                        <input type='checkbox' name='checkbox' value='Chaotic Evil' onChange={handleChange} required />
                        </label> */}
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                    {/* disabled={disableButton} */}
                </footer>
            </form>
        </div>
    )
}

export default NumberInputForm;