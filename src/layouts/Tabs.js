import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Tabs() {
    let location = useLocation().pathname;
    
    const active = " navActiveColor active";

    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className={`nav-link navTextColor navTextSmall ${location === '/consultaEmpleados' ? active : ''}`}
                    to={'/consultaEmpleados'}>
                    POR EMPLEADO
                </Link>
            </li>

            <li className="nav-item">
                <Link className={`nav-link navTextColor navTextSmall ${location === '/consultaUnidad' ? active : ''}`} 
                    to={'/consultaUnidad'}>
                    POR UNIDAD
                </Link>
            </li>
            
            <li className="nav-item">
                <Link className={`nav-link navTextColor navTextSmall ${location === '/cumpleaneros' ? active : ''}`} 
                    to={'/cumpleaneros'}>
                    CUMPLEAÑEROS DEL DIA
                </Link>
            </li>
        </ul>
    )
}