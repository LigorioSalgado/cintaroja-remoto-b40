import React from 'react';


function Controls(props){ //Props or properties
    return(
        <div className="App-buttons">
            <button onClick={props.aumentar} >Agregar</button>
            <button onClick={props.disminuir}>Disminuir</button>
            <button onClick={props.reset} >Reset</button>
        </div>
    )
}


export default Controls;