import React, { useState, useEffect } from 'react';
import axios from 'axios';



function GhibliApi({ fontStyles }) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films")
            .then(res => setData(res.data))
            .catch(err => console.error(err))

    }, [])

    return (
        <>
            <h2>Ghibli <span style={fontStyles}>API</span></h2>
            <div>
                {data.map(movie => <p><strong>{movie.title}</strong>: Released - {movie.release_date}</p>)}
            </div>
        </>
    )
}

export default GhibliApi;