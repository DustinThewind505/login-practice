import React from 'react';



export default class ClassComponentForm extends React.Component {





    render() {

        return(
            <div className='form-container'>
                <h3>Class Component Form</h3>
                <form>
                    <section className='form-body'>
                        <label>
                            <input type='text' />
                        </label>
                        <label>
                            <input type='email' />
                        </label>
                    </section>
                    <footer>
                        <button type='submit'>Submit</button>
                    </footer>
                </form>
            </div>
        )
    }
}