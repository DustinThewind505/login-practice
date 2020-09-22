import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import AvengerInfo from './avengerDescription';
import AvengerMovies from './avengerMovies';


function AvengerBio(props) {

  const avenger = props.avengersData.find(hero => hero.id === Number(props.match.params.id))

  return (
    <>
      <img className='character-image' src={avenger.img} alt={avenger.name} />
      <div className='character-info-wrapper'>
      <h1>{avenger.name}</h1>
      <h3>({avenger.nickname})</h3>
      <ul className='bio-list'>
        <li><NavLink to={`/avengers/${avenger.id}/info`}>Bio</NavLink></li>
        <li><NavLink to={`/avengers/${avenger.id}/movies`}>Movies</NavLink></li>
      </ul>
      
      
      <Route path='/avengers/:id/info' render={() => <AvengerInfo {...props} avenger={avenger} />} />
      <Route exact path='/avengers/:id/movies' render={() => <AvengerMovies {...props} avenger={avenger} />} />
      </div>
      <button onClick={() => props.history.push('/avengers')}>Go Back</button>
    </>
  )
}

export default AvengerBio;

