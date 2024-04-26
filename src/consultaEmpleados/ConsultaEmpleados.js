import React, { useState } from 'react'
import TablaEmpleados from '../components/TablaEmpleados'
import axios from 'axios';

export default function ConsultaEmpleados() {
  
  // Declaracion e inicialización de la variable Empleado que guardará lo ingresado en los input.
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: ''
  });

  // Declaración de la variable a utilizar para guardar el listado de Empleados recuperados de la api.
  const [employeeList, setEmployeeList] = useState([]);

  // Declaración del objeto empleado para manipular el evento onChange de los input.
  const {firstname, lastname} = employee;


  /*  Función para setear la información al objeto Empleado la cual se obtiene de los input 
      en la llamada desde el evento onChange. Se envia el name del input y el value del input. */
  const onInputChange = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value});
  };

  // Función para llamar a la api para la recuperación de los empleados según los filtros indicados.
  const searchEmployees = async() => {
    const searchEmpleado = await axios.get(
      `${process.env.REACT_APP_API_URL}/empleado?firstname=${firstname}&lastname=${lastname}`
    );
    
    setEmployeeList(searchEmpleado.data);
  }

  /*  Función para actualizar la lista de Empleados y limpiar los filtros. 
      Dicha función se le manda al componente como una prop y está se manda a llamar desde el botón de la tabla.  */
  const updateEmployeeList = (newEmployeeList) => {
    setEmployeeList(newEmployeeList);
    setEmployee({firstname: '', lastname: ''});
  }

  return (
    <div>
      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="input-group mb-3 inputSearchLarge">
              <span className="input-group-text inputLeftColor" id="inputGroup-sizing-default">
                Nombres del Empleado
              </span>
              <input 
                type="text"
                className="form-control" 
                aria-label="Nombres del Empleado" 
                aria-describedby="inputGroup-sizing-default" 
                name='firstname'
                value={firstname}
                onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="input-group mb-3 inputSearchLarge">
              <span className="input-group-text inputLeftColor" id="inputGroup-sizing-default">
                Apellidos del Empleado
              </span>
              <input 
                type="text"
                className="form-control" 
                aria-label="Apellidos del Empleado" 
                aria-describedby="inputGroup-sizing-default" 
                name='lastname'
                value={lastname}
                onChange={(e) => onInputChange(e)}/>
            </div>
          </div>

          <div className='col container text-start my-auto'>
            <button 
              type="button" 
              className="btn btn-outline-dark"
              onClick={searchEmployees}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      <TablaEmpleados employeeList={employeeList} setEmployeeList={updateEmployeeList}/>

    </div>
  )
}
