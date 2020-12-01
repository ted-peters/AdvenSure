import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from "axios";
import '../pages/Login.css'


function UserLogin() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001",
    }).then((res) => console.log(res));
  };
  
  return (
    <>
      <Form className="loginForm" inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={(e) => setLoginUsername(e.target.value)} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
        </FormGroup>
        <Button onClick={login}>Login</Button>
      </Form>
    </>
  );
}

export default UserLogin;