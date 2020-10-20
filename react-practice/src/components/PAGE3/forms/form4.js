import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========



function Form4(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        username: "",
    })



    // ========== FUNCTIONS ==========


    // ========== COMPONENT ==========
    return (
        <div className="form-container">
            <h3>Form #4</h3>
            <form>
            <h3>Form #4</h3>
                <label>
                    <input type="text"  />
                </label>
            </form>
        </div>
    )
}

export default Form4;