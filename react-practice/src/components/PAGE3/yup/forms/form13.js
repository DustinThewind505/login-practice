import React, { useState } from 'react';



function RangeInput(props) {
    const [formData, setFormData] = useState({
        range: 50 + '%'
    })



    const handleChange = e => {
        const newFormState = {
            range: e.target.value + '%'
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)
    }



    return(
        <div className='form-container'>
            <h3>Form #13</h3>
            <p>Range: {formData.range}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: range</h3>
                <section className='form-body'>
                    <label>
                        <input type='range' name='range' min='0' max='100' onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default RangeInput;