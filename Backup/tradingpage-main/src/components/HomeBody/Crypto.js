import React from 'react'
import "./Crypto.css"
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

function Crypto() {
  return (
    <div className='crypto'>
        <div className='crypto__title'><span>Cryptocurrency</span> Market</div>
        <div className="crypto__title2">Cryptoactives that are traded in international markets with their respective market data.</div>
        <div className='crypto__widgets'>
        <CryptoCurrencyMarket isTransparent={true} colorTheme="dark" width="100%"></CryptoCurrencyMarket>
        </div>
    </div>
  )
}

export default Crypto