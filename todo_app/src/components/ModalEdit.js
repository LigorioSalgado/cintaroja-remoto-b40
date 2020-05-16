import React from 'react';


function ModalEdit(props){

    return(
        <div className={props.open ? 'modal fade show' : 'modal fade'  } 
             style={{ display: props.open ? 'block' : 'none'  }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar</h5>
                        <button className="close">
                            <span>&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Nombre:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">To-do:</label>
                                        <textarea className="form-control" name=""  cols="30" rows="10">
                                        </textarea>
                                    </div>
                                    <div className="form-group" >
                                        <label htmlFor="">Prioridad:</label>
                                        <select className="form-control" name="" id="">
                                            <option value="3">Alta</option>
                                            <option value="2">Media</option>
                                            <option value="1">Baja</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-info">Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ModalEdit;