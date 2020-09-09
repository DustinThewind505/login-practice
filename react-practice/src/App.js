import React, { useState } from 'react';
import logo from './logo.svg';

import Counter from './components/counter';
import ColorPicker from './components/colorPicker';
import HideElement from './components/hideElement';

import './App.css';




function App() {

  // ======== Counter ========
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1)
  }

  const multiply = () => {
    setCount(count * 2)
  }

  const reset = () => {
    setCount(0)
  }

  // ======== Color Picker ========
  const [color, setColor] = useState("White");
  // ======== Hide Element ========
  const [star, setStar] = useState(false)

  const toggleStar = () => {
    setStar(!star)
}


  // === Styles ===
  const fontStyles = {
    color: ""
  }
  
  const bgStyles = {
    background: star ? "green" : "",
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
          <Counter count={count} setCount={setCount} fontStyles={fontStyles} add={add} multiply={multiply} reset={reset}/>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Color Picker ======== */}
        <section>
          <ColorPicker color={color} setColor={setColor} fontStyles={fontStyles}/>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section style={bgStyles}>
          <HideElement star={star} setStar={setStar} toggleStar={toggleStar}/>
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
