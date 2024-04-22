import React from 'react'

export default function TablaTelefonos({employeePhones}) {
    return (
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
                                    employeePhones.map((telefono) => (
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
    )
}
