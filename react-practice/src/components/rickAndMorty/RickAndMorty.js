import React, { useState, useEffect } from 'react';
import axios from 'axios';


function RickAndMortyApi() {
    const [data, setData] = useState([]);
    const [characterNumber, setCharacterNumber] = useState(1);

    const handleNext = () => {
        setCharacterNumber(characterNumber + 1)
    }

    const handlePrevious = () => {
        setCharacterNumber(characterNumber - 1)
    }

    const handleSkipFive = () => {
        setCharacterNumber(characterNumber + 10)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${characterNumber}`)
            .then(res => {
                console.log(res);
                setData(res.data);

            })
            .catch(err => {
                console.log('Error', err)
            })

    }, [characterNumber]);

    console.log("Data:", data)
    return (
        <>
            <h1>Rick and Morty API</h1>
            <img src={data.image} alt="morty smith" />
            <h4>{data.name}</h4>
            <div className="rick-and-morty-buttons">
                <button onClick={handleNext}>Next</button>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleSkipFive}>Next Page</button>
            </div>
        </>
    )
}

export default RickAndMortyApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ