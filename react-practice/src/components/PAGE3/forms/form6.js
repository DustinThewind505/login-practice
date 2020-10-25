import React, { useState } from 'react';



function Form6(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        radio: ""
    })





    // ========== FUNCTIONS ==========
    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = e => {
        // const newFormState = {
        //     radio: e.target.value
        // }

        // setFormData(newFormState)
        console.log(e.target.value)
    }



    // ========== COMPONENT ==========
    return(
        <div className='form-container'>
            <h3>Form #6</h3>
            <p>Radio:</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #6</h3>
                <section className='form-body'>
                    <label>Coke
                        <input type='radio' name='soda' value='coke' onChange={handleChange}/>
                    </label>
                    <label>Sprite
                        <input type='radio' name='soda' value='sprite' onChange={handleChange}/>
                    </label>
                    <label>Cream Soda
                        <input type='radio' name='soda' value='cream soda🍺' onChange={handleChange}/>
                    </label>
                    <label>Sierra Mist
                        <input type='radio' name='soda' value='sierra mist' onChange={handleChange}/>
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form6;