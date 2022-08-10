import React from 'react'
import "./RealTimeChart.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function RealTimeChart() {
let list = ["AAPL", "MSFT", "TSLA", "AMZN", "DESP","YPF","PYPL","KO","MA","V","MCD",
 "AMD", "MELI", "DIS", "GLOB","NVDA","GOOG"]
  return (
    <div className='realtimechart'>
        <AdvancedRealTimeChart  
         className="realtimechart__theme"
         watchlist={list}
         theme="dark" 
         autosize={true}
         >
         </AdvancedRealTimeChart>
    </div>
  )
}

export default RealTimeChart