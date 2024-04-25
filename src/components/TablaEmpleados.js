import React, { useState } from 'react'
import Cumpleanos from '../img/cumpleanos.png';
import ImagenNoDisponible from '../img/imagenNoDisponible.png';
import axios from 'axios';
import TablaTelefonos from './TablaTelefonos';

export default function TablaEmpleados({employeeList, setEmployeeList}) {

    // Declaración de la variable para guardar el listado de Telefonos del Empleado seleccionado.
    const [employeePhones, setEmployeePhones] = useState([]);
    
    // Declaración de la variable para guardar la fila seleccionada.
    const [selectedRow, setSelectedRow] = useState();


    /*  Transformación de la fecha actual para guardarla en la variable today con el formato dd/MM. 
        Se utiliza para verificar si alguien esta cumpliendo años este día. 
        Se usa la función padStart(2, '0') en la cual el primer argumento indica el length que debe tener 
        y el segundo argumento indica con que se va a rellenar al lado izquierdo para llegar a ese length.*/
    let today = new Date();
    today = today.getDate().toString().padStart(2, '0') + "/" + (today.getMonth() + 1).toString().padStart(2, '0');

    // Transformación del listado de Empleados para verificar si el Empleado es jefe y/o si esta cumpliendo años.
    employeeList.map((employee) => {
        employee.if_jefe = employee.rol_code === 'D' || employee.rol_code === 'J' ? 'SI' : 'NO';
        employee.if_birthday = employee.birth_date.substring(0, employee.birth_date.length - 5) === today ? 'SI' : 'NO';
        
        return employee;
    });


    // Función para llamar a la api para recuperar todos los Telefonos del Empleado seleccionado.
    const getEmployeePhones = async(employeeId) => {
        setSelectedRow(employeeId);
        const getEmployeePhones = await axios.get(
            `${process.env.REACT_APP_API_URL}/empleadoTelefono/empleado/${employeeId}`
        );
        setEmployeePhones(getEmployeePhones.data);
    };

    // Función para remarcar la fila del Empleado seleccionado por medio de la clase table-warning de Boostrap.
    const rowTableColor = (employeeId) => {
        return selectedRow === employeeId ? 'align-middle table-warning' : 'align-middle';
    };

    /*  Función para llamar a la api para recuperar todos los empleados que tienen telefonos. 
        El listado de empleados se mandan al componente padre por medio de la funcion setEmployeeList que se recibe como prop. */
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
