import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Input, Button, Card, CardTitle, CardText } from "reactstrap";
import './Register.css'

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/api/register",
    })
  };
  
  return (
    <div className="container">
    <Row>
          <Card className="card" body inverse style={{ backgroundColor: '#ff55', borderColor: '#f1f5' }}>
            <CardTitle className="font">Register Here</CardTitle>
            <Input
              className="input"
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <Input
              className="input"
              placeholder="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <Button className="button" onClick={register}>Login</Button>
          </Card>
      </Row>
      </div>
  );
}

export default Register;
