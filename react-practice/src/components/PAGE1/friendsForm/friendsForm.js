import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { CardHeader, CardBody, Button } from 'reactstrap';


const initialFriends = [
    {
        id: uuid(),
        fname: 'John',
        lname: 'Smith',
        complete: false,
    },
    {
        id: uuid(),
        fname: 'Jane',
        lname: 'Doe',
        complete: false,
    }
]

function FriendsForm() {
    const [data, setData] = useState(initialFriends);


    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        happy: false
    })

    const handleInputChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleCheckboxChange = event => {
        setFormValues({
            ...formValues,
            happy: !formValues.happy
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Welcome!\n${formValues.fname} ${formValues.lname}`)
        const newFriend = {
            id: uuid(),
            fname: formValues.fname,
            lname: formValues.lname,
            happy: formValues.happy
        }

        setData([...data, newFriend])
        setFormValues({
            fname: '',
            lname: '',
            complete: false,
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
        setData(data.filter(element => element.complete === false))
        // setData([])
    }


    return (
        <>
            <CardHeader>Friends Form</CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name: <input name="fname" value={formValues.fname} onChange={handleInputChange} />
                    </label>
                    <label>
                        Last Name: <input name="lname" value={formValues.lname} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Happy? <input type="checkbox" value={formValues.happy} name="happy" onChange={handleCheckboxChange} />
                    </label>
                    <br />
                    <Button>Submit</Button>
                </form>
                <Button onClick={clearComplete}>Clear</Button>
                {data.map(friend => (
                    <div key={friend.id} className={`${friend.complete ? "complete" : ""}`} onClick={() => toggleComplete(friend.fname)}>
                        <h2>{friend.fname} {friend.lname} {friend.happy ? "is happy" : "is not happy"}</h2>
                    </div>
                ))}
                <p>{formValues.fname} {formValues.lname} {formValues.happy ? "is happy" : ""}</p>
            </CardBody>
        </>
    )
}

export default FriendsForm;