import React from 'react';




function FormTwo(props) {



    return (
        <form className='form' onSubmit={e => e.preventDefault()}>
            <h3>Form #2</h3>
            <section className='form-body'>
                <label>
                    <input type="text" name="username" />
                </label>
                <label>
                    <input type="email" name='email' />
                </label>
                <label>
                    <input type="checkbox" name='checkbox' />
                </label>
            </section>
            <footer>
                <button type='submit'>Submit</button>
            </footer>
        </form>
    )
}

export default FormTwo;