import React, {useState, useEffect} from 'react'
import "./Stats.css"
import axios from 'axios';
import StatsRow from './StatsRow';

const TOKEN = "c9n0qiqad3ie533i12p0";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {

  const [stocksData, setStocksData] = useState([]);

  const getStocksData = (stock) =>{
    return axios
    .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
    .catch((error) => {
      console.log("Error : ", error.message);
    });
  };

  useEffect(() => {
    let tempStocksData=[];
    const stocksList = ["AAPL", "MSFT", "TSLA", "AMZN", "AMD", "MELI", "DIS", "GLOB","NVDA","GOOG"];

    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          // console.log(res)
          tempStocksData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      // console.log(tempStocksData);
      setStocksData(tempStocksData);
    })
  }, []);

  return (
    <div className='stats'>
        <div className='stats__container'>
          <div className='stats__header'>
            <p>Stocks</p>
          </div>
          <div className='stats__content'>
            <div className='stas_rows'>
              
            </div>
          </div>
          {/* <div className='stats__header'>
            <p>List</p>
          </div>
          <div className='stats__content'>
            <div className='stas_rows'> */}
{/* Stocks we can buy */}
              {stocksData.map((stock) => 
                <StatsRow
                key={stock.ticker}
                name={stock.name}
                openPrice={stock.o}
                // volume={stock.t}
                price={stock.c}
                />
              )}
            {/* </div>
          </div> */}
        </div>
    </div>
  )
}

export default Stats