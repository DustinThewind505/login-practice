import React, { useEffect, useState } from 'react';
import axios from 'axios';


function NasaApi({ fontStyles }) {
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
            <h2>Nasa <span style={fontStyles}>API</span></h2>
            <h4>{imageObj.title}</h4>
            {
                imageObj.media_type === "video" ? <iframe src={imageObj.url} title={imageObj.title} /> : <img src={imageObj.ur} alt={imageObj.title}/>
            }
            <p>{imageObj.explanation}</p>
        </>
    )
}

export default NasaApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ