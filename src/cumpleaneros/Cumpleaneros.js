import React, { useEffect, useState } from 'react'
import TablaEmpleados from '../components/TablaEmpleados'
import axios from 'axios';

export default function Cumpleaneros() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect( () => {
    const getEmployees = async() => {
      const listEmployees = await axios.get(`
        ${process.env.REACT_APP_API_URL}/empleados/cumpleanios
      `);

      setEmployeeList(listEmployees.data);
    }

    getEmployees();
  }, []);

  const updateEmployeeList = (newEmployeeList) => {
    setEmployeeList(newEmployeeList);
  }

  return (
    <TablaEmpleados employeeList={employeeList} setEmployeeList={updateEmployeeList} />
  )
}
