import React from 'react'
import "./DescubriMas.css"
// import Carousel1 from './carousel/carousel1.png'
import Carrousel from './Carrousel.js';


function DescubriMas() {
  return (
    <div className='descubrimas'>
        <div className='descubrimas__firsblock'>
            <div className='descubrimas__firsblock__text'>Descubrí más</div>
            <div className='descubrimas__firsblock__circles'>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
        <div className='descubrimas__secondblock'>

            <div className='descubrimas__secondblock__text'>
                <h2>CONVERTITE EN REVENDEDOR</h2>
                <h1>ESTA PAGINA ES UN CLON CON REACTJS</h1>
            </div>
          <Carrousel/>
            {/* <img
                className='descubrimas__secondblock__img'
                src={Carousel1}
                alt='img_carousel1'
                /> */}
        </div>
    </div>
  )
}

export default DescubriMas