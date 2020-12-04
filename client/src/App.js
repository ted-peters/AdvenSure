import React, { useEffect } from 'react'
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
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Weather from './pages/Weather';
import Logout from './pages/Logout/logout';
import Checklist from './pages/checklist/CheckList';
import { useAuth, actions } from './utils/authState';
import UserPage from './pages/UserPage'


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
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/login">
              {
                !authState.isLoggedIn
                  ? <Login />
                  : <Redirect to="/user" />
              }
            </Route>
            <Route exact path="/">
              {
                !authState.isLoggedIn
                  ? <Login />
                  : <Redirect to="/user" />
              }
            </Route>
            <Route path = "/logout">
              {
                !authState.isLoggedIn
                  ?<Redirect to="/login" />
                  :<p className="text-center">You are logged in</p>
              }
              <Logout/>
            </Route>
            <Route path="/register">
          <Register />
        </Route>
        <Route path="/checklist">
          <Checklist />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
