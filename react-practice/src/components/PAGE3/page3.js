import React, { useState } from 'react';

import Form1 from './forms/form1';
import Form2 from './forms/form2';



function Page3() {
    // ========== STATE ==========
    const [displayForm, setDisplayForm] = useState({
        name: "ello poppet"
    });


    // ========== FUNCTIONS ==========



    // ========== COMPONENT ==========
    return (
        <>
            <section className="forms-app">
                <h1>The Forms</h1>
                <form onSubmit={e => e.preventDefault()} className="display-form">
                    {Object.values(displayForm).map((element, index) => <p key={index}>{typeof element === "boolean" ? "Checked✔✔✔" : element}</p>)}
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