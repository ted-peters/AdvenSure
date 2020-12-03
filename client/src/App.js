import React, {useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css"
import axios from 'axios';
import Nav from './comp/Nav/Nav';
import Footer from './comp/Footer/Footer';
import Home from './pages/Homepage/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Weather from './pages/Weather';
import Logout from './pages/Logout/logout';
import Checklist from './pages/checklist/CheckList';
import {useAuth, actions} from './utils/authState';

export default function App() {
    const [authState, authDispatch] = useAuth();
    useEffect(() => {
        axios.get("/api/user").then((response) => {
            authDispatch({
                type: actions.LOGIN,
                // displayName: response.data.displayName,
                // userId: response.data.id
            })
        }).catch(err => {
            authDispatch({
                type: actions.LOGOUT,
            })
        })
    }, []);

  return (
    <Router>{/* This is for creacting all application as a router app */}
    <div>
      <Nav />
      <Switch>
        <Route path="/login">
          {
            !authState.isLoggedIn
            ?<Login />
            :<Redirect to={"/"} />
          }
        </Route>
        <Route path="/logout" >
          {
            !authState.isLoggedin
            ?<Home />
            :<Redirect to={"/"} />
          }
          <Logout />
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
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  )
}
