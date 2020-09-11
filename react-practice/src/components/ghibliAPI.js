import React, { useState, useEffect } from 'react';
import axios from 'axios';



function GhibliApi() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films")
            .then(res => setData(res.data))
            .catch(err => console.error(err))

    }, [])

    console.log(data)
    return (
        <>
            <h2>Ghibli API</h2>
            <div>
                {data.map(movie => <p>{movie.title} Released: {movie.release_date}</p>)}
            </div>
        </>
    )
}

export default GhibliApi;