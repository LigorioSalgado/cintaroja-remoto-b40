import React from 'react';


function CardTodo(props){

    const bg ={
        "1":"card text-white bg-success",
        "2":"card text-white bg-warning",
        "3":"card text-white bg-danger"
    }

    return(
        <div className={bg[props.prioridad]}>
            <div className="card-header">  Creado por:{props.nombre}</div>
            <div className="card-body">
                <p className="card-text">{props.todo}</p>
            </div>
        </div>
    )
}

export default CardTodo