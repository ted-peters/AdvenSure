import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Input, Button, Card, CardTitle, CardText } from "reactstrap";
import './Register.css';
import {Link} from "react-router-dom";

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
    <div className="container text-center">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>AdvenSure</h1>
                        <p>Where opportunity meets preparation.</p>
                        <hr />
                    </div>
                </div>
    <Row>
          <Card className="card" body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <CardTitle className="font" body inverse style={{ color: 'black', opacity: '.7'}}>New User</CardTitle>
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
            <Button className="button" style={{ color: 'black' }} onClick={register}>Register</Button>
          </Card>
      </Row>
      <p className="text-center">If you already have a log in information, please <Link to="/login">Log In</Link></p>

      </div>
  );
}

export default Register;
