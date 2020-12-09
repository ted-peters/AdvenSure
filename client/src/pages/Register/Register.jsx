import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Input, Button, Card, CardTitle, CardText } from "reactstrap";
import './Register.css';
import { Link } from "react-router-dom";

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const refreshPage = () => {
    window.location.href="/login";
  }
  
  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/api/register",
    }).then(localStorage.setItem("user", JSON.stringify(registerUsername))).then(refreshPage())
  };
  const handleKeyPress = (target) => {
    if(target.charCode==13){
      register();    
    } 
  }
  return (
    <div className="container text-center" body inverse style={{ padding: '25px' }}>
      <div className="row">
        <div className="col-12 text-center">
          <h1>AdvenSure</h1>
          <p>Where opportunity meets preparation.</p>
          
        </div>
      </div>
      <Row>
        <Card className="card" body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
          <CardTitle className="font" body inverse style={{ color: 'black', opacity: '.7' }}>Welcome</CardTitle>
          <Input style={{borderRadius: '100px'}}
            className="input"
            placeholder="Name"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <Input style={{borderRadius: '100px'}}
            className="input"
            placeholder="Email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <Input style={{borderRadius: '100px'}}
            className="input"
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <row className="d-flex justify-content-center">
            <Button className="button" size="sm" style={{ background: "#7F7CAF", borderRadius: '100px', color: 'white', opacity: ".8", border: "none" }} onClick={register}>Register</Button>
          </row>
        </Card>
      </Row>
      <p className="text-center">Already have an account? <Link to="/login">Log In</Link ></p>
    </div>
  );
}

export default Register;
