import React from 'react'
import "./Bannermid.css"

function Bannermid() {
  return (
    <div className='bannermid'>
        <div>
            <img
            className="banner__image__mid"
            src="https://www.criptotendencias.com/wp-content/uploads/2021/09/robinhood.jpg"
            alt=""
            />
        </div>
        <div className='bannermid__text'>
            <p>Investing is simple here</p>
        </div>
    </div>
  )
}

export default Bannermid