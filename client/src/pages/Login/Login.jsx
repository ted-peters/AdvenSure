import React, { useState } from "react";
import axios from "axios";
import {Row, Input, Button, Card, CardTitle,} from "reactstrap";
import './Login.css'


function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    })
  };

  return (
    <div className="loginBody">
      <Row>
          <Card className="card" body inverse style={{ backgroundColor: '#ff55', borderColor: '#f1f5' }}>
            <CardTitle className="font">Welcome Back</CardTitle>
            <Input
              className="input"
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <Input
              className="input"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Button className="button" onClick= {login}>Login</Button>
          </Card>
      </Row>
    </div>
  );
}

export default Login;
