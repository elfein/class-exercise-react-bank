import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <img width="200" src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
                <h1>Bank of React</h1>
                <AccountBalance balance={this.props.balanceToHomePage} />
                <div><Link to='/profile' >User Profile</Link></div>
                <div><Link to='/debits' >View Debits</Link></div>
            </div>
        )
    }
}
