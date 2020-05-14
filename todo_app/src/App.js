import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [user,setUser] = useState('');
  const [todo,setTodo] = useState('');
  const [prioridad, setPrioridad] = useState('3');

  const clear = () => {
    setPrioridad('3')
    setTodo('')
    setUser('')
  }

  const saveTodo = (event) => {
    event.preventDefault();
    axios.post('https://todoapp-e1226.firebaseio.com/todos.json', 
    { user,todo, prioridad}).then(() => {
      alert("Se a creado el Todo con exito")
      clear()
    }).catch(() => {
      alert("Hubo un problema al crear el todo")
    }) //Naming principle Es6

  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8 col-sm-8">
            <form onSubmit={saveTodo}>
              <div className="form-group">
                <label htmlFor="">Usuario:</label>
                <input type="text"
                  onChange={(event) => setUser(event.target.value)} 
                  className="form-control" 
                  name="user"
                  value={user}
                  placeholder="Mi nombre" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="">To-Do:</label>
                <textarea name="todo" id="" 
                  required
                  onChange={(event) => setTodo(event.target.value) }
                  className="form-control" 
                  value={todo}
                  cols="30" 
                  rows="10"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="">Prioridad:</label>
                <select name="prioridad" id=""
                  required
                  value={prioridad} 
                  onChange={(event) => setPrioridad(event.target.value)}
                className="form-control">
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
