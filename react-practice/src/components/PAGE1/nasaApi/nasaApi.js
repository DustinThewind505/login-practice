import React, { useEffect, useState } from 'react';
import { CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';
import axios from 'axios';
import { Alert } from 'reactstrap';


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
            <CardHeader>Nasa <span style={fontStyles}>API</span></CardHeader>
            <CardBody>
            <Alert color="primary">
                This is a primary alert — check it out!
            </Alert>
            <CardTitle>{imageObj.title}</CardTitle>
            {
                imageObj.media_type === "video" ? <iframe src={imageObj.url} title={imageObj.title} /> : <img src={imageObj.ur} alt={imageObj.title} />
            }
            <CardText>{imageObj.explanation}</CardText>
            </CardBody>
        </>
    )
}

export default NasaApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ