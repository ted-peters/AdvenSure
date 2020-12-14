import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Input, Button, Card, CardTitle, } from "reactstrap";
import './Login.css'
import { Fade } from "reactstrap";



function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [fadeIn, setFadeIn] = useState(true);

  const refreshPage = () => {
    window.location.href = "/user";
  }

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    }).then(localStorage.setItem("user", JSON.stringify(loginUsername))).then(refreshPage())
  };
  const handleKeyPress = (target) => {
    if(target.charCode==13){
      login();    
    } 
  }

  return (
    <div className="loginBody">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 text-center">
            <Fade in={fadeIn} tag="h5" className="mt-3">
              <h1>AdvenSure</h1>
              <p>Where opportunity meets preparation.</p>
              </Fade>
            </div>
          </div>
        <Row>
          <Card className="card" body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <CardTitle className="font" style={{ borderRadius: '100px' }}>Welcome Back</CardTitle>
            <Input style={{ borderRadius: '100px' }}
              className="input"
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <Input style={{ borderRadius: '100px' }}
              className="input"
              placeholder="password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <row className="d-flex justify-content-center">
              <Button className="button" size="sm" style={{ background: "#7F7CAF", borderRadius: '100px', color: 'white', opacity: ".8", border: "none" }} onClick={login}>Login</Button>
            </row>
          </Card>
        </Row>
      </div>
      <p className="text-center">Haven't created an account with us?<Link to="/register">Sign Up</Link></p>
    </div>
  );
}

export default Login;
