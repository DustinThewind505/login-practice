import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';




function App() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("yellow");

  const fontStyles = {
    color: "yellow"
  }

  if(color === "blue"){
    fontStyles.color = "blue";
  } else if(color === "red"){
    fontStyles.color = "red";
  } else if(color === "green"){
    fontStyles.color = "lawngreen";
  } 

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Counter</h1>
          <p>{`Count: `}{count}</p>
          <div>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count * 2)}>Multiply</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section>
          <h1>Color Picker</h1>
          <p>{`Color: `}<span style={fontStyles}>{color}</span></p>
          <div >
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
          </div>
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
        <section>
          <h1>CARD</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
      </header>
    </div>
  );
}

export default App;
