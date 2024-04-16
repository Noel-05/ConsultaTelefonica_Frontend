import React from 'react'

export default function ConsultaEmpleados() {
  return (
    <div>
      <div className="input-group mb-3 inputSearchLarge">
        <span className="input-group-text inputLeftColor" id="inputGroup-sizing-default">
          Nombres del Empleado
        </span>
        <input 
          type="text"
          className="form-control" 
          aria-label="Nombres del Empleado" 
          aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3 inputSearchLarge">
        <span className="input-group-text inputLeftColor" id="inputGroup-sizing-default">
          Apellidos del Empleado
        </span>
        <input 
          type="text"
          className="form-control" 
          aria-label="Apellidos del Empleado" 
          aria-describedby="inputGroup-sizing-default" />
      </div>


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
                      <tr>
                        <th className='text-center'>Si</th>
                        <td>Noel Alexander Renderos Martínez</td>
                        <td>Programador Java</td>
                        <td>SEDE</td>
                        <td>Unidad Normativa de Adquisiciones de la Administración Pública</td>
                        <td className='text-center'>NO</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th className='text-center'></th>
                        <td>Miguel Alexander Perez Lemus</td>
                        <td>Jefe Tecnología</td>
                        <td>SEDE</td>
                        <td>Unidad Normativa de Adquisiciones de la Administración Pública</td>
                        <td className='text-center'>Si</td>
                        <td></td>
                      </tr>
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
                        <td>7485 9632x</td>
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
    </div>
  )
}
