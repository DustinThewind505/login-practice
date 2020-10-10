import React, { useState } from 'react';

import Form1 from './forms/form1';

function Page3() {
    const [displayForm, setDisplayForm] = useState("");


    return(
        <>
        <section>
            <h1>The Forms</h1>
            {displayForm}
            <div className='forms-page-container'onClick={() => setDisplayForm(<Form1 />)}>
                <Form1 />

            </div>
        </section>
        </>
    )
}

export default Page3;