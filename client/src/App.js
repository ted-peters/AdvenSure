import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./comp/Nav/Nav";
import Footer from "./comp/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Weather from "./pages/UserPage/Weather";

import "./App.css";

import axios from "axios";
// import Nav from './comp/Nav/Nav';
// import Footer from './comp/Footer/Footer';
// import Home from './pages/Home';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import Weather from './pages/Weather';
import Logout from "./pages/Logout/logout";
import Checklist from "./pages/Checklist/CheckList";
import { useAuth, actions } from "./utils/authState";
import UserPage from "./pages/UserPage/UserPage";


export default function App() {
  const [authState, authDispatch] = useAuth();
  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        authDispatch({
          type: actions.LOGIN,
          // displayName: response.data.displayName,
          // userId: response.data.id
        });
      })
      .catch((err) => {
        authDispatch({
          type: actions.LOGOUT,
        });
      });
  }, []);

  return (
    <Router>
      {/* This is for creacting all application as a router app */}
      <div>
      
        <Nav />
        <Switch>
          <Route path="/login">
            {!authState.isLoggedIn ? <Login /> : <Redirect to={"/user"} />}
          </Route>
          <Route path="/logout">
            <Logout />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
