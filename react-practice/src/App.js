import React from 'react';
import { Route, Link } from 'react-router-dom';

import PageOne from './components/PAGE1/page1';
import AvengersApp from './components/PAGE2/avengersApp';
import Avenger from './components/PAGE2/avengerBio';

import { avengersData } from './components/PAGE2/avengersData';
import './App.css';
import logo from './logo.svg';

const Home = props => {
  return <div>
    <img src='http://cdn2.hubspot.net/hub/189441/file-476147663-png/images/icons/html-code-brackets.png?t=1390636021000' alt="empty code brackets" />
    
    <h1>Home Component</h1>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
};


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/react-components'>React Components</Link></li>
          <li><Link to='/avengers' >Avengers APP</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/react-components' component={PageOne} />
        <Route exact path='/avengers' render={props => <AvengersApp {...props} avengersData={avengersData} />} />
        <Route path='/avengers/:id' render={props => <Avenger {...props} avengersData={avengersData} />} />
      </header>
    </div>
  );
}

export default App;
