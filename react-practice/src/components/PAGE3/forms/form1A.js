import React from 'react';




function FormOne(props) {



    return (
        <form onSubmit={e => e.preventDefault()}>
            <h3>Form #1</h3>
            <section className='form-body'>
                <label>
                    <input type='text' name='username'  onChange={props.handleChange}  />
                </label>
                <label>
                    <input type='text' name='email'  onChange={props.handleEmail} />
                </label>
            </section>
            <footer>
                <button type='submit'>Submit</button>
            </footer>
        </form>
    )
}

export default FormOne;