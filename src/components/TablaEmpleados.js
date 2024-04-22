import React, { useState } from 'react'
import Cumpleanos from '../img/cumpleanos.png';
import ImagenNoDisponible from '../img/imagenNoDisponible.png';
import axios from 'axios';

export default function TablaEmpleados(props) {

    const [telefonosEmpleado, setTelefonosEmpleado] = useState([]);
    
    const [filaSeleccionada, setFilaSeleccionada] = useState();

    let today = new Date();
    today = today.getDate().toString().padStart(2, '0') + "/" + (today.getMonth() + 1).toString().padStart(2, '0');

    props.empleadosList.map((empleado) => {
        empleado.if_jefe = empleado.rol_code === 'D' || empleado.rol_code === 'J' ? 'SI' : 'NO';
        empleado.if_birthday = empleado.birth_date.substring(0, empleado.birth_date.length - 5) === today ? 'SI' : 'NO';
        
        return empleado;
    });

    const getTelefonosEmpleado = async(empleadoId) => {
        setFilaSeleccionada(empleadoId);
        const getTelefonosEmpleado = await axios.get(
            `${process.env.REACT_APP_API_URL}/empleadoTelefono/empleado/${empleadoId}`
        );
        setTelefonosEmpleado(getTelefonosEmpleado.data);
    };

    const colorFilaTabla = (empleadoId) => {
        return filaSeleccionada === empleadoId ? 'align-middle table-warning' : 'align-middle';
    }

    return (
        <div className='container-fluid text-start px-4'>
            <div className='row'>

                <div className='col-9'>
                    <div className="container mt-4">
                        
                        <div className="card border-gray">
                            <div className="card-header btnTableHeader">
                                <button type="button" className="btn btn-outline-dark btnTable">Empleados con teléfono</button>
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
                                            props.empleadosList.map((empleado) => (
                                                <tr 
                                                    key={empleado.id} 
                                                    className={colorFilaTabla(empleado.id)}
                                                    onClick={() => getTelefonosEmpleado(empleado.id)}
                                                >
                                                    <td className='text-center'>
                                                        {
                                                            empleado.if_birthday === 'SI' ?
                                                                <img src={Cumpleanos} 
                                                                    alt='Cumpleaños' 
                                                                    className='imgCumple'/>
                                                            : 
                                                                ''
                                                        }
                                                    </td>
                                                    <td>{empleado.first_name} {empleado.last_name}</td>
                                                    <td>{empleado.puesto_name}</td>
                                                    <td>{empleado.dependencia_name}</td>
                                                    <td>{empleado.unidad_name}</td>
                                                    <td>{empleado.if_jefe}</td>
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


                <div className='col-3'>
                    <div className="container mt-4">
                        
                        <div className="card border-gray">
                            <div className="card-header">
                                <span>Teléfonos del empleado</span>
                            </div>

                            <div className="card-body">
                                <table className="table table-striped table-hover table-sm tableFont">
                                    <thead>
                                        <tr>
                                            <th scope="col">Teléfono</th>
                                            <th scope="col">Tipo de Teléfono</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            telefonosEmpleado.map((telefono) => (
                                                <tr key={telefono.id}>
                                                    <td>{telefono.phone_number}</td>
                                                    <td>{telefono.tipo_telefono_name}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
