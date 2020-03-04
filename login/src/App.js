import React from 'react';

import Register from './Register';
import './App.css';
import {UserForm} from './UserForm';

function App() {
  return (
    <div className="App">
      <UserForm />
      <Register />
    </div>
  );
}

export default App;
