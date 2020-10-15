import React from 'react';




function FormTwo(props) {



    return (
        <form className='form' onSubmit={props.handleSubmit}>
            <h3>Form #2</h3>
            <section className='form-body'>
                <label>username
                    <input type='text' name='username' value={props.formData.username} onChange={props.handleChange}/>
                    {props.errors.username.length > 0 ? <p className="error">{props.errors.username}</p> : null}
                </label>
                <label>email
                    <input type='email' name='email' value={props.formData.email} onChange={props.handleChange}/>
                    {props.errors.email.length > 0 ? <p className="error">{props.errors.email}</p> : null}
                </label>
                <label>checkbox
                    <input type='checkbox' name='agree' checked={props.formData.agree}  onChange={props.handleChange}/>
                    {props.errors.agree.length > 0 ? <p className="error">{props.errors.agree}</p> : null}
                </label>
            </section>
            <footer>
                <button type='submit' disabled={props.disableButton}>Submit</button>
            </footer>
        </form>
    )
}

export default FormTwo;