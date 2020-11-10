import React from 'react';

import { CardHeader, FormText, Form, Label, Input, Button } from 'reactstrap';


function TextForm(props) {
    // ========== STATE ==========

    // ========== FUNCTION ==========


    // ========== COMPONENT ==========
    return (
        <>
            <CardHeader>Form #1</CardHeader>
            <Form>
                <h3>Form #1</h3>
                <section className='form-body'>
                    <Label>username
                        <Input type='text' />
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