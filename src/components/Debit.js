import React, { Component } from 'react'

export default class Debit extends Component {
  render() {
    return (
      <div>
        <div><strong>Amount: </strong>{this.props.amount}</div>
        <div><strong>Date: </strong>{this.props.date}</div>
        <div><strong>Description: </strong>{this.props.description}</div>
        <br/>
      </div>
    )
  }
}
