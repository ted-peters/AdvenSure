// import React, { useState } from 'react';
// import { Navbar,  NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import asLogo from "../asLogo.png";

// const Example = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="faded" light style={{backgroundColor: '#f5f5f5', marginBottom: '20px'}}>
//         <NavbarBrand href="/" className="mr-auto"><img src={asLogo} alt="AdvenSure Logo" width="50" /> AdvenSure</NavbarBrand>
//         {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar> */}
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/login">Login</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/register">Sign Up</NavLink>
//             </NavItem>
//           </Nav>
//         {/* </Collapse> */}
//       </Navbar>
//     </div>
//   );
// }

// export default Example;

import React from "react";
import { NavbarBrand } from 'reactstrap';
import asLogo from "../../asLogo.png";

import { Link } from "react-router-dom";
import "./Nav.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function Nav() {

    const refreshPage = () => {
        window.location.href = "/login";
    }
    const userPage = () => {
        window.location.href = "/user";
    }
    return (

        <Router>
            <nav className="navbar navbar-expand-lg text-light">
                <div className="container">
                    <NavbarBrand href="/" className="mr-auto"><img src={asLogo} alt="AdvenSure Logo" width="50" /> AdvenSure</NavbarBrand>
                    <ul className="navbar-nav">
                        <Switch>
                            {/* <Route path="/">

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
                            </Route>
                            <Route path="/login">

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
                            </Route>
                            <Route path="/register">

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
                            </Route> */}
                            <Route path="/user">

                                <li className="nav-item">

                                    {/* <Link
                                        to="/login"
                                        className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
                                    > Logout</Link> */}
                                    <button style={{
                                            fontSize: "18px",
                                            color: "white",
                                            opacity: ".6",
                                            borderRadius: "40px",
                                            background: "linear-gradient(to top, #2193b0, #3a7bd5",
                                            marginTop: "16px",
                                            marginLeft: "5px",
                                            height: "40px",
                                            border: "none",
                                            boxShadow:  "-1px 0px 1px #6fadcb, 0px 1px 1px #54809d, -2px 1px 1px #6fadcb, -1px 2px 1px #54809d, -3px 2px 1px #6fadcb, -2px 3px 1px #54809d;",
                                         }}
                                 onClick={refreshPage}>Logout</button>
                                </li>
                            </Route>
                            <Route path="/checklist">

                                <li className="nav-item">

                                    {/* <Link
                                        to="/login"
                                        className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
                                    > Logout</Link> */}
                                    <button style={{
                                            fontSize: "16px",
                                            color: "white",
                                            opacity: ".6",
                                            borderRadius: "17px",
                                            background: "linear-gradient(to top, #2193b0, #3a7bd5",
                                            marginTop: "10px",
                                            marginRight: "6px",
                                            marginLeft: "5px",
                                            height: "37px",
                                            border: "none",
                                            boxShadow:  "-1px 0px 1px #6fadcb, 0px 1px 1px #54809d, -2px 1px 1px #6fadcb, -1px 2px 1px #54809d, -3px 2px 1px #6fadcb, -2px 3px 1px #54809d;",
                    }} onClick={userPage}>My Trips</button>
                                    <button style={{
                                            fontSize: "15px",
                                            color: "white",
                                            opacity: ".6",
                                            borderRadius: "17px",
                                            background: "linear-gradient(to top, #2193b0, #3a7bd5",
                                            marginTop: "16px",
                                            marginLeft: "10px",
                                            height: "37px",
                                            border: "none",
                                            boxShadow:  "-1px 0px 1px #6fadcb, 0px 1px 1px #54809d, -2px 1px 1px #6fadcb, -1px 2px 1px #54809d, -3px 2px 1px #6fadcb, -2px 3px 1px #54809d;",
                                    }} onClick={refreshPage}>Logout</button>

                                </li>
                            </Route>
                        </Switch>
                    </ul>
                </div>
            </nav>
        </Router>
    );
}

export default Nav;