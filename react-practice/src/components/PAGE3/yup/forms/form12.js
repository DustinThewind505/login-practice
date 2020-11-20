import React, { useState } from 'react';

// ========== Form validation with yup ==========




function Form12(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        counter: 0
    })



    // ========== FUNCTIONS ==========
    const handlesubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            counter: 0
        })
    }
    
    
    const handleClick = e =>{
        setFormData({
            counter: formData.counter + 1
        })
    }




    // ========== COMPONENTS ==========
    return(
        <div className='form-container'>
            <h3>Form #12</h3>
            <p>Clicked: {formData.counter}</p>
            <form onSubmit={handlesubmit}>
                <h3>Input: button</h3>
                <section className='form-body'>
                    <label>click
                        <input type='button' value='Button' onClick={handleClick} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}


export default Form12;