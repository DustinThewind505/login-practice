import React from 'react';



function AvengerBio(props) {

  const avenger = props.avengersData.find(hero => hero.id === Number(props.match.params.id))


  return (
    <>
      <img className='character-image' src={avenger.img} alt={avenger.name} />
      <h1>{avenger.name}</h1>
      <h3>({avenger.nickname})</h3>
      <p>{avenger.description}</p>
    </>
  )
}

export default AvengerBio;

