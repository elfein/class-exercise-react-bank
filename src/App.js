import React, { Component } from 'react'
// 1. first we brought in reaxt router dom with npm i, and brought in these things
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Login from './components/Login';
import Debits from './components/Debits';
import axios from 'axios';

class App extends Component {
  state = {
    balance: '',
    currentUser: {
      username: 'Bob_loblaw',
      memberSince: '08/23/99'
    },
    debitData: []
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:4000/debits')
    const debitAmounts = response.data.map((debit) => {
      return debit.amount
    })
    const debitTotal = debitAmounts.reduce((acc, amount) => {
      return acc+=amount
    })
    this.setState({ debitData: response.data, balance: 0-debitTotal })
  }

  updateUser = (updatedUser) => {
    const currentUser = {...this.state.currentUser}
    currentUser.username = updatedUser.username
    this.setState({ currentUser })
  }

  render() {
    const HomeComponent = () => (
      <Home balanceToHomePage={this.state.balance} />
    )

    const UserProfileComponent = () => (
      <UserProfile currentUser={this.state.currentUser} />
    )

    const LoginComponent = () => (
      <Login updateUser={this.updateUser} />
    )

    const DebitsComponent = () => (
      <Debits debitData={this.state.debitData} balance={this.state.balance} />
    )


    // 2. this was how we set up router
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent} />
          <Route exact path='/profile' render={UserProfileComponent} />
          <Route exact path='/login' render={LoginComponent} />
          <Route exact path='/debits' render={DebitsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App
