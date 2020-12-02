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
// import "./style.css"

function Nav() {
  return (


      <nav className="navbar navbar-expand-lg text-light">
          <div className="container">
           <NavbarBrand href="/" className="mr-auto"><img src={asLogo} alt="AdvenSure Logo" width="50" /> AdvenSure</NavbarBrand>

              <Link className="navbar-brand" to="/">Home</Link>
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
                  <li className="nav-item">
                    
                    <Link
                        to="/logout"
                        className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
                    > Logout</Link>
                </li>
              </ul>
          </div>
      </nav>

  );
}

export default Nav;