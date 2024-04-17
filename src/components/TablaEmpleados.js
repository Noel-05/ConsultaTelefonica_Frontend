import React from 'react'

export default function TablaEmpleados(props) {
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
                                <table className="table table-striped table-hover table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col" className='text-center'>Cumpleañero del día</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Puesto</th>
                                            <th scope="col">Dependencia</th>
                                            <th scope="col">Unidad</th>
                                            <th scope="col">Jefe</th>
                                            <th scope="col">Foto</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            props.empleadosList.map((empleado, index) => (
                                                <tr>
                                                    <th className='text-center'>{empleado.birth_date}</th>
                                                    <td>{empleado.first_name} {empleado.last_name}</td>
                                                    <td>{empleado.puesto.name}</td>
                                                    <td>{empleado.puesto.unidad.dependencia.name}</td>
                                                    <td>{empleado.puesto.unidad.name}</td>
                                                    <td className='text-center'>{empleado.puesto.rol.name}</td>
                                                    <td></td>
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
                                <table className="table table-striped table-hover table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Teléfono</th>
                                            <th scope="col">Tipo de Teléfono</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>7485 9632</td>
                                            <td>Celular Oficina</td>
                                        </tr>
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
