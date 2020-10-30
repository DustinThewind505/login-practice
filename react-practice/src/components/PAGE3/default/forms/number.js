import React, { useState, useEffect } from 'react';



function NumberInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        number: 0
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            number: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            number: 0
        })
    }





    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h3>Number: {formData.number}</h3>
                <section className='form-body'>
                    <label>number
                        <input type='number' name='number' value={formData.number} onChange={handleChange} required />
                    </label>
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