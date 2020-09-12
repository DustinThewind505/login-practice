import React from 'react';



function HideElement(props) {

  const toggleStar = () => {
    props.setStar(!props.star)
  }



    return (
        <>
            <h2><span style={props.fontStyles}>Hide</span> El<span style={props.fontStyles}>e</span>m<span style={props.fontStyles}>e</span>nt</h2>
            <button onClick={toggleStar}>
                {props.star ? "Hide" : "Show"}
            </button>
            {
                props.star && <img className="patrick-star" src="https://vignette2.wikia.nocookie.net/spongebob/images/0/0a/Drooling.png/revision/latest?cb=20140824164345" alt="Patrick Star" />
            }
        </>
    )
}

export default HideElement;