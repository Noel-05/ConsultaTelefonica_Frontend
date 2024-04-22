import React, { useState } from 'react'
import Cumpleanos from '../img/cumpleanos.png';
import ImagenNoDisponible from '../img/imagenNoDisponible.png';
import axios from 'axios';
import TablaTelefonos from './TablaTelefonos';

export default function TablaEmpleados({employeeList, setEmployeeList}) {

    const [employeePhones, setEmployeePhones] = useState([]);
    
    const [selectedRow, setSelectedRow] = useState();

    let today = new Date();
    today = today.getDate().toString().padStart(2, '0') + "/" + (today.getMonth() + 1).toString().padStart(2, '0');

    employeeList.map((employee) => {
        employee.if_jefe = employee.rol_code === 'D' || employee.rol_code === 'J' ? 'SI' : 'NO';
        employee.if_birthday = employee.birth_date.substring(0, employee.birth_date.length - 5) === today ? 'SI' : 'NO';
        
        return employee;
    });

    const getEmployeePhones = async(employeeId) => {
        setSelectedRow(employeeId);
        const getEmployeePhones = await axios.get(
            `${process.env.REACT_APP_API_URL}/empleadoTelefono/empleado/${employeeId}`
        );
        setEmployeePhones(getEmployeePhones.data);
    };

    const rowTableColor = (employeeId) => {
        return selectedRow === employeeId ? 'align-middle table-warning' : 'align-middle';
    };

    const getEmployeesWithPhones = async() => {
        const getEmployeesWithPhones = await axios.get(
            `${process.env.REACT_APP_API_URL}/empleado/telefonos`
        );
        setEmployeeList(getEmployeesWithPhones.data);
    };
    
    return (
        <div className='container-fluid text-start px-4'>
            <div className='row'>

                <div className='col-9'>
                    <div className="container mt-4">
                        
                        <div className="card border-gray">
                            <div className="card-header btnTableHeader">
                                <button 
                                    type="button" 
                                    className="btn btn-outline-dark btnTable"
                                    onClick={getEmployeesWithPhones}
                                >
                                    Empleados con teléfono
                                </button>
                            </div>

                            <div className="card-body">
                                <table className="table table-hover table-sm tableFont">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>Cumpleañero del día</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Puesto</th>
                                            <th scope="col">Dependencia</th>
                                            <th scope="col">Unidad</th>
                                            <th scope="col">Jefe</th>
                                            <th scope="col" className='text-center'>Foto</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            employeeList.map((employee) => (
                                                <tr 
                                                    key={employee.id} 
                                                    className={rowTableColor(employee.id)}
                                                    onClick={() => getEmployeePhones(employee.id)}
                                                >
                                                    <td className='text-center'>
                                                        {
                                                            employee.if_birthday === 'SI' ?
                                                                <img src={Cumpleanos} 
                                                                    alt='Cumpleaños' 
                                                                    className='imgCumple'/>
                                                            : 
                                                                ''
                                                        }
                                                    </td>
                                                    <td>{employee.first_name} {employee.last_name}</td>
                                                    <td>{employee.puesto_name}</td>
                                                    <td>{employee.dependencia_name}</td>
                                                    <td>{employee.unidad_name}</td>
                                                    <td>{employee.if_jefe}</td>
                                                    <td>
                                                        <img src={ImagenNoDisponible} 
                                                            alt='Foto'    
                                                            className='imgCumple'/>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>

                <TablaTelefonos employeePhones={employeePhones} />

            </div>
        </div>
    )
}
