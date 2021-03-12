import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginForm from '../LoginForm'
import RegForm from '../RegForm'
export default function Auth() {
    return (
        <Router>
          <div>
  
            <ul>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/login">Login Page</Link>
              </li>
            </ul>
  
            <Switch>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/registration">
                <RegForm />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
  
