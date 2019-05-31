import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FetchExample} from './component/FetchExample'

function App() {
  const sum = (a:number,b:number):number=>{
    return a+b
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {sum(2,5)}
          <br></br>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FetchExample/>
      </header>
    </div>
  );
}

export default App;
