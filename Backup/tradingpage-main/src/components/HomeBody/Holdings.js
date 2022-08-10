import React from 'react'
import "./Holdings.css"

function Holdings() {
  return (
    <div className='holdings'>
        <div className='holdings__container' >
                <iframe width="100%" frameBorder="0"
                        height="100%" 
                        src="https://widget.finnhub.io/widgets/etf-holdings?symbol=SPY&theme=dark" title="SPY Holdings Data by Finnhub Stock API">
                </iframe>
        </div>
    </div>
  )
}

export default Holdings