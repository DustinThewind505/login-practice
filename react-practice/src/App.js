import React from 'react';
import { Route, Link } from 'react-router-dom';

import PageOne from './components/PAGE1/page1';
import AvengersApp from './components/PAGE2/avengersApp';

import './App.css';

const Home = props => <h1>Home Component</h1>;


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page1'>Page One</Link></li>
          <li><Link to='/page2' >Avengers APP</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/page1' component={PageOne} />
        <Route path='/page2' component={AvengersApp} />
      </header>
    </div>
  );
}

export default App;
