import React from 'react';

const colors = [
    "#FFBAAA",
    "#27576B",
    "#D47F6A",
    "#AA7539",
    "#003D19",
    "#6E91A1",
    "#552D00"
  ];

function RandomColor(props) {



    return(
        <>  
            <h2>Color Picker 2</h2>
            <button onClick={() => props.changeColor(colors)}>ChAnGe</button>
        </>
    )
}

export default RandomColor;