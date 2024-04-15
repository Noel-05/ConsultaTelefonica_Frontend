import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./styles/style.css"

import Navbar from "./layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logoGobierno from "./img/logoGobierno.png";

import Home from './pages/Home';
import ConsultaEmpleados from './consultaEmpleados/ConsultaEmpleados';
import ConsultaUnidad from './consultaUnidad/ConsultaUnidad';
import Cumpleaneros from './cumpleaneros/Cumpleaneros';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
