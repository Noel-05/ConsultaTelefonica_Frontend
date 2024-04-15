import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./styles/style.css"

import Navbar from "./layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ConsultaEmpleados from './consultaEmpleados/ConsultaEmpleados';
import ConsultaUnidad from './consultaUnidad/ConsultaUnidad';
import Cumpleaneros from './cumpleañeros/Cumpleaneros';

function App() {
  return (
    <div className="App">
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
