import React from 'react';



function HideElement(props) {



    return (
        <>
            <h2>Hide Element</h2>
            <button onClick={props.toggleStar}>
                {props.star ? "Hide" : "Show"}
            </button>
            {
                props.star && <img className="patrick-star" src="https://vignette2.wikia.nocookie.net/spongebob/images/0/0a/Drooling.png/revision/latest?cb=20140824164345" alt="Patrick Star" />
            }
        </>
    )
}

export default HideElement;