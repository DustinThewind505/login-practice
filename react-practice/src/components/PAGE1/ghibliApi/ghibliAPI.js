import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import axios from 'axios';



function GhibliApi({ fontStyles }) {
    const [data, setData] = useState([])
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

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
                    {data.map(movie => (
                        <div key={movie.title}>
                            <Button id="Popover1" type="button">
                                Launch Popover
                            </Button>
                            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                                <PopoverHeader>Popover Title</PopoverHeader>
                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                            </Popover>
                        </div>))}
                </div>
            </CardBody>
        </>
    )
}

export default GhibliApi;