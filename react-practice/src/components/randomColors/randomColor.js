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
            <h2>C<span style={props.fontStyles}>o</span>l<span style={props.fontStyles}>o</span>r P<span style={props.fontStyles}>i</span>ck<span style={props.fontStyles}>e</span>r <span style={props.fontStyles}>2</span></h2>
            <button onClick={() => props.changeColor(colors)}>Change</button>
        </>
    )
}

export default RandomColor;