import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function TabItem({tabName, pathName}) {
    let location = useLocation().pathname;

    return (
        <li className="nav-item">
            <Link 
                className={`
                    nav-link navTextColor navTextSmall 
                    ${location === pathName ? 'navActiveColor active' : ''}
                `} 
                to={pathName}
            >
                {tabName}
            </Link>
        </li>
    )
}
