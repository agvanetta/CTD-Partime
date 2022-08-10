import React, { useState } from 'react'

import LineGraph from './LineGraph'
import "./Newsfeed.css"
import Timeline from './Timeline'

function Newsfeed() {
    const [clicked, setClicked] = useState("none");
    const [clicked2, setClicked2] = useState("ok");

  function doClick() {
    setClicked("");
    setClicked2("none");
    // console.log(clicked)
    // console.log("ejecutado")
  }

  function didClick() {
    setClicked("none");
    setClicked2("");
    // console.log(clicked)
    // console.log("ejecutado")
  }
  return (
    <div className='newsfeed'>
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div id="optionA" className='newsfeed__details' style={{display:clicked2}}>
                    <div className='newsfeed__portfolio'>
                        <h1>$114,656.84</h1>
                        <p>+$44.63 (+.4%) Today</p>
                    </div>
                    <div className='newsfeed__eye'>
                        <button className='newsfeed__eye__button' onClick={clicked === "none" ? doClick : didClick}>
                            <svg id='news__feed__svg' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="optionB" className='newsfeed__details' style={{display:clicked}}>
                    <div className='newsfeed__portfolio'>
                        <h1>$*******</h1>
                        <p>+$**** (+.****%) Today</p>
                    </div>
                    <div className='newsfeed__eye'>
                        <button className='newsfeed__eye__button' onClick={clicked === "none" ? doClick : didClick}>
                            <svg id='news__feed__svg' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph/>
                    <Timeline/>
                </div>
            </div>
            <div className="newsfeed__buying__section">
                <h2> Buying Power</h2>
                <h2 style={{display:clicked}}> $ *****</h2>
                <h2 style={{display:clicked2}}> $ 4.11</h2>
            </div>
            <div className='newsfeed__market__section'>
                <div className='newsfeed__market__box'>
                    <p> News</p>
                    <h1>Could bonds rally with inflation high and the Fed raising rates?
                        More market-timers are betting on it.</h1>
                    <h1>Apple gave investors more than $100 billion last year — how much
                         more is coming?</h1>
                    <h2>More news</h2>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Newsfeed