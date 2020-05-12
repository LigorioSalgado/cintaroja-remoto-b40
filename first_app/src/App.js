import React, { useState /*Esto es un hook*/ } /*Esto es  destructuring */ from 'react';  //ES6 Notation ya no uso require()
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-controls" >
          <h2>0</h2>
          <div className="App-buttons">
            <button>Agregar</button>
            <button>Disminuir</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
