import React, { useState, useEffect } from 'react';



function NumberInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        radio: ""
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            radio: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            radio: ""
        })
    }





    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h3>Radio: {formData.radio}</h3>
                <section className='form-body'>
                    <div className='radio-container'>
                        <label>radio
                        <input type='radio' name='radio' value='Lawful Good' onChange={handleChange} required />
                        </label>
                        <label>radio
                        <input type='radio' name='radio' value='Chaotic Good' onChange={handleChange} required />
                        </label>
                        <label>radio
                        <input type='radio' name='radio' value='Lawful Evil' onChange={handleChange} required />
                        </label>
                        <label>radio
                        <input type='radio' name='radio' value='Chaotic Evil' onChange={handleChange} required />
                        </label>
                    </div>
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