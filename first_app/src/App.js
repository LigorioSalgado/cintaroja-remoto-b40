import React, { useState /*Esto es un hook*/ } /*Esto es  destructuring */ from 'react';  //ES6 Notation ya no uso require()
import logo from './logo.svg';
import './App.css';
import Count from './Count';
import Controls from './Controls';

function App() {
  const [count, setCount] = useState(0);//Hook recibe como parametro el valor inicial del estado
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-controls" >
          <Count num={count} /> {/* num es una propiedad(prop) de Count  */}
          <Controls 
            aumentar={() => setCount(count + 1) }
            disminuir={ () => setCount(count - 1) }
            reset={() => setCount(0)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
