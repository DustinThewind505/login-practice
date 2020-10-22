import React from 'react';




function FormOne(props) {



    return (
        <form onSubmit={props.handleSubmit}>
                <h3>Form #1</h3>
                <section className='form-body'>
                    <label>username
                    <input type='text' name='username' onChange={props.handleChange} />
                        {props.errors.username.length > 0 ? <p className="error">{props.errors.username}</p> : null}
                    </label>
                    {/* <label>email
                    <input type='text' name='email' onChange={props.handleChange} />
                        {props.errors.email.length > 0 ? <p className="error">{props.errors.email}</p> : null}
                    </label> */}
                </section>
                <footer>
                    <button type='submit' disabled={props.disableButton}>Submit</button>
                </footer>
            </form>
    )
}

export default FormOne;