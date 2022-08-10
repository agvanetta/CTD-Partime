import React, { Component } from 'react'

export default class Mov__details extends Component {
    constructor(props) {
      super(props)
      this.state = {
        
      }
    }
  render() {
    return (
        <div className="movements__details">
        <div className='movements__details_text'>{this.props.movement}</div>
        <div className="movements__date">
          <div className="movements__money">{this.props.amount}</div>
          <div className="movements__day">{this.props.date}</div>
        </div>
        <div className='status'>Processed</div>
        <div className='movements__currency'>USD</div>
        <div className="movements__currency">048218083452</div>
      </div>
    )
  }
}
