import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';

import YupFormContainer from './yup/yupContainer';
import DefaultForms from './default/defaultContainer';



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
                <ul>
                    <li><NavLink to='/page3'>Yup</NavLink></li>
                    <li><NavLink to='/page3/default'>Default</NavLink></li>
                </ul>
                <Route exact path='/page3'>
                    <YupFormContainer setDisplayForm={setDisplayForm} />
                </Route>
                <Route path='/page3/default'>
                    <DefaultForms setDisplayForm={setDisplayForm} />
                </Route>
            </section>
        </>
    )
}

export default Page3;