import { Link, useLocation } from 'react-router-dom'

export default function TabItemDropDown({dropDownName, dropDownOptions}) {
    let location = useLocation().pathname;

    return (
        <li className="nav-item dropdown">
            <Link 
                className={`nav-link dropdown-toggle navTextColor navTextSmall`}
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                {dropDownName}
            </Link>

            <ul className="dropdown-menu">
                {
                    dropDownOptions.map((option, index) => (
                        <li key={index}>
                            <Link 
                                className={`
                                    dropdown-item navTextColor navTextSmall navActiveColorDropDown 
                                    ${location === option.path ? 'navActiveColor active' : ''}
                                `}
                                to={option.path}
                            >
                                {option.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>   
        </li>
    )
}
