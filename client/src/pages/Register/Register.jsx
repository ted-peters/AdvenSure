import React, { useState } from "react";
import Axios from "axios";
import {Container, Row, Input, Button, Card, CardTitle, CardText } from "reactstrap";
import './Register.css';
import {Link} from "react-router-dom";

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    }).then((res) => console.log(res));
  };
  
  return (
    <div className="container text-center">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>AdvenSure</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eaque ullam? Placeat aliquam, labore, quos porro sed eos tempora rerum ea iste veritatis doloribus amet. Ipsa deleniti culpa explicabo minus!</p>
                        <hr />
                    </div>
                </div>
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
            <Button className="button" onClick={Register}>Login</Button>
          </Card>
      </Row>
      <p className="text-center">If you already have a log in information, please <Link to="/login">Log In</Link></p>

      </div>
  );
}

export default Register;
