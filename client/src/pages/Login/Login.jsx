import React, { useState } from "react";

import axios from "axios";
import {Link} from "react-router-dom";

import {Row, Input, Button, Card, CardTitle,} from "reactstrap";
import './Login.css'


function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const [isLoggedin, setIsLoggedIn] = useState();

  const refreshPage = () =>{
    window.location.replace("/user")
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
    }).then(refreshPage)
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSubmit();
  }
};
  return (
    <div className="loginBody">
      <div className="container text-center">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>AdvenSure</h1>
                        <p>Where opportunity meets preparation.</p>
                        <hr />
                    </div>
                </div>
                

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
              onKeyPress={handleKeypress}
            />
            <Button className="button" onClick={login}>Login</Button>
          </Card>
      </Row>

      </div>  
      <p className="text-center">If you have not created an account yet, please <Link to="/register">Sign Up</Link></p>
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
