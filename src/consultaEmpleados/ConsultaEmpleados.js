import React, { useState } from 'react'
import TablaEmpleados from '../components/TablaEmpleados'
import axios from 'axios';

export default function ConsultaEmpleados() {
  
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: ''
  });

  const [employeeList, setEmployeeList] = useState([]);

  const {firstname, lastname} = employee;

  const onInputChange = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value});
  };

  const searchEmployees = async() => {
    const searchEmpleado = await axios.get(
      `${process.env.REACT_APP_API_URL}/empleado?firstname=${firstname}&lastname=${lastname}`
    );
    setEmployeeList(searchEmpleado.data);
  }

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
