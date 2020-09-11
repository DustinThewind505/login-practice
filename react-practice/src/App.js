import React, { useState } from 'react';
import logo from './logo.svg';

import Counter from './components/counter/counter';
import ColorPicker from './components/colorPicker/colorPicker';
import HideElement from './components/hideElement/hideElement';
import InputValue from './components/inputValue/inputValue';
import UserProps from './components/userProps/userProps';
import RandomColor from './components/randomColors/randomColor';
import GhibliApi from './components/ghibliApi/ghibliAPI';
import DogApi from './components/dogAPI/dogAPI';

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


  // ======== Random Color ========
  const [randomColor, setRandomColor] = useState("cadetBlue");

  const changeColor = arr => {
    setRandomColor(arr[Math.floor(Math.random() * arr.length)])
  }


  // === Styles ===
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

  const bgStyles = {
    background: randomColor,
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* ======== Counter ======== */}
        <section style={bgStyles}>
          <Counter count={count} setCount={setCount} fontStyles={fontStyles} add={add} multiply={multiply} reset={reset} />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Color Picker ======== */}
        <section style={bgStyles}>
          <ColorPicker color={color} setColor={setColor} fontStyles={fontStyles} />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Hide Element ======== */}
        <section style={{ background: star ? randomColor : "", }} >
          <HideElement star={star} setStar={setStar} toggleStar={toggleStar} />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Random Color ======== */}
        <section style={bgStyles}>
          <RandomColor randomColor={randomColor} changeColor={changeColor} />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== User Props ======== */}
        <section style={bgStyles}>
          <UserProps randomColor={randomColor} />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Input Value ======== */}
        <section style={bgStyles}>
          <InputValue randomColor={randomColor} />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Ghibli API ======== */}
        <section style={bgStyles} id="ghibli-api">
          <GhibliApi />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        {/* ======== Dog API ======== */}
        <section style={bgStyles} id="ghibli-api">
          <DogApi />
          <img src={logo} className="App-logo" alt="logo" />
        </section>
      </header>
    </div>
  );
}

export default App;
