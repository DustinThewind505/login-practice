import React from 'react';



function ColorPicker(props) {



    return (
        <>
            <h2>C<span style={props.fontStyles}>o</span>l<span style={props.fontStyles}>o</span>r P<span style={props.fontStyles}>i</span>ck<span style={props.fontStyles}>e</span>r</h2>
            <p>{`Color: `}<span style={props.fontStyles}>{props.color}</span></p>
            <div >
                <button className="blue-button" onClick={() => props.setColor("Blue")}>Blue</button>
                <button className="red-button" onClick={() => props.setColor("Red")}>Red</button>
                <button className="green-button" onClick={() => props.setColor("Green")}>Green</button>
            </div>
        </>
    )
}

export default ColorPicker;