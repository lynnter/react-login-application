import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './Landing';
import axios from 'axios';
import Header from './Header';
import RegForm from './RegForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
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

changePassword2(e) {
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
    <Router>
    <div className="main">
      <Header />
      <RegForm />

        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
        </Switch>


    </div>
    </Router>)
  }

}
export default App;
