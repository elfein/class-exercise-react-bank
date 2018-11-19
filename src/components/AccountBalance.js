import React, { Component } from 'react'

export default class AccountBalance extends Component {
    render() {
        return (
            <div>
                <h2>Account Balance: {this.props.balance >= 0 ? '$' + this.props.balance : '-$' + (this.props.balance * -1)}</h2>
            </div>
        )
    }
}
