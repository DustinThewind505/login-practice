import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { CardHeader, CardBody } from 'reactstrap';


const initialFriends = [
    {
        id: uuid(),
        fname: 'John',
        lname: 'Smith',

    },
    {
        id: uuid(),
        fname: 'Jane',
        lname: 'Doe',

    }
]

function FriendsForm() {
    const [data, setData] = useState(initialFriends);


    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
    })

    const handleInputChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Welcome!\n${formValues.fname} ${formValues.lname}`)
        const newFriend = {
            id: uuid(),
            fname: formValues.fname,
            lname: formValues.lname,
        }

        setData([...data, newFriend])
        setFormValues({
            fname: '',
            lname: '',
        })
    }

    const toggleComplete = name => {
        setData(data.map(element => {
            if(element.fname === name){
                return {...element, complete: !element.complete}
            } else {
                return element
            }
        }))
    }

    const clearComplete = () => {
        // setData(data.filter(element => element.complete === false))
        setData([])
    }


    return (
        <>
            <CardHeader>Friends Form</CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name: <input name="fname" onChange={handleInputChange} />
                    </label>
                    <label>
                        Last Name: <input name="lname" onChange={handleInputChange} required />
                    </label>
                    <input type="submit" />
                </form>
                <button onClick={clearComplete}>Clear</button>
                {data.map(friend => (
                    <div key={friend.id} className={`${friend.complete ? "complete" : ""}`} onClick={() => toggleComplete(friend.fname)}>
                        <h2>{friend.fname} {friend.lname}</h2>
                    </div>
                ))}
                <p>{formValues.fname} {formValues.lname}</p>
            </CardBody>
        </>
    )
}

export default FriendsForm;