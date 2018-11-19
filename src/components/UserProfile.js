import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <div>Username: {this.props.currentUser.username}</div>
        <div>Member since: {this.props.currentUser.memberSince}</div>
        <div><Link to='/' >Go Back Home</Link></div>
        <div><Link to='/login' >Login</Link></div>
      </div>
    )
  }
}
