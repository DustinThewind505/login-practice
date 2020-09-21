import React from 'react';
import { avengersData } from './avengersData';



function AvengerBio(props) {

  const avenger = avengersData.find(hero => hero.id === Number(props.match.params.id))


    return(
        <>
        <img className='character-image' src={avenger.img} alt={avenger.name} />
        <h1>Ello Poppet: {avenger.name}</h1>
        </>
    )
}

export default AvengerBio;

