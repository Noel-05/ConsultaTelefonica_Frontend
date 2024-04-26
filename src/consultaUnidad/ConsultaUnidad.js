import React, { useEffect, useState } from 'react'
import TablaEmpleados from '../components/TablaEmpleados'

import Select from 'react-select';
import axios from 'axios';

export default function ConsultaUnidad() {

  // Declaración de las variables para actualizar la Dependencia y Unidad seleccionada.
  const [dependencieSelected, setDependencieSelected] = useState([]);
  const [unidadSelected, setUnidadSelected] = useState([]);

  // Declaración de las variables para guardar el listado de Dependencia y Unidad recuperado de la api.
  const [dependenciesList, setDependenciesList] = useState([]);
  const [unidadesList, setUnidadesList] = useState([]);

  // Declaración de la variable a utilizar para guardar el listado de Empleados recuperados de la api.
  const [employeeList, setEmployeeList] = useState([]);


  // Obtención de las Dependencias al renderizar, la petición se realizará una sola vez, por eso se le pone [] al final.
  useEffect(() => {
    const searchDependencies = async() => {
      const getDependencies = await axios.get(
        `${process.env.REACT_APP_API_URL}/dependencias`
      );

      // Se crea un nuevo arreglo con value y label ya que es el formato que solicita el Select de React.
      const newOptions = getDependencies.data.map(depend => ({
        value: depend.id,
        label: depend.code + " - " + depend.name
      }));
  
      setDependenciesList(newOptions);
    }

    searchDependencies();
  }, []);

  
  /*  Función para setear la Dependencia seleccionada, 
      se limpia el Select de Unidad ya que es una nueva dependencia seleccionada 
      y se buscan las unidades que pertenezcan a dicha Dependencia para llenar el Select de Unidad. */
  const setDependencie = (selected) => {
    setDependencieSelected(selected);
    setUnidadSelected([]);
    searchUnidades(selected.value);
  }

  /*  Función para setear la Unidad seleccionada, 
      y se obtiene el listado de Empleados que pertenezcan a dicha Unidad para mostrarlos en la tabla. */
  const setUnidad = (selected) => {
    setUnidadSelected(selected);
    searchEmployees(selected.value);
  }

  // Función para llamar a la api para la recuperación de las Unidades que pertenecen a la dependencia seleccionada.
  const searchUnidades = async(dependenciaId) => {
    const getUnidades = await axios.get(
      `${process.env.REACT_APP_API_URL}/unidad/dependencia/${dependenciaId}`
    );

    // Se crea un nuevo arreglo con value y label ya que es el formato que solicita el Select de React.
    const newOptions = getUnidades.data.map(unidad => ({
      value: unidad.id,
      label: unidad.code + " - " + unidad.name
    }));

    setUnidadesList(newOptions);
  }

  // Función para llamar a la api para la recuperación de los empleados según la Unidad seleccionada.
  const searchEmployees = async(unidadId) => {
    const searchEmpleado = await axios.get(
      `${process.env.REACT_APP_API_URL}/empleado/unidad/${unidadId}`
    );
    
    setEmployeeList(searchEmpleado.data);
  }

  /*  Función para actualizar la lista de Empleados y limpiar los filtros. 
      Dicha función se le manda al componente como una prop y está se manda a llamar desde el botón de la tabla.  */
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
