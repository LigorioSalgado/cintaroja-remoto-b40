import React from 'react';


function ModalDelet(props){
    return(
        <div className={props.open ? 'modal fade show' : 'modal fade'  } 
        style={{ display: props.open ? 'block' : 'none'  }}>
       <div className="modal-dialog">
           <div className="modal-content">
               <div className="modal-header">
                   <h5 className="modal-title">Editar</h5>
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
                    <button className="btn btn-danger">Aceptar</button>
                    <button className="btn btn-light">Cancelar</button>
               </div>
           </div>
       </div>
   </div>

    )

}