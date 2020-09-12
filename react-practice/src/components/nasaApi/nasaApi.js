import React, { useEffect, useState } from 'react';
import axios from 'axios';


function NasaApi() {
    const [imageObj, setImageObj] = useState("");

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ`)
            .then(res => {
                console.log(res.data)
                setImageObj(res.data)
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }, [])

    return (
        <>
            <h2>Nasa API</h2>
            <h4>{imageObj.title}</h4>
            {
                imageObj.media_type === "video" ? <iframe src={imageObj.url} /> : <img src={imageObj.ur} />
            }
            <p>{imageObj.explanation}</p>
        </>
    )
}

export default NasaApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ