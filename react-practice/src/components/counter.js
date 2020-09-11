import React from 'react';
import CounterButton from './counterButton';


function Counter(props) {



    return (
        <>
            <h2 style={props.fontStyles}>Counter</h2>
            <p>{`Count: `}<span style={props.fontStyles}>{props.count}</span></p>
            <div className="counter-buttons">
                <CounterButton onCounterChange={props.add} label="Add" />
                <CounterButton onCounterChange={props.multiply} label="Multiply" />
                <CounterButton onCounterChange={props.reset} label="Reset" />
            </div>
        </>
    )
}

export default Counter;