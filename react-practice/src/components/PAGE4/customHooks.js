import React, { useState } from 'react';
import useInput from './hooks/useInput';


function DynamicTitle() {
    // ========== STATE ==========
    const [username, setUsername, handleUsername] = useInput("");
    const [email, setEmail, handleEmail] = useInput("");
    const [password, setPassword, handlePassword] = useInput("");

    // ========== FUNCTION ==========

    const handleSubmit = e => {
        e.preventDefault();

        setUsername("")

        setEmail("")

        setPassword("")
    }

    // ========== COMPONENT ==========
    return(
        <div>
            <h1>Custom Hooks🦂</h1>
            <form onSubmit={handleSubmit}>
                <h2>Hooks are awsome!</h2>
                <lable>username
                    <input type='text' name='username' value={username} onChange={e => handleUsername(e.target.value)}/>
                </lable>
                <label>e-mail
                    <input type='email' name='email' value={email} onChange={e => handleEmail(e.target.value)} />
                </label>
                <label>password
                    <input type='password' name='password' value={password} onChange={e => handlePassword(e.target.value)} />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <p>{username}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )
}

export default DynamicTitle;