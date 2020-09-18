import React from 'react';
import { Route, Link } from 'react-router-dom';
// import logo from './logo.svg';

// import { Card, Container, Row, Col } from 'reactstrap';

// import Counter from './components/counter/counter';
// import ColorPicker from './components/colorPicker/colorPicker';
// import HideElement from './components/hideElement/hideElement';
// import InputValue from './components/inputValue/inputValue';
// import UserProps from './components/userProps/userProps';
// import RandomColor from './components/randomColors/randomColor';
// import GhibliApi from './components/ghibliApi/ghibliAPI';
// import DogApi from './components/dogAPI/dogAPI';
// import RickAndMortyApi from './components/rickAndMorty/RickAndMorty';
// import NasaApi from './components/nasaApi/nasaApi';

import PageOne from './components/PAGE1/page1';

import './App.css';


function App() {




  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component={PageOne} />
      </header>
    </div>
  );
}

export default App;
