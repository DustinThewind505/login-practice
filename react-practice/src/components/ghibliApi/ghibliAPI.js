import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
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
            <CardHeader>Ghibli <span style={fontStyles}>API</span></CardHeader>
            <CardBody>
            <div>
                {data.map(movie => <p><strong>{movie.title}</strong>: Released - {movie.release_date}</p>)}
            </div>
            </CardBody>
        </>
    )
}

export default GhibliApi;