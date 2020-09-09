import React, { useState } from 'react';
import logo from './logo.svg';

import Counter from './components/counter';
import ColorPicker from './components/colorPicker';

import './App.css';




function App() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("White");

  const fontStyles = {
    color: ""
  }

  if (color === "Blue") {
    fontStyles.color = "blue";
  } else if (color === "Red") {
    fontStyles.color = "red";
  } else if (color === "Green") {
    fontStyles.color = "green";
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* ======== Counter ======== */}
        <section>
          <Counter count={count} setCount={setCount} fontStyles={fontStyles}/>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Color Picker ======== */}
        <section>
          <ColorPicker color={color} setColor={setColor} fontStyles={fontStyles}/>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section>
          <h1>CARD</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section>
          <h1>CARD</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
      </header>
    </div>
  );
}

export default App;
