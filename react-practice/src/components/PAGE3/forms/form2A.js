import React from 'react';




function FormTwo(props) {



    return (
        <form className='form' onSubmit={props.handleSubmit}>
            <h3>Form #2</h3>
            <section className='form-body'>
                <label>
                    <input type="text" name="username" onChange={props.handleChange}/>
                </label>
                <label>
                    <input type="email" name='email' onChange={props.handleChange}/>
                </label>
                <label>
                    <input type="checkbox" name='checkbox' checked={props.formData.agree} onChange={props.handleChange}/>
                </label>
            </section>
            <footer>
                <button type='submit'>Submit</button>
            </footer>
        </form>
    )
}

export default FormTwo;