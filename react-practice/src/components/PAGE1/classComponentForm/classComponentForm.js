import React from 'react';



export default class ClassComponentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formData: {
                username: "",
                email: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            formData: { ...this.state.formData, [e.target.name]: e.target.value }
          });
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({formData:{username:"",email:""}})
    }


    render() {

        return (
            <div className='form-container'>
                <h3>Class Component Form</h3>
                <p>Username: {this.state.formData.username}</p>
                <p>Email: {this.state.formData.email}</p>
                <form onSubmit={this.handleSubmit}>
                    <section className='form-body'>
                        <label>
                            <input
                            type="text"
                            name="username"value={this.state.formData.username} onChange={this.handleChange} />
                        </label>
                        <label>
                            <input type="email" name="email" value={this.state.formData.email} onChange={this.handleChange} required />
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