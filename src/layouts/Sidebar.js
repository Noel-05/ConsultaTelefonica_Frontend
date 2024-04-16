import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    let navigate = useNavigate();
    
    const onClickInicio = (e) => {
        navigate("/");
    }

    const onClickLogin = (e) => {
        navigate("/");
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid" >
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasExample" 
                    aria-controls="offcanvasExample"
                >
                    <span className="navbar-toggler-icon linesButton"></span>
                </button>

                <div 
                    className="offcanvas offcanvas-start" 
                    tabIndex="-1" 
                    id="offcanvasExample" 
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                        <button type="button" 
                            className="btn-close" 
                            data-bs-dismiss="offcanvas" 
                            aria-label="Close"
                        ></button>
                    </div>

                    <div>
                        <div className="row sideBarButton">
                            <button type="button" 
                                className="btn btn-outline-success btnSidebar" 
                                data-bs-dismiss="offcanvas" 
                                onClick={(e) => onClickInicio(e)}
                            >
                                Inicio
                            </button>   
                        </div>

                        <div className="row sideBarButton">
                            <button type="button" 
                                className="btn btn-outline-primary btnSidebar sidebarColor" 
                                data-bs-dismiss="offcanvas" 
                                onClick={(e) => onClickLogin(e)}
                            >
                                Inicar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
