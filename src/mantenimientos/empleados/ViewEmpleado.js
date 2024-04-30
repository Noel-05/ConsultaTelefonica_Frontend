import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImagenNoDisponible from '../../img/imagenNoDisponible.png'
import { FaPencilAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Modal from '../../components/Modal';

export default function ViewEmpleado() {

  // Declaración de la variable que guardará el listado de Empleados.
  const [employeeList, setEmployeeList] = useState([]);

  // Declaración e inicialización de la variable que guardará los parametros para el Modal de Eliminar.
  const [modalProperties, setModalProperties] = useState({
    path: '',
    title: ''
  });
  
  // Declaración e inicialización de la variable que guardará lo ingresado en los inputs.
  const [employee, setEmployee] = useState({
    carnet: '',
    first_name: '',
    last_name: ''
  });

  // Declaración del objeto Empleado para manipular el evento onChange.
  const {carnet, first_name, last_name} = employee;

  // Llamada a la Api al renderizar el componente para obtener los Empleados.
  useEffect(() => {
    getEmployees();
  }, [])

  // Función para llamar a la api para recuperar todos los Empleados.
  const getEmployees = async () => {
    const listEmployee = await axios.get(`
      ${process.env.REACT_APP_API_URL}/empleados
    `);
    setEmployeeList(listEmployee.data);
    setEmployee({carnet: '', first_name: '', last_name: ''});
  }

  // Función para recuperar lo ingresado en los inputs por el evento onChange que serán utilizados como filtros.
  const onInputChange = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  };

  // Función para llamar a la api y recuperar los empleados según lo que se haya indicado en los filtros.
  const searchEmployees = async() => {
    if(carnet !== '' || first_name !== '' || last_name !== ''){
      const getEmployees = await axios.get(`
        ${process.env.REACT_APP_API_URL}/empleado?firstname=${first_name}&lastname=${last_name}&carnet=${carnet}
      `);
      setEmployeeList(getEmployees.data);
    }
  };

  // Función para pasar los parámetros que requiere el Componente Modal por medio de sus props.
  const deleteEmployee = (employee) => {
    setModalProperties({
      path: `${process.env.REACT_APP_API_URL}/empleado/${employee.id}`,
      title: `¿Seguro que desea eliminar al Empleado: ${employee.first_name} ${employee.last_name}?`
    });
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='input-group mb-3 ps-4'>
              <span className='input-group-text inputLeftColor'>
                Carnet del Empleado
              </span> 
              <input 
                type='text'
                className='form-control'
                aria-label='Carnet del Empleado'
                aria-describedby='inputGroup-sizing-default'
                name='carnet'
                value={carnet}
                onChange={(e) => onInputChange(e)}/>
            </div>

            <div className='input-group mb-3 ps-4'>
              <span className='input-group-text inputLeftColor'>
                Nombres del Empleado
              </span> 
              <input 
                type='text'
                className='form-control'
                aria-label='Nombres del Empleado'
                aria-describedby='inputGroup-sizing-default'
                name='first_name'
                value={first_name}
                onChange={(e) => onInputChange(e)}/>
            </div>

            
            <div className='input-group mb-3 ps-4'>
              <span className='input-group-text inputLeftColor'>
                Apellidos del Empleado
              </span> 
              <input 
                type='text'
                className='form-control'
                aria-label='Apellidos del Empleado'
                aria-describedby='inputGroup-sizing-default'
                name='last_name'
                value={last_name}
                onChange={(e) => onInputChange(e)}/>
            </div>
          </div>

          <div className='col container text-start my-auto d-inline-flex'>
            <div className='p-1'>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={searchEmployees}
              >
                Buscar
              </button>
            </div>

            <div className='p-1'>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={getEmployees}
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid text-start px-4'>
        <div className='row'>
          <div className='col'>
            <div className='container mt-4'>

              <div className='card border-gray'>
                <div className='card-header btnTableHeader'>
                  <Link className='btn btn-outline-dark' to={'/empleado/new'}>
                    Agregar Empleado
                  </Link>
                </div> 

                <div className='card-body'>
                  <table className='table table-hover table-sm tableFont'>
                    <thead>
                      <tr>
                        <th scope='col' className='text-center'>Carnet</th>
                        <th scope='col' className='text-center'>Nombre</th>
                        <th scope='col' className='text-center'>Puesto</th>
                        <th scope='col' className='text-center'>Unidad</th>
                        <th scope='col' className='text-center'>Dependencia</th>
                        <th scope='col' className='text-center'>Rol</th>
                        <th scope='col' className='text-center'>Foto</th>
                        <th scope='col' className='text-center'>Acciones</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        employeeList.map( (employee) => (
                        <tr key={employee.id} className='align-middle'>
                          <td className='text-center'>{employee.carnet}</td>
                          <td className='text-center'>{employee.first_name} {employee.last_name}</td>
                          <td className='text-center'>{employee.puesto_name}</td>
                          <td className='text-center'>{employee.unidad_name}</td>
                          <td className='text-center'>{employee.dependencia_name} ({employee.dependencia_code})</td>
                          <td className='text-center'>{employee.rol_name}</td>
                          
                          <td>
                            <img src={ImagenNoDisponible} alt='Foto Empleado' className='imgCumple' />
                          </td>
                          
                          <td>
                            <div className='d-inline-flex'>
                              <div className='p-1'>
                                <Link 
                                  className='btn btn-outline-dark' 
                                  to={'/empleado/new'}
                                >
                                  <FaPencilAlt />
                                </Link>
                              </div>

                              <div className='p-1'>
                                <button 
                                  className='btn btn-outline-danger'
                                  data-bs-toggle="modal" 
                                  data-bs-target="#exampleModal"
                                  onClick={() => deleteEmployee(employee)}
                                >
                                  <MdDeleteForever />
                                </button>
                              </div>
                            </div>
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
        </div>
      </div>

      <Modal modalProperties={modalProperties} refreshFunction={getEmployees}/>

    </div>
  )
}
