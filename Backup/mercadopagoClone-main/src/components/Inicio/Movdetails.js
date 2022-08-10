import React, { Component } from 'react'
import {BsCashCoin} from "react-icons/bs";


export default class Mov__details extends Component {
    constructor(props) {
      super(props)
      this.state = {
        
      }
    }
  render() {
    return (
        <div className="movements__details">
          
          <div className='movements__details_text'><span className="movements__icon"><BsCashCoin/></span>{this.props.movement}</div>
          <div className="movements__date">
          <div className="movements__money">{this.props.amount}</div>
          <div className="movements__day">{this.props.date}</div>
        </div>
      </div>
    )
  }
}
