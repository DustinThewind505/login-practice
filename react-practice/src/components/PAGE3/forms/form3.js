import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    food: yup.string().required("Everyone hass a favorite food")
})

function Form3(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        food: ""
    })

    const [errors, setErrors] = useState({
        food: ""
    })


    // ========== FUNCTIONS ==========
    const validateLine = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(res => setErrors({
            food: ""
        }))
        .catch(err => setErrors({food: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist()
        const newForm = {
            [e.target.name]: e.target.value
        }

        validateLine(e)
        setFormData(newForm)
    }


    const handleSubmit = e => {
        e.preventDefault();

        props.setDisplayForm(formData)

        setFormData({
            food: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))

    }, [formData])


    // ========== COMPONENT ==========
    return (
        <div className="form-container">
            <h3>Form #3</h3>
            <p>Food: {formData.food}</p>
            <form onSubmit={handleSubmit}>
                <h3>Form #3</h3>
                <section className="form-body">
                    <label>Food
                        <select name="food" value={formData.food} onChange={handleChange}>
                            <option value="">===Choose One===</option>
                            <option value="apples">Apples</option>
                            <option value="bacon">Bacon</option>
                            <option value="chimichangas">Chimichangas</option>
                        </select>
                        {errors.food.length > 0 ? <p className="error">{errors.food}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form3;