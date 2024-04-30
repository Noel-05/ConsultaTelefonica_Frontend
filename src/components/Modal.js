import axios from 'axios'
import React from 'react'

export default function Modal({modalProperties, refreshFunction}) {

    const deleteEmployee = async() => {
        await axios.delete(modalProperties.path);
        refreshFunction();
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            {modalProperties.title}
                        </h1>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                        ></button>
                    </div>
                    
                    {/* <div className="modal-body"> {modalProperties.body} </div> */}
                    
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-outline-danger" 
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>

                        <button 
                            type="button" 
                            className="btn btn-outline-dark" 
                            data-bs-dismiss="modal" 
                            onClick={deleteEmployee}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
