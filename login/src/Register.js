import React from 'react'
import { Link } from 'react-router-dom';

function Register() {

    return (
        <div>
            <h1>Sign Up</h1>

            <form>
                {/* Required fields */}

                <label>
                    *Username:
                <input
                        className="input inputName"
                        name="username"
                        type="text"
                        placeholder="enter username"
                    />
                </label>
                <label>
                    *Password:
                <input
                        className="input inputPassword"
                        name="password"
                        type="password"
                        placeholder="enter password"
                    />
                </label>
                <label>
                    *Confirm Password:
                <input
                        className="input inputConfirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="confirm password"
                    />
                </label>
                <label>
                    *Full name
                <input
                        className="input inputFullName"
                        type="text"
                        name="full_name"
                        placeholder="Jon Snow"
                    />
                </label>
                <label>
                    *Email
                <input
                        className="input inputEmail"
                        type="text"
                        name="email"
                        placeholder="jon@winterfell.com"
                    />
                </label>
                <label>
                    Phone Number
                <input
                        className="input inputPhoneNumber"
                        type="text"
                        name="phone"
                        placeholder="808-555-1234"
                    />
                </label>

                <label>
                    Bio:
                <br />
                    <input
                        className="input inputBio"
                        as="textarea"
                        name="bio"
                        placeholder="About me"
                    />
                </label>

                <label>
                    Profile Image:
                <br />
                    <input
                        className="input inputImage"
                        type="text"
                        name="user_picture"
                        placeholder="About me"
                    />
                </label>

                <input className="submitButton" type="submit" />
            </form>
            <Link to="/sign-in" className="signUpSwitch">Already have an account? Sign In!</Link>
            <Link to="/" className="guestSignIn">Just wanna browse? Continue as a guest.</Link>
        </div >
    )
}

export default Register;