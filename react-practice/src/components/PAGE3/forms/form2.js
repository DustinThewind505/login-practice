import React from 'react';
import FormTwo from './form2A';



function Form2(props) {



    return (
        <div className='form-container' onClick={() => props.setDisplayForm(<FormTwo />)}>
            <h3>Form #2</h3>
        </div>
    )
}

export default Form2;