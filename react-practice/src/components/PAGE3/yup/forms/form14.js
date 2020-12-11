// ========== IMPORTS ==========
import React from 'react';

// ========== From validation with yup ==========

function TimeInput() {
    // ========== STATE ==========


    // ========== FUNCTIONS ==========


    // ========== COMPONENT ==========
    return(
        <div className='form-container'>
            <h1>Form #14</h1>
            <p>Time:</p>
            <form>
                <h3>Input: time</h3>
                <section className='form-body'>
                    <label>
                        <input type='time' />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default TimeInput;