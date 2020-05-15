import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import CardTodo from './CardTodo';


function Home(){
    const [todos,setTodos] = useState([])

    useEffect(() => {
        axios.get('https://todoapp-e1226.firebaseio.com/todos.json')
            .then((response) => {
                console.log(response.data) //Esto me trajo firebase
                const elements = Object.entries(response.data) //esto combierte objetos en arreglos
                console.log(elements)
                const realData = elements.map((todo) =>{ //Convertir un arreglo de arreglos a un arreglo de objetos
                    const [id,data] = todo; //Estoy destructurando el arreglo de adentro
                    return {
                        id,
                        ...data //splitobject hago una copia de la data
                    }
                } )
                console.log(realData)
                setTodos(realData)
            }).catch((error) => {
                alert(error)
            })
    },[])

    return(
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                 {todos.map( (todo) => (<CardTodo nombre={todo.user} 
                    todo={todo.todo} prioridad={todo.prioridad} />))}
                </div>
            </div>
        </div>
    )

}

export default Home;