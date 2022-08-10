import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Inicio from "./components/Inicio/Inicio";
import { HelperProvider } from "./context/HelperContext";
import TuPerfil from "./components/TuPerfil/TuPerfil";
import Ayuda from "./components/Ayuda/Ayuda";
import TuDinero from "./components/TuDinero/TuDinero";
import Actividad from "./components/Actividad/Actividad";
import EnviarDinero from "./components/EnviarDinero/EnviarDinero";
import CobrarEnTuLocal from "./components/CobrarEnTuLocal/CobraDineroEnTuLocal";
import LinkDePago from "./components/LinkDePago/LinkDePago";
import InformesYFacturacion from "./components/InformesYFacturacion/InformesYFacturacion";
import PlanesYSuscripcion from "./components/PlanesYSuscripcion/PlanesYSuscripcion";
import TuNegocio from "./components/TuNegocio/TuNegocio";

function App() {
  return (
    <div className="App">
      <Router Redirect to="/mercadopagoClone">
        <HelperProvider>
          <Routes>
            <Route path="/mercadopagoClone"element={<>{" "}<Header /> <Inicio /> <Sidebar />{" "}</>}/>
            <Route path="/inicio"element={<>{" "}<Header /> <Inicio /> <Sidebar />{" "}</>}/>
            <Route path="/tuperfil"element={<>{" "}<Header /> <TuPerfil/> <Sidebar />{" "}</>}/>
            <Route path="/ayuda"element={<>{" "}<Header /> <Ayuda/> <Sidebar />{" "}</>}/>
            <Route path="/tudinero"element={<>{" "}<Header /> <TuDinero/> <Sidebar />{" "}</>}/>
            <Route path="/actividad"element={<>{" "}<Header /> <Actividad/> <Sidebar />{" "}</>}/>
            <Route path="/enviardinero"element={<>{" "}<Header /> <EnviarDinero/> <Sidebar />{" "}</>}/>
            <Route path="/cobrarentulocal"element={<>{" "}<Header /> <CobrarEnTuLocal/> <Sidebar /> {" "}</>}/>
            <Route path="/linkdepago"element={<>{" "}<Header /> <LinkDePago /> <Sidebar />{" "}</>}/>
            <Route path="/informesyfacturacion"element={<>{" "}<Header /> <InformesYFacturacion/> <Sidebar />{" "}</>}/>
            <Route path="/planessuscripcion"element={<>{" "}<Header /> <PlanesYSuscripcion/> <Sidebar />{" "}</>}/>
            <Route path="/tunegocio"element={<>{" "}<Header /> <TuNegocio/> <Sidebar />{" "}</>}/>
          </Routes>
        </HelperProvider>
      </Router>
    </div>
  );
}

export default App;
