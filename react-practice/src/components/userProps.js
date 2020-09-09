import React from 'react';
import UserName from './userPropsName';
import UserTrail from './userPropsTrail';


function UserProps(props) {




    return (
        <>
            <h1>User Props</h1>
            <div className="user-lists" style={{backgroundColor: props.randomColor}}>
                <UserName name={props.userInfo}/>
                <UserTrail trail={props.userInfo}/>
            </div>
        </>
    )
}

export default UserProps;