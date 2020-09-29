import React from 'react';



function UserName(props) {




    return (
        <>
            <ul>Name
                {props.name.map(user => <li>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UserName;