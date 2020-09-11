import React from 'react';



function CounterButton(props) {



    return (
        <>
            <button onClick={props.onCounterChange}>{props.label}</button>
        </>
    )
}

export default CounterButton;