import React from "react";
import "./Movements.css";
import "./Movdetails"
import Movdetails from "./Movdetails";
import {BsSearch ,BsChevronRight} from "react-icons/bs";


function Movements() {
  return (
    <div className="movements">
      <div className="movements__title">Tu actividad</div>
      <div className="movements__search">
        <div><BsSearch style={{color:"gray"}}/></div>
        <input placeholder="Buscar"></input>
      </div>
      <Movdetails movement="Transferiste a Agustin Vanetta" amount="$10.000,00" date="Ayer"/>
      <Movdetails movement="Recibiste de Franco Soria" amount="-$13.050,10" date="Martes"/>
      <Movdetails movement="Egreso de dinero" amount="$1.000,00" date="Lunes"/>
      <Movdetails movement="Ingresaste dinero" amount="-$3.500,00" date="10 de abril"/>
      <Movdetails movement="Pagaste a Monica Martinez" amount="$450,00" date="5 de abril"/>
      <Movdetails movement="Ingresaste dinero" amount="-$2.300,00" date="1 de abril"/>
      <Movdetails movement="Ingresaste dinero" amount="$2.700,50" date="29 de Marzo"/>
      <Movdetails movement="Egreso de dinero" amount="$1.100,00" date="25 de Marzo"/>
      <Movdetails movement="Compraste en Super dino" amount="$5.000,00" date="20 de Marzo"/>
      <Movdetails movement="Transferiste a Agustin Vanetta" amount="$1.000,00" date="19 de Marzo"/>

      <div className="movements__details2">
        <div>Ver toda tu actividad</div>
        <div className="movements__date">
          <div className="movements__money"><BsChevronRight/></div>
        </div>
      </div>
     
    </div>
  );
}

export default Movements;
