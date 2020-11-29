import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Nav from './comp/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Weather from './pages/Weather'

export default function App() {
  return (
    <Router>{/* This is for creacting all application as a router app */}
    <div>
      <Nav />
      <Switch>{/* Switch decide which path your component */}
        <Route path="/login">{/* Create a route using path */}
          <Login />{/* Show component for that path */}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/weather">
          <Weather city="Houston"/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  )
}
