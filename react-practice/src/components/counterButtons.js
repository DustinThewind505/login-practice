import React from 'react';



function CounterButtons(props) {



    return(
        <>
            <button onClick={props.onCounterChange}>{props.label}</button>
        </>
    )
}

export default CounterButtons;