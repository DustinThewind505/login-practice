import React, { useState } from 'react';
import * as yup from 'yup';


function Form3(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        food: ""
    })


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newForm = {
            ...formData,
            food: e.target.value
        }

        setFormData(newForm)
    }


    const handleSubmit = e => {
        e.preventDefault();

        props.setDisplayForm(formData)

        setFormData({
            food: ""
        })
    }


    // ========== COMPONENT ==========
    return (
        <div className="form-container">
            <h3>Form #3</h3>
            <p>Food: {formData.food}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #3</h3>
                <section className="form-body">
                    <label>Food
                        <select value={formData.food} onChange={handleChange}>
                            <option value="">===Choose One===</option>
                            <option value="apples">Apples</option>
                            <option value="bacon">Bacon</option>
                            <option value="chimichangas">Chimichangas</option>
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

export default Form3;