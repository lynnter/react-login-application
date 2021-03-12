import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



export class RegForm extends Component {
    constructor(){
        super()
        this.state = {
          fullName: '',
          username: '',
          email: '',
          password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
    
    changeFullName(e) {
      this.setState({
        fullName: e.target.value
      })
    }
    
    changeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
    
    changeEmail(e) {
      this.setState({
        email: e.target.value
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
        fullName: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
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
    <h1>Create an Account</h1>
        <div className="form-div">
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Full Name"
            onChange={this.changeFullName}
            value={this.state.fullName}
            className="form-control form-group"
            />

        <input type="text" placeholder="Username"
            onChange={this.changeUsername}
            value={this.state.username}
            className="form-control form-group"
            />

        <input type="text" placeholder="E-mail"
            onChange={this.changeEmail}
            value={this.state.email}
            className="form-control form-group"
            />

        <input type="password" placeholder="Password"
            onChange={this.changePassword}
            value={this.state.password}
            className="form-control form-group"
            />

            <input type="submit" className="btn btn-danger btn-block" value="Register" />
            
            <span className="form-input-login">
            Already have an account? Login <Link to="/login">here</Link>
            </span>
            </form>
        </div>
</div>

            </div>
        )
    }
}

export default RegForm
