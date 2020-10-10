import React from 'react';




function Form1() {



    return (
        <div className='form-container'>
            <form>
                <h3>Form #1</h3>
                <section className='form-body'>
                    <label>
                        <input type="text" name="username" />
                    </label>
                    <label>
                        <input type="email" name='email' />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form1;