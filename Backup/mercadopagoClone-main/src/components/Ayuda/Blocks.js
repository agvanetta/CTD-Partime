import React from 'react'
import "./Ayuda.css"

function Blocks(props) {
  return (
    <div className='blocks'>
        <span>{props.icon}</span>
        <div>
            <h3>{props.title}</h3>
            <h4>{props.subTitle}</h4>
        </div>
    </div>
  )
}

export default Blocks