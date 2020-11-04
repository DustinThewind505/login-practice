import React from 'react';




function LoginForm(props){





    return(
        <>
        <div className='form-container'>
            <h3>Form #7</h3>
        <form>
            <h3>Login - inputs/ text & email</h3>
            <section className='form-body'>
        <label>username
            <input type='text' placeholder='Ello Poppet' />
        </label>
            </section>
            <footer type='submit'>Submit</footer>
        </form>
        </div>
        </>
    )
}

export default LoginForm;