import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class Login extends Component {
    state = {
        user: {
            username: ''
        },
        redirect: false
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.user)
        this.setState({ redirect: true })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/profile" />
        } 

        return (
            < div >
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" onChange={this.handleChange} value={this.state.user.username} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <button>Log In</button>
                    </form>
                    <div><Link to='/profile'>Back to Profile</Link></div>
                </div>
            </div >
        )
    }
}
