import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './Landing';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  

  render() {
    return (
    <Router>
    <div className="main">

 

        <Switch>
        <Route path="/registration">
        <RegForm />
        </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>


    </div>
    </Router>)
  }

}
export default App;
