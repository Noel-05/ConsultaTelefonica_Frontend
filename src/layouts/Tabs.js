import React from 'react'

export default function Tabs() {
    const active = " navActiveColor active";

    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className={"nav-link navTextColor navTextSmall" + active} href='/'>POR EMPLEADO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link navTextColor navTextSmall" href='/'>POR UNIDAD</a>
            </li>
            <li className="nav-item">
                <a className="nav-link navTextColor navTextSmall" href='/'>CUMPLEAÑEROS DEL DIA</a>
            </li>
        </ul>
    )
}