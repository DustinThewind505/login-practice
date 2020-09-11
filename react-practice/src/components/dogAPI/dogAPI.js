import React, { useState, useEffect } from 'react';
import axios from 'axios';


function DogApi() {
    const [dogPic, setDogPic] = useState("");
    const [breed, setBreed] = useState("dalmatian")

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => setDogPic(res.data.message))
        .catch(err => console.error(err))

    }, [breed])

    console.log(dogPic.data)
    return (
        <>
            <h2>Dog API</h2>
            <img src={dogPic} alt="dog smiling" />
            <div>
                <button onClick={() => setBreed("dalmatian")}>Dalmatian</button>
                <button onClick={() => setBreed("beagle")}>Beagle</button>
                <button onClick={() => setBreed("rottweiler")}>Rottweiler</button>
                <button onClick={() => setBreed("african")}>African</button>
            </div>
        </>
    )
}

export default DogApi;