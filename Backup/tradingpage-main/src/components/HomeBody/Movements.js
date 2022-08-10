import React from "react";
import "./Movements.css";
import "./Movdetails"
import Movdetails from "./Movdetails";

function Movements() {
  return (
    <div className="movements">
      <div className="movements__title">Latest <span>money movements</span></div>
      <div className="movements__title2">Know the details of the operations that impact your available money.</div>
      <div className="movements__type">
        <div>Type</div>
        <div>Amount</div>
        <div className='status'>Account</div>
        <div className='status'>Status</div>
        <div className='status'>Currency</div>
      </div>
      <Movdetails movement="Deposit" amount="$10.000,00" date="Yesterday"/>
      <Movdetails movement="Buy TSLA" amount="-$13.050,10" date="Tuesday"/>
      <Movdetails movement="Transfer" amount="$1.000,00" date="Monday"/>
      <Movdetails movement="Withdrawal" amount="-$3.500,00" date="April 10th"/>
      <Movdetails movement="Payment of dividends" amount="$450,00" date="April 5th"/>
      <Movdetails movement="Withdrawal" amount="-$2.300,00" date="April 1st"/>
      <Movdetails movement="Sell AAPL" amount="$2.700,50" date="March 1st"/>

      <div className="movements__details2">
        <div></div>
        <div className="movements__date">
          <div className="movements__more">See all my moves</div>
        </div>
      </div>
     
    </div>
  );
}

export default Movements;
