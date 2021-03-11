import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


export class RegForm extends Component {
    constructor(){
        super()
        this.state = {
          username: '',
          password: '',
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    

    
    changeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
    
    
    changePassword(e) {
      this.setState({
        password: e.target.value
      })
    }
    
    
    onSubmit(e) {
      e.preventDefault()
    
      const registered = {
        username: this.state.username,
        password:this.state.password,
      }
    
      axios.post('http://localhost:4000/app/signup', registered)
      .then(res => console.log(res.data))
    
      this.setState({
        fullName: '', 
        username: '',
        email: '',
        password: ''
      })
    }

    render() {
        return (
            <div>
    <div className="form-container">
    <h1>Sign In</h1>
        <div className="form-div">
            <form onSubmit={this.onSubmit}>

        <input type="text" placeholder="Username"
            onChange={this.changeUsername}
            value={this.state.username}
            className="form-control form-group"
            />


        <input type="password" placeholder="Password"
            onChange={this.changePassword}
            value={this.state.password}
            className="form-control form-group"
            />

            <input type="submit" className="btn btn-danger btn-block" value="Register" />
            
            <span className="form-input-login">
            Don't have an account? Register <Link to="/registration">here</Link>
            </span>
            </form>
        </div>
</div>

            </div>
        )
    }
}

export default RegForm
