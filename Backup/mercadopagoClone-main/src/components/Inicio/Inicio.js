import React from 'react'
import BotonArrepentimiento from './BotonArrepentimiento';
import DescubriMas from './DescubriMas';
import DetalleCuenta from './DetalleCuenta';
import FooterInicio from './FooterInicio';
import "./Inicio.css"
import Movements from './Movements.js';
import Recomenda from './Recomenda';

function Inicio() {
  return (
      <div className='inicio'>
        <div className='inicio__body'>
          <div className='inicio__left'>
              <DetalleCuenta/>
              <DescubriMas/>
              <Recomenda/>
              <BotonArrepentimiento/>
          </div>
          <Movements/>
        </div>
        <div className='inicio__footer'>
          <FooterInicio/>
        </div>
      </div>
  )
}

export default Inicio