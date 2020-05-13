import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 

function App() {
  const [search,setSearch] = useState('') //Este va a guardar el valor a buscar de los gifs
  const [gifs, setGifs] = useState(''); //Esto va a guardar los gifs de la api

  useEffect(() => {
    console.log('Desde use effect')
    console.log(search)
  },[])

  const findGif = (event) => {
    event.preventDefault() //Evita que recargue la pagina al momento de hacer submit al form
    //llamada a la api

  }

  return (
    <div className="App">
      <h2>Giphy App</h2>
      <div  className="container my-5">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8">
              <form onSubmit={findGif} className="form-inline justify-content-center">
                  <input className="form-control" 
                    onChange={(event) => setSearch(event.target.value) } 
                    placeholder="Ej. gatitos" name="gif"  
                  />
                  <button type="submit" className="btn  btn-success">Buscar</button>
              </form>
            </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card bg-dark text-white">
                  <img className="card-img" alt="" src="https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif" />
                  <h5 className="card-title">Pikachu en piscina</h5>
              </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card bg-dark text-white">
                  <img className="card-img" alt="" src="https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif" />
                  <h5 className="card-title">Pikachu en piscina</h5>
              </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card bg-dark text-white">
                  <img className="card-img" alt="" src="https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif" />
                  <h5 className="card-title">Pikachu en piscina</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
