import React, { useState } from 'react';
import UserName from './userPropsName';
import UserTrail from './userPropsTrail';

const hikers = [
    {
        "name": "Yoda",
        "trail": "PCT"
    },
    {
        "name": "Zig-Zag",
        "trail": "AT"
    },
    {
        "name": "Viking",
        "trail": "AT"
    },
    {
        "name": "Nilla",
        "trail": "CDT"
    },
    {
        "name": "Snow White",
        "trail": "PCT"
    },
]

function UserProps(props) {
    const [userInfo] = useState(hikers);




    return (
        <>
            <h1><span style={props.fontStyles}>U</span>s<span style={props.fontStyles}>e</span>r <span style={props.fontStyles}>Props</span></h1>
            <div className="user-lists" style={{ backgroundColor: props.randomColor }}>
                <UserName name={userInfo} />
                <UserTrail trail={userInfo} />
            </div>
        </>
    )
}

export default UserProps;