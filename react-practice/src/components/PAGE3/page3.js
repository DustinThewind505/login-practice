import React, { useState } from 'react';

import Form1 from './forms/form1';
import Form2 from './forms/form2';

function Page3() {
    const [displayForm, setDisplayForm] = useState({
        name: "ello poppet"
    });


    return (
        <>
            <section className="forms-app">
                <h1>The Forms</h1>
                <form onSubmit={e => e.preventDefault()}>
                    {Object.values(displayForm).map(element => <p>{element}</p>)}
                </form>
                   

                <div className='forms-page-container'>
                    <Form1 setDisplayForm={setDisplayForm}/>
                    <Form2 setDisplayForm={setDisplayForm}/>

                </div>
            </section>
        </>
    )
}

export default Page3;