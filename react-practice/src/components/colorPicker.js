import React from 'react';



function ColorPicker(props){



    return(
        <>
        <h2>Color Picker</h2>
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