import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./styles/style.css"

import Navbar from "./layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logoGobierno from "./img/logoGobierno2.jpg";

import Home from './pages/Home';
import ConsultaEmpleados from './consultaEmpleados/ConsultaEmpleados';
import ConsultaUnidad from './consultaUnidad/ConsultaUnidad';
import Cumpleaneros from './cumpleaneros/Cumpleaneros';
import ViewEmpleado from './mantenimientos/empleados/ViewEmpleado';
import AddEmpleado from './mantenimientos/empleados/AddEmpleado';
import Favicon from 'react-favicon';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Consulta Telefónica MH"
  }, []);

  return (
    <div className="App">
      <Favicon url={logoGobierno} />

      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/consultaEmpleados' element={<ConsultaEmpleados />} />
          <Route path='/consultaUnidad' element={<ConsultaUnidad />} />
          <Route path='/cumpleaneros' element={<Cumpleaneros />} />
          <Route path='/empleados' element={<ViewEmpleado />} />
          <Route path='/empleado/new' element={<AddEmpleado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
