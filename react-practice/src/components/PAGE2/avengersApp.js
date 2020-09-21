import React from 'react';
import { Link } from 'react-router-dom';

import { avengersData } from './avengersData';
import './avengersApp.css';



function AvengersApp(){



    return(
        <div className='characters-list-wrapper'>
          {avengersData.map(avenger => 
            <Link to={`/avengers/${avenger.id}`} className='character-card' key={avenger.id}>
              <img src={avenger.thumbnail} alt={avenger.name} />
              <h2>{avenger.name}</h2>
              <h3>({avenger.nickname})</h3>
            </Link>
          )}
        </div>
    )
}

export default AvengersApp;
