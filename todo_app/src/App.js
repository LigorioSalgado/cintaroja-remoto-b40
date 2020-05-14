import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8 col-sm-8">
            <form>
              <div className="form-group">
                <label htmlFor="">Usuario:</label>
                <input type="text" 
                  className="form-control" 
                  name="user" 
                  placeholder="Mi nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="">To-Do:</label>
                <textarea name="todo" id="" 
                  className="form-control" 
                  cols="30" 
                  rows="10"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="">Prioridad:</label>
                <select name="prioridad" id="" className="form-control">
                  <option value="3">Alta</option>
                  <option value="2">Media</option>
                  <option value="1">Baja</option>
                </select>
              </div>
              <button type="submit" className="btn btn-info">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
