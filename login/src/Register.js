import React from 'react'
import { Link } from 'react-router-dom';

import './Form.css';

function Register() {

    return (
        <div>
            <h1>Sign Up</h1>

            <form>
                {/* Required fields */}

                <label>
                    *Username:
                <input
                        className="username"
                        name="username"
                        type="text"
                        placeholder="enter username"
                    />
                </label>
                <label>
                    *Password:
                <input
                        className="password"
                        name="password"
                        type="password"
                        placeholder="enter password"
                    />
                </label>
                <label>
                    *Confirm Password:
                <input
                        className="confirm-password"
                        name="confirmPassword"
                        type="password"
                        placeholder="confirm password"
                    />
                </label>
                <label>
                    *Full name
                <input
                        className="full-name"
                        type="text"
                        name="full_name"
                        placeholder="Jane Doe"
                    />
                </label>
                <label>
                    *Email
                <input
                        className="email"
                        type="email"
                        name="email"
                        placeholder="jon@doe.com"
                    />
                </label>
                <label>
                    Phone Number
                <input
                        className="phone-number"
                        type="text"
                        name="phone"
                        placeholder="888-888-8888"
                    />
                </label>

                <input className="submitButton" type="submit" />
            </form>
            <Link to="/sign-in" className="signUpSwitch">Already have an account? Sign In!</Link>
        </div >
    )
}

export default Register;