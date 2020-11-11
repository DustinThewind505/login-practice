import React, { useState } from 'react';

import { CardHeader, FormText, Form, Label, Input, Button } from 'reactstrap';


function TextForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        username: ""
    })

    // ========== FUNCTION ==========
    const handleChange = e => {
        const newFormstate = {
            username: e.target.value
        }

        setFormData(newFormstate)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            username: ""
        })
    }


    // ========== COMPONENT ==========
    return (
        <>
            <CardHeader className='bootstrap-header'>Form #1<br/><p>Username: {formData.username}</p></CardHeader>
            <Form onSubmit={handleSubmit}>
                <h3>Form #1</h3>
                <section className='form-body'>
                    <Label>username
                        <Input type='text' name='username' value={formData.username} onChange={handleChange} />
                    </Label>
                </section>
                <footer>
                    <Button type='submit'>Submit</Button>
                </footer>
            </Form>
        </>
    )
}

export default TextForm;