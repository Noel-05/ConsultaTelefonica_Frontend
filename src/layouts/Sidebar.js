import React from 'react'

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
                    tabindex="-1" 
                    id="offcanvasExample" 
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div>
                        <div className="row sideBarButton">
                            <button className="btn btn-outline-success btnSidebar" type="button">Inicio</button>   
                        </div>

                        <div className="row sideBarButton">
                            <button className="btn btn-outline-primary btnSidebar sidebarColor" type="button">Inicar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
