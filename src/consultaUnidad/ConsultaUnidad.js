import React, { useEffect, useState } from 'react'
import TablaEmpleados from '../components/TablaEmpleados'

import Select from 'react-select';
import axios from 'axios';

export default function ConsultaUnidad() {

  const [dependencieSelected, setDependencieSelected] = useState([]);
  const [unidadSelected, setUnidadSelected] = useState([]);

  const [dependenciesList, setDependenciesList] = useState([]);
  const [unidadesList, setUnidadesList] = useState([]);

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const searchDependencies = async() => {
      const getDependencies = await axios.get(
        `${process.env.REACT_APP_API_URL}/dependencias`
      );

      const newOptions = getDependencies.data.map(depend => ({
        value: depend.id,
        label: depend.name
      }));
  
      setDependenciesList(newOptions);
    }

    searchDependencies();
  }, [])

  const setDependencie = (selected) => {
    setDependencieSelected(selected);
    setUnidadSelected([]);
    searchUnidades(selected.value);
  }

  const setUnidad = (selected) => {
    setUnidadSelected(selected);
    searchEmployees(selected.value);
  }

  const searchUnidades = async(dependenciaId) => {
    const getUnidades = await axios.get(
      `${process.env.REACT_APP_API_URL}/unidad/dependencia/${dependenciaId}`
    );

    const newOptions = getUnidades.data.map(unidad => ({
      value: unidad.id,
      label: unidad.name
    }))

    setUnidadesList(newOptions);
  }

  const searchEmployees = async(unidadId) => {
    const searchEmpleado = await axios.get(
      `${process.env.REACT_APP_API_URL}/empleado/unidad/${unidadId}`
    );
    setEmployeeList(searchEmpleado.data);
  }

  const updateEmployeeList = (newEmployeeList) => {
    setDependencieSelected([]);
    setUnidadSelected([]);
    setEmployeeList(newEmployeeList);
  }

  return (
    <div>
      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="input-group mb-3 inputSearchLarge">
              <span className="input-group-text inputLeftColor" id="inputGroup-sizing-default">
                Dependencia
              </span>
              <Select
                options={dependenciesList}
                className='react-select-container selectLarge'
                name='dependencie'
                value={dependencieSelected}
                onChange={setDependencie}/>
            </div>

            <div className="input-group mb-3 inputSearchLarge">
              <span className="input-group-text inputLeftColor" id="inputGroup-sizing-default">
                Unidad
              </span>
              <Select
                options={unidadesList}
                className='react-select-container selectLarge'
                name='unidad'
                value={unidadSelected}
                onChange={setUnidad}/>
            </div>
          </div>
          
        </div>
      </div>

      <TablaEmpleados employeeList={employeeList} setEmployeeList={updateEmployeeList}/>

    </div>
  )
}
