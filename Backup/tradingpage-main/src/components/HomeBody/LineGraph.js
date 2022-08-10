import React, {useState, useEffect} from 'react'
import "./LineGraph.css"
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-moment';

function LineGraph() {

    const [data, setData] = useState({});

  useEffect(() => {
    let data = [];
    let value = 50;
    for(var i = 0; i < 366; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({x: date, y: value});
    }   
    setData(data)
  }, []);
    
  return (
    <div className='linegraph'>
        <Line
            data={{
                datasets:[
                    {
                        type:'line',
                        data:data,
                        backgroundColor:"black",
                        borderColor:"#5AC53B",
                        borderWidht:2,
                        pointBorderColor:"rgba(0,0,0,0)",
                        pointBackgroundColor:"rgba(0,0,0,0)",
                        pointHoverBackgroundColor:"#5AC53B",
                        pointHoverBorderColor:'#000000',
                        pointHoverBorderWidth:4,
                        pointHoverRadius:6,
                    }
                ]
            }}
            options= {{
                maintainAspectRatio:false,
                plugins:{
                    tooltip:{
                        mode:"index",
                        intersect:false
                    },
                    legend:{
                        display:false
                    }
                },
                scales: {
                    y: {
                        display: false
                    },
                    x:{
                    type: "time",
                    time: {
                      format: "MM/DD/YY",
                      tooltipFormat: "ll",
                    },
                        display:false
                    }
                }
            }}
        />
        
    </div>
  )
}

export default LineGraph