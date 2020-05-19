import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import CardTodo from './CardTodo';
import Navbar from './Navbar';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';


function Home(){
    const [todosAlta,setTodosAlta] = useState([])
    const [todosMedia,setTodosMedia] = useState([])
    const [todosBaja,setTodosBaja] = useState([])
    const [isOpen,setIsOpen] = useState(false)
    const [currentTodo,setCurrentTodo] = useState({})
    const [isOpenDelete, setIsOpenDelete] = useState(false)


    useEffect(() => {
        axios.get('https://todoapp-e1226.firebaseio.com/todos.json')
            .then((response) => {
                console.log(response.data) //Esto me trajo firebase
                const elements = Object.entries(response.data).reverse() //esto combierte objetos en arreglos
                console.log(elements)
                const realData = elements.map((todo) =>{ //Convertir un arreglo de arreglos a un arreglo de objetos
                    const [id,data] = todo; //Estoy destructurando el arreglo de adentro
                    return {
                        id,
                        ...data //split object hago una copia de la data
                    }
                } )
                console.log(realData)
                const alta = realData.filter((todo) => todo.prioridad === "3") //filtra todos por prioridad 3
                const media = realData.filter((todo) => todo.prioridad === "2" ) //filtra todos por prioridad 2
                const baja = realData.filter((todo) => todo.prioridad === "1" ) //filtra todos por prioridad 1
                setTodosAlta(alta)
                setTodosMedia(media)
                setTodosBaja(baja)
            }).catch((error) => {
                alert(error)
            })
    },[isOpen,isOpenDelete])

    return(
        <div className="App">
            <Navbar/>
            <div className="container mt-5 pt-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-4">
                        <a href="/createTodo" className="btn btn-lg bg-dark text-white">
                          Crear to-do
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center">   
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <h4>Importantes</h4>
                        { todosAlta.map((todo) => {
                            return(
                                <CardTodo 
                                    nombre={todo.user}  
                                    todo={todo.todo}
                                    prioridad={todo.prioridad}
                                    edit={ () => { 
                                        setCurrentTodo(todo); 
                                        setIsOpen(true) 
                                    }}
                                    delete={() => {
                                        setCurrentTodo(todo); 
                                        setIsOpenDelete(true) 
                                    }}
                                />
                            )
                        }) }
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                    <h4>No pasa nada</h4>
                    { todosMedia.map((todo) => {
                            return(
                                <CardTodo 
                                    nombre={todo.user}  
                                    todo={todo.todo}
                                    prioridad={todo.prioridad}
                                    edit={() => { 
                                        setCurrentTodo(todo); 
                                        setIsOpen(true) 
                                    }}
                                    delete={() => {
                                        setCurrentTodo(todo); 
                                        setIsOpenDelete(true) 
                                    }}
                                />
                            )
                        }) }
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                    <h4>Pueden esperar</h4>
                    { todosBaja.map((todo) => {
                            return(
                                <CardTodo 
                                    nombre={todo.user}  
                                    todo={todo.todo}
                                    prioridad={todo.prioridad}
                                    edit={() => { 
                                        setCurrentTodo(todo); 
                                        setIsOpen(true) 
                                    }}
                                    delete={() => {
                                        setCurrentTodo(todo); 
                                        setIsOpenDelete(true) 
                                    }}
                                />
                            )
                        }) }
                    </div>

                </div>
            </div>
            <ModalEdit open={isOpen} close={setIsOpen} todo={currentTodo} />
            <ModalDelete open={isOpenDelete} close={setIsOpenDelete} todo={currentTodo} />
        </div>
    )

}

export default Home;