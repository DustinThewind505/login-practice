import React from 'react';
import CounterButton from './counterButtons';


function Counter(props) {



    return (
        <>
            <h2>Counter</h2>
            <p>{`Count: `}<span style={props.fontStyles}>{props.count}</span></p>
            <div>
                <CounterButton onCounterChange={props.add} label="Add"/>
                <CounterButton onCounterChange={props.multiply} label="Multiply"/>
                <CounterButton onCounterChange={props.reset} label="Reset"/>
            </div>
        </>
    )
}

export default Counter;