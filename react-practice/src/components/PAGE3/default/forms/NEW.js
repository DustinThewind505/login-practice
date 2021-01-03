import React, { useState } from 'react';



function FormInput() {
    // ========== STATE ==========
    const [formData, setFormData] = useState("");


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newState = e.target.value

        setFormData(newState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        setFormData("")
    }


    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>ONE WAY TICKET</h3>
            <p>🖤🖤🖤🖤🖤🖤</p>
            <form onSubmit={handleSubmit}>
                <h3>TO MIDNIGHT!</h3>
                <section className='form-body'>
                    <label>username
                        <input value={formData} onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
            <p>{formData}</p>
        </div>
    )
}

export default FormInput;