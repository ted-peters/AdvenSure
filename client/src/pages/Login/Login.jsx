import React, { useState } from "react";
import axios from "axios";
import {Row, Input, Button, Card, CardTitle,} from "reactstrap";
import './Login.css'


function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

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

  const logout = () => {
    axios({
      method:"GET",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: false,
      url: "/api/logout",
    })
  };
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:3001/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };
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
          <Button className="button" onClick= {logout}>Logout</Button>
          </Card>
      </Row>
      {/* <Row>
        <Container>
          <Card className="card" body inverse style={{ backgroundColor: '#f1f5', borderColor: '#f1f5' }}>
            <CardTitle className="font" >Get User</CardTitle>
            <Button className="button" onClick={getUser}>Submit</Button>
            {data ? <h1>Welcome Back: {data.username}</h1> : null}
          </Card>
        </Container>
      </Row> */}
    </div>
  );
}

export default Login;
