import React from 'react';



function UserTrail(props) {




    return (
        <>
            <ul>Trail
                {props.trail.map(user => <li>{user.trail}</li>)}
            </ul>
        </>
    )
}

export default UserTrail;