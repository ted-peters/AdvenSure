import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css"
import Nav from './comp/Nav/Nav'
import Footer from './comp/Footer/Footer'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Weather from './pages/Weather'
import Checklist from './pages/checklist/CheckList'


export default function App() {
  return (
    <Router>{/* This is for creacting all application as a router app */}
    <div>
      <Nav />
      <Switch>{/* Switch decide which path your component */}
        <Route path="/login">{/* Create a route using path */}
          <Login />{/* Show component for that path */}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/checklist">
          <Checklist />
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
