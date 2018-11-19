import React, { Component } from 'react'
import Debit from './Debit';
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import Axios from 'axios';

export default class Debits extends Component {
    state = {
        newDebit: {
            amount: 0.00,
            date: Date.now(),
            description: ''
        }
    }

    handleChange = (event) => {
        const newDebit = { ...this.state.newDebit }
        newDebit[event.target.name] = event.target.value
        this.setState({ newDebit })
    }

    handleNumberChange = (event) => {
        const newDebit = { ...this.state.newDebit }
        newDebit[event.target.name] = parseFloat(event.target.value).toFixed(2)
        this.setState({ newDebit })
    }

    // mlehhhhhhhhhh
    // addDebit = async (event) => {
    //     event.preventDefault()
    //     const payload = this.state.newDebit
    //     Axios.post('http://localhost:4000/debits', payload)
    //     this._resetForm()
    // }

    render() {
        const debits = this.props.debitData.map((debit, i) => {
            return <Debit key={i} amount={debit.amount} date={debit.date} description={debit.description} />
        })

        return (
            <div>
                <Link to='/'>Back to Homepage</Link>
                <h1>Debits</h1>
                {debits}
                <AccountBalance balance={this.props.balance} />
                <h4>New Debit</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" onChange={this.handleNumberChange} />
                    </div>
                    <button onClick={this.addDebit} >Submit</button>
                </form>
            </div>
        )
    }
}
