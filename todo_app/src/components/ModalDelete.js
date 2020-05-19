import React from 'react';
import axios from 'axios';

function ModalDelete(props){

    const deleteTodo = () => {       
        axios.delete(`https://todoapp-e1226.firebaseio.com/todos/${props.todo.id}.json`)
                .then(() => {
                    props.close(false)
                }).catch((error) => alert(error))

    }

    return(
        <div className={props.open ? 'modal fade show' : 'modal fade'  } 
        style={{ display: props.open ? 'block' : 'none'  }}>
       <div className="modal-dialog">
           <div className="modal-content">
               <div className="modal-header">
                   <h5 className="modal-title">Borrar</h5>
                   <button className="close" onClick={ () => props.close(false)}>
                       <span>&times;</span>
                   </button>
               </div>

               <div className="modal-body">
                   <p>¿Estas seguro que deseas borrar:
                       <strong>{props.todo.todo}</strong> ? 
                    </p>
               </div>
               <div className="modal-footer">
                    <button className="btn btn-danger" onClick={deleteTodo}>Aceptar</button>
                    <button onClick={() => props.close(false)} className="btn btn-light">Cancelar</button>
               </div>
           </div>
       </div>
   </div>

    )

}

export default ModalDelete