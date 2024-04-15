import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
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
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div>
                        <div className="row sideBarButton">
                            <Link className="btn btn-outline-success btnSidebar" to={'/'}>Inicio</Link>   
                        </div>

                        <div className="row sideBarButton">
                            <Link className="btn btn-outline-primary btnSidebar sidebarColor" to={'/'}>Inicar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
