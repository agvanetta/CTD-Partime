import React from 'react'
import "./Bannerbot.css"
import Banner from './bannerbot.png'

function Bannerbot() {
  return (
    <div className='bannerbot'><img
    className="banner__image2"
    src={Banner}
    // src="https://www.thedubs.com/wp-content/uploads/2021/08/case-study-robinhood-removing-barriers-to-entry-banner.jpg"
    alt=""
    /></div>
  )
}

export default Bannerbot