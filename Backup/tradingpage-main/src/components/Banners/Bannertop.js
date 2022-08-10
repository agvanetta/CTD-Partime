import React from 'react'
import "./Bannertop.css"

function Bannertop() {
  return (
    <div className='bannertop'>
        <div>
            <img
            className="banner__image"
            src="https://images.squarespace-cdn.com/content/v1/53fe4a70e4b0a2293ab0e42a/1617712666291-0KI6Z5P1XKYL1ISU9X2U/image-asset.gif?format=1000w"
            alt=""
            />
        </div>
        <div className='banner__text'>
            <h1>Investor</h1>
            <h2>The app is available to manage your investments.</h2>
            <div>Without additional costs and with the same security of the web.</div>
        </div>
    </div>
  )
}

export default Bannertop