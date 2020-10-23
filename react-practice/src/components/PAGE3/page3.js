import React, { useState } from 'react';

import Form1 from './forms/form1';
import Form2 from './forms/form2';
import Form3 from './forms/form3';
import Form4 from './forms/form4';
import Form5 from './forms/form5';



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
                <h1><span>🧾</span> Forms <span>📜</span></h1>
                <form onSubmit={e => e.preventDefault()} className="display-form">
                    <h2>Display Form</h2>
                    {Object.values(displayForm).map((element, index) => <p key={index}>{typeof element === "boolean" ? "Checked✔✔✔" : element}</p>)}
                </form>
                   

                <div className='forms-page-container'>
                    <Form1 setDisplayForm={setDisplayForm}/>
                    <Form2 setDisplayForm={setDisplayForm}/>
                    <Form3 setDisplayForm={setDisplayForm}/>
                    <Form4 setDisplayForm={setDisplayForm}/>
                    <Form5 setDisplayForm={setDisplayForm}/>
                </div>
            </section>
        </>
    )
}

export default Page3;