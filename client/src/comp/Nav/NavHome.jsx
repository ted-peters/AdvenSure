import React from "react";
import { NavbarBrand } from 'reactstrap';
import asLogo from "../../asLogo.png";

import { Link } from "react-router-dom";
import "./Nav.css"

function NavHome() {
  return (


      <nav className="navbar navbar-expand-lg text-light">
          <div className="container">
           <NavbarBrand href="/" className="mr-auto"><img src={asLogo} alt="AdvenSure Logo" width="50" /> AdvenSure</NavbarBrand>
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link
                          to="/login"
                          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                      > Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link
                          to="/register"
                          className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
                      >Sign Up</Link>
                  </li>
              </ul>
          </div>
      </nav>

  );
}

export default NavHome;