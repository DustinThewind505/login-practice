import React from 'react';



function Counter(props) {



    return (
        <>
            <h2>Counter</h2>
            <p>{`Count: `}<span style={props.fontStyles}>{props.count}</span></p>
            <div>
                <button onClick={() => props.setCount(props.count + 1)}>Add</button>
                <button onClick={() => props.setCount(props.count * 2)}>Multiply</button>
                <button onClick={() => props.setCount(0)}>Reset</button>
            </div>
        </>
    )
}

export default Counter;